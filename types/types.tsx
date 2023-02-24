export interface HomeCarouselDataType {
    id: number,
    title: string,
    subtitle: string,
    imageUrl: any,
}

export type CategoryCartTypes = {
    id: number,
    name: string,
    img: any,

}

export type BrandsDataType = {
    id: number,
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
    getProductColorImage: (id: number) => void
}
export type PrimaryButton = {
    text?: string
    onClick?: (e: any) => void
    disable?: boolean
}
export type NavLinksType = {
    handleOpen?: any
}
export type CartSummaryType = {
    handleForm: any
    cart: boolean
    totalQTY?: number
    totalAmount: number
    success: any
}
export type LoginFieldType = {
    handleClose?: (e: any) => void
}
export type mainDataType = {
    mainData: any
    carousel?: string
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
export type PROFILE_LINK_DATA_TYPE = {
    id: number,
    icon: any,
    name: string
    type?: string
    handlePage?: (category: any) => void,
    isActive?: number | null
}
export type ProductDescriptionType = {
    id?: number,
    title: string,
    companyCode: string,
    productCode: string,
    saleCode: string,
    companyCode1: string,
}