import { createContext, ReactNode, useEffect, useState } from 'react'
import { getTransactions, saveTransaction } from '../storage/storage'

interface ITransaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: ITransaction[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function loadTransactions() {
    const transactionList = getTransactions()

    setTransactions(transactionList)
  }

  useEffect(() => {
    saveTransaction({
      id: crypto.randomUUID(),
      category: 'Alimentação',
      description: 'Clássico dos clássicos',
      type: 'outcome',
      price: 50,
      createdAt: String(new Date()),
    })

    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
