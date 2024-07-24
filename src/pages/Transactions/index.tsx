import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { getTransactions, saveTransactions } from '../../storage/storage'

interface ITransaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: Date
}

export function Transactions() {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    saveTransactions({
      id: 'q212',
      category: 'Alimentação',
      description: 'Clássico dos clássicos',
      type: 'outcome',
      price: 50,
      createdAt: new Date(),
    })
    const transactions = getTransactions()

    setTransactions(transactions)
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions?.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{JSON.stringify(transaction.createdAt)}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
