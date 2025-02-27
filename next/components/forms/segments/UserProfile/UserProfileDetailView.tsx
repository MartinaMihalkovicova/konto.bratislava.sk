import { UserData } from '@utils/useAccount'
import { useTranslation } from 'next-i18next'

import UserProfileDetailViewRow from './UserProfileDetailViewRow'

interface UserProfileDetailViewProps {
  userData: UserData
}

const postalCodeFormat = (code: string): string => `${code?.slice(0, 3)} ${code?.slice(3)}`

const UserProfileDetailView = ({ userData }: UserProfileDetailViewProps) => {
  const { t } = useTranslation('account')
  const { given_name, family_name, email, phone_number, address } = userData
  const fullName = `${given_name ?? ''} ${family_name ?? ''}`
  const fullAddress = address
    ? address.street_address || address.postal_code || address.locality
      ? `${
          address?.street_address && (address?.postal_code || address?.locality)
            ? `${address?.street_address},`
            : address?.street_address
        } ${postalCodeFormat(address?.postal_code)} ${address?.locality}`
      : ''
    : ''
  return (
    <div className="flex flex-col grow gap-6">
      {/* <UserProfileDetailViewRow label={t('profile_detail.titles_before_name')} /> */}
      <UserProfileDetailViewRow label={t('profile_detail.full_name')} value={fullName} />
      {/* <UserProfileDetailViewRow label={t('profile_detail.titles_after_name')} /> */}
      <UserProfileDetailViewRow
        label={t('profile_detail.email')}
        value={email}
        tooltip={t('profile_detail.email_tooltip')}
      />
      <UserProfileDetailViewRow label={t('profile_detail.phone_number')} value={phone_number} />
      <UserProfileDetailViewRow label={t('profile_detail.address')} value={fullAddress} />
    </div>
  )
}

export default UserProfileDetailView
