
export const quantity = (data: any) => {
    return data?.length % 8 !== 0 ? data?.length / 8 + 0.5 : data?.length / 8
}
