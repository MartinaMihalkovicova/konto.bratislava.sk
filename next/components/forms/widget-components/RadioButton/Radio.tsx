import cx from 'classnames'
import Tooltip from 'components/forms/info-components/Tooltip/Tooltip'
import * as React from 'react'
import { useRadio } from 'react-aria'

import { RadioContext } from './RadioGroup'

type RadioBase = {
  variant?: 'basic' | 'boxed' | 'card'
  className?: string
  isDisabled?: boolean
  error?: boolean
  children: React.ReactNode
  value: string
  tooltip?: string
}

const Radio = ({
  error = false,
  isDisabled = false,
  tooltip,
  variant = 'basic',
  className,
  ...rest
}: RadioBase) => {
  const state = React.useContext(RadioContext)
  const ref = React.useRef(null)
  const { inputProps } = useRadio({ ...rest, isDisabled: isDisabled || error }, state, ref)
  const inputStyle = cx(
    'focus-visible:outline-none focus:outline-none appearance-none bg-white m-0 w-6 h-6 min-w-[24px] min-h-[24px] grid place-content-center left-0 right-0 top-0 bottom-0 rounded-full border-2 border-solid',
    {
      'border-gray-700': !error,
      'before:w-4 before:h-4 before:min-w-[16px] before:min-h-[16px] before:bg-gray-700 before:rounded-full':
        inputProps.checked,
      'border-negative-700 before:bg-negative-700': error,

      // hover
      'group-hover:before:bg-gray-600 group-hover:border-gray-600': !isDisabled && !error,

      // disabled
      'opacity-50': isDisabled,
      'cursor-not-allowed': isDisabled || error,
    },
  )

  const containerStyle = cx(
    'group flex relative flex-row items-center justify-between rounded-lg gap-3 ',
    className,
    {
      'p-0': variant === 'basic' && !error,
      'p-0 py-3 px-4 border-2 border-solid': variant === 'boxed',
      'bg-white': variant !== 'basic',
      'border-gray-200':
        (variant === 'boxed' || variant === 'card') && !error && !inputProps.checked,
      'rounded-8 border-negative-700': (variant === 'card' || variant === 'boxed') && error,
      'rounded-8 flex-col p-6 border-2 border-solid': variant === 'card',
      'border-gray-700 hover:border-gray-500':
        (variant === 'boxed' || variant === 'card') && !error && inputProps.checked && !isDisabled,
      'hover:border-gray-500':
        (variant === 'boxed' || variant === 'card') && !error && !inputProps.checked && !isDisabled,

      'opacity-50': isDisabled,
      'cursor-not-allowed': isDisabled || error,
    },
  )

  return (
    <div className="w-full">
      <label htmlFor={rest.value} className={containerStyle}>
        {variant === 'card' ? (
          <div className="w-full flex flex-col items-start gap-3 p-0 ">
            <input id={rest.value} {...inputProps} ref={ref} className={inputStyle} />
            <div className="text-16 text-gray-700 break-words">
              {rest.children}
              {tooltip && (
                <div className="mt-8 relative flex flex-row">
                  <Tooltip position="top-right" text={tooltip} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className={cx('flex items-center gap-3', {})}>
            <input id={rest.value} {...inputProps} ref={ref} className={inputStyle} />
            <div className={cx('text-16 flex text-gray-700 break-words', {})}>{rest.children}</div>
          </div>
        )}
        {tooltip && variant !== 'card' && <Tooltip text={tooltip} />}
      </label>
    </div>
  )
}

export default Radio
