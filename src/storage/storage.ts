interface ITransaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: Date
}

const TRANSACTION = 'TRANSACTION'

export function getTransactions() {
  const data = localStorage.getItem(TRANSACTION)

  console.log(data)

  if (data) {
    const transactions = JSON.parse(data) as ITransaction[]

    return transactions
  } else {
    return []
  }
}

export function saveTransactions(data: ITransaction) {
  const transactions = getTransactions()

  transactions.push({
    id: data.id,
    description: data.description,
    type: data.type,
    price: data.price,
    category: data.category,
    createdAt: data.createdAt,
  })

  localStorage.setItem(TRANSACTION, JSON.stringify(transactions))

  return transactions
}
