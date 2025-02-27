import BallDelimiterIcon from '@assets/images/forms/ball_delimiter_icon.svg'
import UploadIcon from '@assets/images/new-icons/ui/upload.svg'
import { UploadMinioFile } from '@backend/dtos/minio/upload-minio-file.dto'
import { handleOnKeyPress } from '@utils/utils'
import cx from 'classnames'
import React, { ForwardedRef, forwardRef, ForwardRefRenderFunction, useState } from 'react'

interface UploadDropAreaProps {
  value?: UploadMinioFile[]
  multiple?: boolean
  disabled?: boolean
  sizeLimit?: number
  supportedFormats?: string[]
  fileBrokenMessage?: string[]
  onClick?: () => void
  onDrop?: (newFiles: UploadMinioFile[]) => void
}

const reduceItemsToFiles = (
  filtered: UploadMinioFile[],
  item: DataTransferItem,
): UploadMinioFile[] => {
  if (item.kind !== 'file') return filtered
  const file = item.getAsFile()
  if (!file) return filtered
  const minioFile: UploadMinioFile = { file, originalName: file.name }
  filtered.push(minioFile)
  return filtered
}

const UploadDropAreaComponent: ForwardRefRenderFunction<HTMLDivElement, UploadDropAreaProps> = (
  props: UploadDropAreaProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  // PROPS
  const {
    value,
    multiple,
    disabled,
    sizeLimit,
    supportedFormats,
    fileBrokenMessage,
    onClick,
    onDrop,
  }: UploadDropAreaProps = props

  // STATE
  const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false)

  // STYLES
  const dragAndDropClassNames = cx(
    'flex flex-col justify-evenly h-full w-full p-6 bg-white rounded-lg text-center',
    {
      'opacity-50 bg-gray-200': disabled,
    },
  )

  const dragAndDropOverlayClassNames = cx(
    'absolute inset-[-1px] z-10 rounded-lg bg-transparent border-2 border-dashed border-gray-300',
    {
      'cursor-not-allowed': disabled,
      'cursor-pointer': !disabled,
      'border-red-500 hover:border-red-300':
        !disabled && fileBrokenMessage && fileBrokenMessage.length > 0 && !isDraggedOver,
      'border-red-300':
        !disabled && fileBrokenMessage && fileBrokenMessage.length > 0 && isDraggedOver,
      'hover:border-gray-400 focus:border-gray-700 active:border-gray-700':
        !disabled && (!fileBrokenMessage || fileBrokenMessage.length === 0) && !isDraggedOver,
      'border-gray-400':
        !disabled && (!fileBrokenMessage || fileBrokenMessage.length === 0) && isDraggedOver,
    },
  )

  // EVENT HANDLERS

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    if (disabled) return

    const droppedItems: DataTransferItem[] = multiple
      ? [...event.dataTransfer.items]
      : [event.dataTransfer.items[0]]
    const newFiles = droppedItems.reduce(reduceItemsToFiles, [])

    setIsDraggedOver(false)
    if (onDrop) {
      onDrop(newFiles)
    }
  }

  // RENDER
  return (
    <div className="w-[180px] xs:w-[300px] sm:w-[480px] relative h-40" ref={ref} data-value={value}>
      <div
        aria-label="Upload drop area"
        role="button"
        tabIndex={0}
        className={dragAndDropOverlayClassNames}
        onClick={onClick}
        onKeyPress={(event: React.KeyboardEvent) => handleOnKeyPress(event, onClick)}
        onDragEnter={() => setIsDraggedOver(true)}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={() => setIsDraggedOver(false)}
        onDrop={handleDrop}
      />
      <div className={dragAndDropClassNames}>
        <div className="flex flex-row justify-center">
          <div className="flex h-12 w-12 flex-row justify-center items-center rounded-full bg-gray-200">
            <UploadIcon className="w-6 h-6" />
          </div>
        </div>
        <h5 className="text-16-semibold">Drag & drop upload</h5>
        <div className="text-p3 flex flex-row justify-center gap-1">
          <p>
            {sizeLimit} {sizeLimit && 'MB'}
          </p>
          {sizeLimit && supportedFormats && supportedFormats.length > 0 && (
            <div className="grid grid-cols-1 content-center">
              <BallDelimiterIcon />
            </div>
          )}
          <p>{supportedFormats?.join(' ')}</p>
        </div>
      </div>
    </div>
  )
}

const UploadDropArea = forwardRef<HTMLDivElement, UploadDropAreaProps>(UploadDropAreaComponent)
export default UploadDropArea
