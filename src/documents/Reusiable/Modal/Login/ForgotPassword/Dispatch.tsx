import axios from 'axios'
import { apiAddress } from '../../../../../../config'

export const SendSmsCode = (values: any, setLoading: any, setLogin: any) => {
    let dispatchData = {
        'username': values.number
    }
    const config = {headers:{ 'Content-Type': 'application/json'}}

    axios.post(`${apiAddress}/user/forgot-password`, dispatchData, config)
        .then(data => {
            if (data.status === 200) {
                setLogin(true)
                console.log(data.status)
            }
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
}

export const ChangeNewPassword = (values: any, userName: string, setLoading: any, setDirectPage: any) => {
    let dispatchData = {
        'username': userName,
        'newPassword': values.new_password,
        smsCode: values.approve
    }
    const config = {headers: {'Content-Type': 'application/json'}}

    axios.post(`${apiAddress}/user/edit-password`, dispatchData, config)
        .then(data => {
            if (data.data.id_token) {
                localStorage.setItem("tokenKey", data?.data?.id_token)
            }
            if(data.status === 200) {
                setDirectPage(true)
            }
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
}