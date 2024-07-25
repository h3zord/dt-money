import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface ISaveTransaction {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
}

interface ITransaction extends ISaveTransaction {
  id: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: ITransaction[]
  saveTransactionToStorage: (data: ISaveTransaction) => void
  loadTransactions: (query?: string) => void
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const TRANSACTIONS = 'transactions'

  const getTransactionsFromStorage = useCallback((query?: string) => {
    const data = localStorage.getItem(TRANSACTIONS)

    if (!data) return []

    const transactionList = JSON.parse(data) as ITransaction[]

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

  function saveTransactionToStorage(data: ISaveTransaction) {
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

    localStorage.setItem(TRANSACTIONS, JSON.stringify(transactionList))

    setTransactions((prevState) => [...prevState, transactionDataToInsert])
  }

  const loadTransactions = useCallback(
    (query?: string) => {
      const transactionList = getTransactionsFromStorage(query)

      setTransactions(transactionList)
    },
    [getTransactionsFromStorage, setTransactions],
  )

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, saveTransactionToStorage, loadTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
