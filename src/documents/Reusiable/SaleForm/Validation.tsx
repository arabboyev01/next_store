import * as Yup from 'yup'
import { SALES_FORM } from '../SaleForm/form.config'
import { makeValidate } from 'mui-rff'

const schema = Yup.object().shape({
    fullName: Yup.string().required(`${SALES_FORM.fullName.label} kirgazing`),
    number: Yup.string().required(`${SALES_FORM.number.label} kirgazing`),
});
export const validate = makeValidate(schema);