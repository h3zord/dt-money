import { transactionExampleList } from '../utils/transactionExampleList'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface SaveTransaction {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
}

interface Transaction extends SaveTransaction {
  id: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  getTransactionsFromStorage: (query?: string) => Transaction[]
  saveTransactionToStorage: (data: SaveTransaction) => void
  deleteTransactionFromStorage: (idToDelete: string) => void
  loadTransactions: (query?: string) => Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const storageKey = 'transactions'

  const getTransactionsFromStorage = useCallback((query?: string) => {
    const data = localStorage.getItem(storageKey)

    if (!data) return []

    const transactionList = JSON.parse(data) as Transaction[]

    if (query) {
      const filteredTransactions = transactionList.filter((transaction) => {
        const lowerCaseDescription = transaction.description.toLocaleLowerCase()
        const lowerCaseQuery = query.toLocaleLowerCase()

        return lowerCaseDescription.includes(lowerCaseQuery)
      })

      return filteredTransactions
    } else {
      return transactionList
    }
  }, [])

  const saveTransactionToStorage = useCallback(
    (data: SaveTransaction) => {
      const transactionList = getTransactionsFromStorage()

      const transactionDataToInsert = {
        id: crypto.randomUUID(),
        description: data.description,
        type: data.type,
        price: data.price,
        category: data.category,
        createdAt: String(new Date()),
      }

      transactionList.push(transactionDataToInsert)

      localStorage.setItem(storageKey, JSON.stringify(transactionList))

      setTransactions((prevState) => [...prevState, transactionDataToInsert])
    },
    [getTransactionsFromStorage],
  )

  function deleteTransactionFromStorage(idToDelete: string) {
    const transactionList = getTransactionsFromStorage()

    const filteredTransactions = transactionList.filter(
      (transaction) => transaction.id !== idToDelete,
    )

    localStorage.setItem(storageKey, JSON.stringify(filteredTransactions))

    setTransactions(filteredTransactions)
  }

  const loadTransactions = useCallback(
    (query?: string) => {
      const transactionList = getTransactionsFromStorage(query)

      setTransactions(transactionList)

      return transactionList
    },
    [getTransactionsFromStorage, setTransactions],
  )

  useEffect(() => {
    const transactionList = loadTransactions()

    if (!transactionList.length) {
      transactionExampleList.forEach((transactionExample) =>
        saveTransactionToStorage(transactionExample),
      )
    }
  }, [loadTransactions, saveTransactionToStorage])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        getTransactionsFromStorage,
        saveTransactionToStorage,
        deleteTransactionFromStorage,
        loadTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
