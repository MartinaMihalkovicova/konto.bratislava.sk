import ArrowLeft from '@assets/images/new-icons/ui/arrow-left.svg'
import CloseIcon from '@assets/images/new-icons/ui/cross.svg'
import { handleOnKeyPress } from '@utils/utils'
import cx from 'classnames'
import React, { Dispatch, SetStateAction, useState } from 'react'

import Button from '../../simple-components/Button'

type ModalBase = {
  show: boolean
  divider?: boolean
  onClose: () => void
  onSubmit: (params: OnSubmitParams) => void
  content: ((value: any) => JSX.Element)[] | ((value: any) => JSX.Element)
  header?: string
  confirmLabel?: string
  cancelLabel?: string
  className?: string
}

type OnSubmitParams = {
  data?: any
}

type ModalHeaderBase = Omit<
  ModalBase,
  'content' | 'confirmLabel' | 'cancelLabel' | 'onSubmit' | 'show' | 'startedIndex'
> & {
  hasHeader: boolean
  currentScreenIndex: number
  setCurrentScreenIndex: Dispatch<SetStateAction<number>>
  header?: string
}

const ModalHeader = ({
  divider = false,
  onClose,
  currentScreenIndex,
  setCurrentScreenIndex,
  header,
  hasHeader,
}: ModalHeaderBase) => {
  const headerStyle = cx(
    'flex py-[18px] sm:py-4 px-4 sm:px-6 gap-6 bg-white sm:rounded-t-lg justify-between items-center',
    {
      'border-b-solid border-b-form-input-default border-b-2': divider,
    },
  )
  const headlineStyle = cx('text-16-semibold sm:text-20-semibold leading-5 sm:leading-7', {
    'text-center ml-1': currentScreenIndex > 0,
  })

  if (!hasHeader) return null

  return (
    <div className={headerStyle}>
      {currentScreenIndex > 0 ? (
        <div
          role="button"
          tabIndex={0}
          className="ml-1 flex flex-row cursor-pointer items-center"
          onClick={() => {
            setCurrentScreenIndex(currentScreenIndex - 1)
          }}
          onKeyPress={(event: React.KeyboardEvent) =>
            handleOnKeyPress(event, () => setCurrentScreenIndex(currentScreenIndex - 1))
          }
        >
          <ArrowLeft />
        </div>
      ) : null}
      <div className={headlineStyle}>{header}</div>
      <div className="ml-1 flex flex-row justify-end items-center">
        <CloseIcon className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" type="info" onClick={onClose} />
      </div>
    </div>
  )
}

type ModalFooterBase = Omit<ModalBase, 'content' | 'header' | 'show' | 'startedIndex'> & {
  hasFooter: boolean
  currentScreenIndex: number
  setCurrentScreenIndex: Dispatch<SetStateAction<number>>
  contentLength: number
}

const ModalFooter = ({
  divider,
  onClose,
  currentScreenIndex,
  setCurrentScreenIndex,
  contentLength,
  hasFooter,
  confirmLabel,
  cancelLabel,
  onSubmit,
}: ModalFooterBase) => {
  const footerStyle = cx(
    'w-592 flex h-18 bg-white items-center justify-between py-3 px-6 gap-6 rounded-b-lg',
    {
      'border-t-solid border-t-form-input-default border-t-2': divider,
    },
  )

  if (!hasFooter) return null

  return (
    <div className={footerStyle}>
      <button
        className="text-p2-semibold flex cursor-pointer items-center"
        onClick={onClose}
        type="button"
      >
        <span aria-hidden="true">{cancelLabel}</span>
      </button>
      <Button
        onPress={() => {
          if (currentScreenIndex < contentLength - 1) {
            setCurrentScreenIndex(currentScreenIndex + 1)
          } else {
            setCurrentScreenIndex(0)
            onSubmit({})
          }
        }}
        variant="black"
        text={currentScreenIndex >= contentLength - 1 ? confirmLabel : 'Next'}
        size="sm"
      />
    </div>
  )
}

const ModalBody = ({
  content,
  currentScreenIndex,
  hasHeader,
  hasFooter,
  onSubmit,
  onClose,
}: {
  content: ((props?: any) => JSX.Element)[] | ((props?: any) => JSX.Element)
  currentScreenIndex: number
  hasHeader: boolean
  hasFooter: boolean
  onClose: () => void
  onSubmit: (params: OnSubmitParams) => void
}) => {
  return (
    <div
      className={cx('flex h-full w-full flex-col bg-white sm:p-6 p-4', {
        'rounded-t-10': !hasHeader,
        'rounded-b-10': !hasFooter,
      })}
    >
      {!hasHeader ? (
        <div className="ml-1 flex flex-row justify-end items-center">
          <CloseIcon className="cursor-pointer" type="info" onClick={onClose} />
        </div>
      ) : null}
      <div className="h-[calc(100%-80px)] flex w-full flex-col items-start rounded-lg">
        {Array.isArray(content)
          ? content.length - 1 >= currentScreenIndex && content[currentScreenIndex]()
          : content({ onSubmit })}
      </div>
    </div>
  )
}

const Modal = ({
  show,
  onClose,
  content,
  onSubmit,
  divider = false,
  header,
  confirmLabel,
  cancelLabel,
  className,
}: ModalBase) => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0)

  // useEffect(() => {
  //   document.body.style.overflow = show ? 'hidden' : ''
  // }, [show])

  if (!show) {
    return null
  }

  const handleOnClick = () => {
    setCurrentScreenIndex(0)
    onClose()
  }

  const hasHeader = Array.isArray(content) || Boolean(header)
  const hasFooter = Array.isArray(content)
  return (
    <div
      role="button"
      tabIndex={0}
      className="z-50 h-full fixed w-full inset-x-0 top-0 flex items-center justify-center"
      style={{ background: 'rgba(var(--color-gray-800), .4)', marginTop: '0' }}
      onClick={handleOnClick}
      onKeyPress={(event: React.KeyboardEvent) => handleOnKeyPress(event, handleOnClick)}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        onKeyPress={(event: React.KeyboardEvent) =>
          handleOnKeyPress(event, () => event.stopPropagation())
        }
        className={cx('rounded-full shadow-lg', className)}
      >
        <ModalHeader
          header={header}
          currentScreenIndex={currentScreenIndex}
          setCurrentScreenIndex={setCurrentScreenIndex}
          divider={divider}
          hasHeader={hasHeader}
          onClose={() => {
            setCurrentScreenIndex(0)
            onClose()
          }}
        />
        <ModalBody
          content={content}
          hasHeader={hasHeader}
          hasFooter={hasFooter}
          currentScreenIndex={currentScreenIndex}
          onSubmit={onSubmit}
          onClose={onClose}
        />
        <ModalFooter
          onSubmit={onSubmit}
          confirmLabel={confirmLabel}
          currentScreenIndex={currentScreenIndex}
          contentLength={content.length}
          setCurrentScreenIndex={setCurrentScreenIndex}
          hasFooter={hasFooter}
          cancelLabel={cancelLabel}
          divider
          onClose={() => {
            setCurrentScreenIndex(0)
            onClose()
          }}
        />
      </div>
    </div>
  )
}

export default Modal
