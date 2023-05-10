export const currencyFormatter = ( {currency, value} ) => {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency
    })

    return formatter.format(value)
}