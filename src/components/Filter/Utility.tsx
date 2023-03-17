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