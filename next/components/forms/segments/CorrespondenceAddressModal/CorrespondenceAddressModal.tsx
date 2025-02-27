import { AccountError, Address } from '@utils/useAccount'
import CorrespondenceAddressForm from 'components/forms/segments/CorrespondenceAddressForm/CorrespondenceAddressForm'
import Modal from 'components/forms/widget-components/Modals/Modal'
import { useTranslation } from 'next-i18next'

/* eslint-disable @typescript-eslint/no-shadow */

interface Props {
  show: boolean
  onClose: () => void
  onSubmit: ({ data }: { data?: Address }) => void
  defaultValues?: Address
  error?: AccountError | null
  onHideError?: () => void
}

const CorrespondenceAddressModal = ({
  show,
  onClose,
  onSubmit,
  defaultValues,
  error,
  onHideError,
}: Props) => {
  const { t } = useTranslation('account')

  return (
    <Modal
      divider
      header={t('correspondence_address')}
      show={show}
      onClose={onClose}
      onSubmit={onSubmit}
      content={({ onSubmit }) =>
        CorrespondenceAddressForm({ onSubmit, error, defaultValues, onHideError })
      }
      className="w-[592px] md:h-max h-full"
    />
  )
}

export default CorrespondenceAddressModal

/* eslint-enable @typescript-eslint/no-shadow */
