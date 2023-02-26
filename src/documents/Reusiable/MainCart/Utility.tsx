import axios from 'axios'
import { apiAddress } from '../../../../config'
const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
export const sendData = (id: number) => {
        axios.get(`${apiAddress}/favorite-product/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }