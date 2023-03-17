export const handleFilteringData =
    ({
         purchaseType,
         setInstallment,
         setDiscount,
         condition,
         setDebt,
         setCredit,
         setDelivery
     }: any) => {
        if (purchaseType === 'Bo\'lib to\'lash') {
            setInstallment(true)
        } else {
            setInstallment('')
        }
        if (purchaseType === 'Chegirmali mahsulot') {
            setDiscount(true)
        } else {
            setDiscount('')
        }

        if (condition === 'Nasiya orqali') {
            setDebt(true)
        } else {
            setDebt('')
        }

        if (condition === 'Kreditga olish') {
            setCredit(true)
        } else {
            setCredit('')
        }
        if (condition === 'Yetkazib berish') {
            setDelivery(true)
        } else {
            setDelivery('')
        }
    }

export const FilterPrice = (arr: any, start: any, end: any, seFilteredData: any) => {
    const result  = arr.filter(({price}: any) => price >= start && price <= end)
    const newArr = result?.sort((a:any, b: any) => b?.price - a?.price); // Sort the selected elements in ascending order
    seFilteredData(newArr);
}