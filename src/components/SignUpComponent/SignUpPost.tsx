import axios from "axios";
import {apiAddress} from "../../../config";
import { validateLogin } from '../../redux/CartSlice'

export const signUp = (values: any, setLoading: any, setValidation: any, setUserName: any, dispatch: any | never) => {
    setLoading(true)
    axios.post(`${apiAddress}/user`,{
        firstName: values.firstname,
        lastName: values.lastname,
        phone: values.phone,
        imageId: "",
        username: values.email,
        password: values.password1,
    }, { headers: {'Content-Type': 'application/json'}} ).then((data) => {
        if (data?.data?.message) {
            console.log('here', data?.data?.message)
            localStorage.setItem('tokenKey', data?.data?.token)
            setUserName(data?.data?.message)
        }
        setValidation(true)
        // @ts-ignore
        dispatch(validateLogin(true))

    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        setLoading(false)
    })

    return
}
