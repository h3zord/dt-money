interface ITransaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: Date
}

const TRANSACTIONS = 'transactions'

export function getTransactions() {
  const data = localStorage.getItem(TRANSACTIONS)

  if (data) {
    const transactionList = JSON.parse(data) as ITransaction[]

    return transactionList
  } else {
    return []
  }
}

export function saveTransaction(data: ITransaction) {
  const transactionList = getTransactions()

  transactionList.push({
    id: data.id,
    description: data.description,
    type: data.type,
    price: data.price,
    category: data.category,
    createdAt: data.createdAt,
  })

  localStorage.setItem(TRANSACTIONS, JSON.stringify(transactionList))

  return transactionList
}
