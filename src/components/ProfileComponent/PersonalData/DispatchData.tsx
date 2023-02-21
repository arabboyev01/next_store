import axios from 'axios'
import { apiAddress } from '../../../../config'
import jwt_decode from 'jwt-decode'

export const uploadNewPersonalData = (values: any, setData: any, data: any) => {
    const token: string | null | any = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
    const decoded: unknown | any = jwt_decode(token)

   axios.get(`${apiAddress}/user/${decoded.sub}`).then(data => setData(data.data))
        .catch(err => console.log(err))

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    }

    console.log(data)
    axios.put(`${apiAddress}/user`, {
        'id': decoded.sub,
        'firstName': !values.fullName ? data.fullName : values.firstname,
        'lastName': !values.lastname ? data.lastName : values.lastName,
        'phone': data.phone,
        'imageId': data.imageId,
        'isDeleted': false,
        'username': !values.email ? data.username : values.email,
        'password': !values.new_password ? data.password : values.new_password,
        'smsCode': values.code,
    }, config).then(data => console.log(data))
        .catch(err => console.log(err))
}

export const ResendPassword = () => {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
    axios.get(`${apiAddress}/sms-resend`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(data => console.log(data))
        .catch(err => console.log(err))
}