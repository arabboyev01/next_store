import axios from 'axios'
import { apiAddress } from '../../../../config'

export const uploadNewPersonalData = (values: any) => {
    console.log(values)
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    }

    axios.put(`${apiAddress}/user`, {
        'firstName': values.firstname,
        'lastName': values.lastname,
        'username': values.email,
        'password': values.new_password,
    }, config).then(data => console.log(data))
        .catch(err => console.log(err))
}