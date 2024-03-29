export interface HomeCarouselDataType {
    id: number,
    title: string,
    subTitle: string,
    imageUrl: any,
}

export type ProductDetailType = {
    handleOpen?: (e: any) => void
    data?: any
    getProductColorImage: (id: number) => void
    colorId: any
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
    photoUrl: any,
    name: string,
    shop: string,
    price: string,
    state: string,
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
    nameUz: string,
    valueUz: any
}
export type MainCarouselPropsType = {
    data?: any
    height: number
    bgColor: string
    color: string
    sticky?: any
    buttonText?: string
}