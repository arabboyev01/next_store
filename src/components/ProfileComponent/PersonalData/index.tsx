import Dumb from "./Dumb"
import * as Yup from 'yup'
import {PERSONAL_DATA} from "./config"
import { makeValidate } from 'mui-rff'

const schema = Yup.object().shape({
    firstname: Yup.string().required(`${PERSONAL_DATA.firstName.name}. majburiy.`),
    lastname: Yup.string().required(`${PERSONAL_DATA.lastName.label} majburiy.`),
    email: Yup.string().required(`${PERSONAL_DATA.email.label} majburiy.`),
});
const validate = makeValidate(schema);

const PersonalData = () => {

    return <Dumb validate={validate} />
}

export default PersonalData