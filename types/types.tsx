
export interface HomeCarouselDataType {
    id: number,
    image: any,
}

export type CategoryCartTypes = {
    id: number,
    name: string,
    img: any,

}
export type MainProductsType = {
    id: number,
    title: string,
    img: any,
    price: string,
    status: string,
    order: number,
    color: any,
}
export type BrandsDataType = {
    id:number,
    image: any
}
export type SingleProductType = {
    current?: any
    addToCart?: any
    cart?:  any
}
export type CartType = {
    cart: any,
}
