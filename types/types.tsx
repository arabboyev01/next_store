
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
}
export type CartType = {
    cart: any,
}
export type ProductDetailType = {
    handleOpen?: (e: any) => void
    data?: any
}
export type PrimaryButton = {
    text?: string
    onClick?: (e: any) => void
}
export type NavLinksType = {
    handleOpen?: (e: any) => void
}
export type CartSummaryType = {
    handleForm: any
    cart: boolean
    totalQTY?: number
}
export type LoginFieldType = {
    handleClose?: (e: any) => void
}
export type mainDataType = {
    mainData: any
}
export type deliveryDumbDataType = {
    name: string
    delivery: number
    day: string
}
export type SUGGESION_DATA_TYPE = {
    id: number,
    image: any,
    name: string,
    shop: string,
    price: string,
    status: string,
}
