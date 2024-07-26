export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export function priceFormatter(price: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const formattedValue = formatter.format(price)

  if (price < 0) {
    return `R$ -${formattedValue.replace('-', '').replace('R$', '').trim()}`
  }

  return formattedValue
}
