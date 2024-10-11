export function formatAsDollars(price: number|string): string {
    const AmountDollars = new Intl.NumberFormat('en-US',{
        style:"currency",
        currency:"USD"
    }).format(Number(price)/100)
    return AmountDollars
    
}
// formatAsDollars('123456789.99')