import axios from 'axios'
import { apiAddress } from '../../../../config'
import { fetchData } from '../../../redux/fetchData'

const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
export const sendData = (id: number, dispatch: any, setRender: any) => {
    axios.get(`${apiAddress}/favorite-product/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => {
        console.log(res.status)
        if (res.status === 200) {
            // @ts-ignore
            dispatch(fetchData())
            setRender(true)
        }
    }).catch(err => console.log(err))
}