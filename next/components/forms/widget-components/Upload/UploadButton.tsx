import UploadIcon from '@assets/images/new-icons/ui/upload.svg'
import { UploadMinioFile } from '@backend/dtos/minio/upload-minio-file.dto'
import { handleOnKeyPress } from '@utils/utils'
import cx from 'classnames'
import React, { ForwardedRef, forwardRef, ForwardRefRenderFunction } from 'react'

interface UploadButtonProps {
  value?: UploadMinioFile[]
  disabled?: boolean
  sizeLimit?: number
  supportedFormats?: string[]
  fileBrokenMessage?: string[]
  onClick?: () => void
}

const UploadButtonComponent: ForwardRefRenderFunction<HTMLDivElement, UploadButtonProps> = (
  props: UploadButtonProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  // STATE
  const {
    value,
    disabled,
    sizeLimit,
    supportedFormats,
    fileBrokenMessage,
    onClick,
  }: UploadButtonProps = props

  // STYLES
  const buttonClassNames = cx(
    'h-full flex-col justify-center flex rounded-lg border-2 border-gray-300 py-3 px-4 bg-white',
    {
      'cursor-pointer': !disabled,
      'hover:border-gray-400 focus:border-gray-700 active:border-gray-700':
        !disabled && (!fileBrokenMessage || fileBrokenMessage.length === 0),
      'border-red-500 hover:border-red-300':
        !disabled && fileBrokenMessage && fileBrokenMessage.length > 0,
      'opacity-50 cursor-not-allowed bg-gray-200': disabled,
    },
  )

  const buttonInfoClassNames = cx('text-p3 flex flex-col justify-center', {
    'min-w-40': supportedFormats || sizeLimit,
  })

  // RENDER
  return (
    <div className="flex flex-row gap-4 w-fit h-fit">
      <div
        role="button"
        tabIndex={0}
        ref={ref}
        data-value={value}
        className={buttonClassNames}
        onClick={onClick}
        onKeyPress={(event: React.KeyboardEvent) => handleOnKeyPress(event, onClick)}
      >
        <div className="w-full flex gap-2">
          <div className="h-6 w-6 flex justify-center items-center">
            <UploadIcon className="w-6 h-6" />
          </div>
          <p className="text-16">Upload</p>
        </div>
      </div>
      {sizeLimit || supportedFormats ? (
        <div className={buttonInfoClassNames}>
          <p>
            {sizeLimit} {sizeLimit && 'MB'}
          </p>
          <p>{supportedFormats?.join(' ')}</p>
        </div>
      ) : null}
    </div>
  )
}

const UploadButton = forwardRef<HTMLDivElement, UploadButtonProps>(UploadButtonComponent)
export default UploadButton
