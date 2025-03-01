import { AsyncServerProps } from '@utils/types'
import { isProductionDeployment } from '@utils/utils'
import { StatusBar } from 'components/forms/info-components/StatusBar'
import PageWrapper from 'components/layouts/PageWrapper'
import DatePickerShowCase from 'components/styleguide/showcases/DatePickerShowCase'
import InputFieldShowCase from 'components/styleguide/showcases/InputFieldShowCase'
import TimePickerShowCase from 'components/styleguide/showcases/TimePickerShowCase'
import TooltipShowCase from 'components/styleguide/showcases/TooltipShowCase'
import { GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AccordionShowCase from '../components/styleguide/showcases/AccordionShowCase'
import AlertShowCase from '../components/styleguide/showcases/AlertShowCase'
import BannerShowCase from '../components/styleguide/showcases/BannerShowCase'
import ButtonShowCase from '../components/styleguide/showcases/ButtonShowCase'
import CheckboxGroupShowCase from '../components/styleguide/showcases/CheckboxGroupedShowCase'
import DropdownShowCase from '../components/styleguide/showcases/DropdownShowCase'
import FieldHeaderShowCase from '../components/styleguide/showcases/FieldHeaderShowCase'
import ModalShowCase from '../components/styleguide/showcases/ModalShowCase'
import ProgressBarShowCase from '../components/styleguide/showcases/ProgressBarShowCase'
import RadioButtonShowCase from '../components/styleguide/showcases/RadioButtonShowCase'
import SearchFieldShowCase from '../components/styleguide/showcases/SearchFieldShowCase'
import SelectFieldShowCase from '../components/styleguide/showcases/SelectFieldShowCase'
import ServiceCardShowCase from '../components/styleguide/showcases/ServiceCardShowCase'
import SingleCheckboxShowCase from '../components/styleguide/showcases/SingleCheckboxShowCase'
import SnackbarShowCase from '../components/styleguide/showcases/SnackbarShowCase'
import SpinnerShowCase from '../components/styleguide/showcases/SpinnerShowCase'
import StatusBarShowCase from '../components/styleguide/showcases/StatusBarShowCase'
import StepperShowCase from '../components/styleguide/showcases/StepperShowCase'
import SummaryRowShowCase from '../components/styleguide/showcases/SummaryRowShowCase'
import TagShowCase from '../components/styleguide/showcases/TagShowCase'
import TextAreaFieldShowCase from '../components/styleguide/showcases/TextAreaFieldShowCase'
import ToggleShowCase from '../components/styleguide/showcases/ToggleShowCase'
import UploadShowCase from '../components/styleguide/showcases/UploadShowCase'
import StyleGuideWrapper from '../components/styleguide/StyleGuideWrapper'

const Styleguide = ({ page }: AsyncServerProps<typeof getServerSideProps>) => {
  /**
   * Always create new component for adding showcase in StyleGuide
   * Path to StyleGuide showcase components should be ./next/components/styleguide/showcases
   * */
  return (
    <>
      <StatusBar />
      <PageWrapper locale={page.locale}>
        <StyleGuideWrapper>
          {/* HERE ADD SHOWCASES */}
          <StatusBarShowCase />
          <TagShowCase />
          <TooltipShowCase />
          <FieldHeaderShowCase />
          <ButtonShowCase />
          <DatePickerShowCase />
          <InputFieldShowCase />
          <SpinnerShowCase />
          <TextAreaFieldShowCase />
          <AlertShowCase />
          <SearchFieldShowCase />
          <ToggleShowCase />
          <TimePickerShowCase />
          <UploadShowCase />
          <DropdownShowCase />
          <SelectFieldShowCase />
          <ModalShowCase />
          <AccordionShowCase />
          <ProgressBarShowCase />
          <SingleCheckboxShowCase />
          <CheckboxGroupShowCase />
          <RadioButtonShowCase />
          <StepperShowCase />
          <SummaryRowShowCase />
          <BannerShowCase />
          <ServiceCardShowCase />
          <SnackbarShowCase />
        </StyleGuideWrapper>
      </PageWrapper>
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  if (isProductionDeployment()) return { notFound: true }

  const locale = ctx.locale ?? 'sk'

  return {
    props: {
      page: {
        locale: ctx.locale,
      },
      ...(await serverSideTranslations(locale)),
    },
  }
}

export default Styleguide
