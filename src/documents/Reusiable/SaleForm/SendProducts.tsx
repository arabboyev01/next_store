import axios from 'axios'
import { apiAddress } from '../../../../config'
import { likedID } from '../../../redux/CartSlice'

const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
export const orderForm = (values: any, cartItems: any, totalAmount: number, setSucces: any) => {
    const payload = {
        'orders':
            cartItems.map((item: any) => (
                {
                    'productId': item.id,
                    'count': item.count,
                }
            )),
        'fullName': values.fullName,
        'passportNumber': values.textArea,
        'phone': values.number,
        'totalPrice': totalAmount,
        'territoryId': values.area,
    }
    axios.post(`${apiAddress}/user-order`, payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
    ).then(data => {
        if(data.status === 200){
            setSucces(true)
            window.localStorage.removeItem('CartItems')
        }
    }).catch(err => {
        console.log(err)
         if (err.response.status === 400) {
            // @ts-ignore
            dispatch(likedID(true))
        }
    })

    return
}

export const orderObjectForm = (values: any, cartItems: any, totalAmount: number, setSucces: any) => {
    const payload = {
        'orders': [
            {
                'productId': cartItems.id,
                'count': cartItems.count,
            }
        ],
        'fullName': values.fullName,
        'passportNumber': values.textArea,
        'phone': values.number,
        'totalPrice': totalAmount,
        'territoryId': values.area,
    }
    axios.post(`${apiAddress}/user-order`, payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
    ).then(data => {
        if(data.status === 200){
            setSucces(true)
            window.localStorage.removeItem('CartItems')
        }
    }).catch(err => {
         if (err.response.status === 400) {
            // @ts-ignore
            dispatch(likedID(true))
        }
    })

    return
}
