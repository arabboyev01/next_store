import axios from 'axios'
import { apiAddress } from '../../../../config'
import jwt_decode from 'jwt-decode'


export const uploadNewPersonalData = (values: any) => {
    const token: string | null | any = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
    const decoded: unknown | any = jwt_decode(token)
    const config = {headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'}}

    const fetchData = () => {
         fetch(`${apiAddress}/user/${decoded.sub}`).then(data => data.json())
            .then(data => {
                let dispatchData = {
                    'id': decoded.sub,
                    'firstName': !values.firstname ? data.firstName : values.firstname,
                    'lastName': !values.lastname ? data.lastName : values.lastname,
                    'phone': data.phone,
                    'imageId': data.imageId,
                    'isDeleted': false,
                    'username': !values.email ? values.email : data.username,
                    'password': !values.new_password ? data.password : values.new_password,
                    'smsCode': values.code,
                }
                axios.put(`${apiAddress}/user`, dispatchData, config).then(data => console.log(data))
                    .catch(err => console.log(err))
            })
    }

    fetchData()
}

export const ResendPassword = () => {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
    axios.get(`${apiAddress}/sms-resend`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(data => console.log(data.status))
        .catch(err => console.log(err))
}