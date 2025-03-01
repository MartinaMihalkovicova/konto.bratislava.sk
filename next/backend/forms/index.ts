// all schemas/xml files should be named and exported from this file
// TODO figure out what we need to export & which files we need for each eform
// TODO figure out whether to store the schema files in this repo or in a different lib

import { RJSFSchema, UiSchema } from '@rjsf/utils'

import dopravneZnacenie from './dopravneZnacenie'
import kontajneroveStojiska from './kontajneroveStojiska'
import stanoviskoKInvesticnemuZameru from './stanoviskoKInvesticnemuZameru'
import test from './testForm'
import zastitaPrimatora from './zastitaPrimatora'
import zavazneStanoviskoKInvesticnejCinnosti from './zavazneStanoviskoKInvesticnejCinnosti'

const eforms = {
  dopravneZnacenie,
  kontajneroveStojiska,
  test,
  zavazneStanoviskoKInvesticnejCinnosti,
  zastitaPrimatora,
  stanoviskoKInvesticnemuZameru,
}

export type EFormKey = keyof typeof eforms
export interface EFormValue {
  schema: RJSFSchema
  uiSchema: UiSchema<any, any>
  xsd: string
  data: any
  xmlTemplate: string
  textStylesheet?: any
  htmlStylesheet?: any
  pdfStylesheet?: string
}

export default eforms
