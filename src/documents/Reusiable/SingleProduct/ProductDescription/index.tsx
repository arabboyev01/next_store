import { descriptionData } from './ProductDescription'
import { Dumb } from './Dumb'

const {id, nameEn, nameRu, nameUz, paramId, productId, valueEn, valueRu, valueUz}: any = descriptionData
export const ProductDescriptionSingle = () => {
    return <Dumb id={id} nameEn={nameEn} nameRu={nameRu} nameUz={nameUz} paramId={paramId} productId={productId}
          valueEn={valueEn} valueRu={valueRu} valueUz={valueUz}/>
}