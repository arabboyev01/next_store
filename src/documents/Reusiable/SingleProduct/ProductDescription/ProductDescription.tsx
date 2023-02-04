import axios from 'axios'
import { apiAddress } from '../../../../../config'

export let descriptionData: object | null = null
export const ProductDetailFetch = async (id: string | string[] | undefined) => {
   await axios.get(`${apiAddress}/product/${id}`).then((data) => {
       return descriptionData = data.data.params
    }).then((err) => console.log(err))

    return
}
console.log(descriptionData)