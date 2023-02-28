import axios from 'axios'
import { apiAddress } from '../../../../config'
import {likedID} from "../../../redux/CartSlice"

const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
export const sendData = (id: number, dispatch: any) => {
    axios.get(`${apiAddress}/favorite-product/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => {
        console.log(res.status)
        if (res.status === 200) {
            // @ts-ignore
            dispatch(likedID(id))
        }
    }).catch(err => console.log(err))
}