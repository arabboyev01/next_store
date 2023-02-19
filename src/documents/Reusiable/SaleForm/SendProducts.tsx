import axios from 'axios'
import { apiAddress } from '../../../../config'

const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
export const orderForm = (values: any, cartItems: any, totalAmount: number) => {
    const payload = {
        'id': 0,
        'createdAt': '2023-02-17T18:03:37.991Z',
        'orders':
            cartItems.map((item: any) => (
                {
                    'id': item.id,
                    'productId': item.productId,
                    'name': item.name,
                    'price': +item.price,
                    'state': item.state,
                    'count': item.count,
                }
            )),
        'userId': 0,
        'createdBy': 0,
        'isDeleted': true,
        'fullName': values.fullName,
        'phone': values.number,
        'passportNumber': values.passport,
        'territoryId': 0,
        'totalPrice': totalAmount,
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
// "{"id":0,"createdAt":"2023-02-17T18:03:37.991Z","orders":[{"id":10,"name":"iPhone 14 Pro MAx","price":14000000,"state":"New"}],"userId":0,"createdBy":0,"isDeleted":true,"fullName":"dsdsads","phone":"+998999883500","passportNumber":"dsadsad","territoryId":0,"totalPrice":14000000}"