import axios from 'axios'
import { apiAddress } from '../../../../config'

const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
export const orderForm = (values: any, cartItems: any, totalAmount: number) => {
    console.log(token)
    const payload = {
        'orders':
            cartItems.map((item: any) => (
                {
                    'productId': item.id,
                    'count': item.count,
                }
            )),
        'fullName': values.fullName,
        'passportNumber': values.passport,
        'phone': values.number,
        'totalPrice': totalAmount,
        'territoryId': 4,
    }
    axios.post(`${apiAddress}/user-order`, payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
    ).then(data => {
        console.log(data)
    }).catch(err => console.log(err))

    return
}

export const orderObjectForm = (values: any, cartItems: any, totalAmount: number) => {
    console.log(token)
    const payload = {
        'orders': [
            {
                'productId': cartItems.id,
                'count': cartItems.count,
            }
        ],
        'fullName': values.fullName,
        'passportNumber': values.passport,
        'phone': values.number,
        'totalPrice': totalAmount,
        'territoryId': 4,
    }
    axios.post(`${apiAddress}/user-order`, payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
    ).then(data => {
        console.log(data)
    }).catch(err => console.log(err))

    return
}
