import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { ArrowsClockwise, X } from 'phosphor-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DeleteButton,
  PriceHighlight,
  ResetButton,
  TransactionNotFound,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const [isDisabled, setIsDisabled] = useState(false)

  const {
    transactions,
    getTransactionsFromStorage,
    loadTransactions,
    deleteTransactionFromStorage,
  } = useContext(TransactionsContext)

  useEffect(() => {
    const transactionsList = getTransactionsFromStorage()

    if (!transactionsList.length) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [transactions, getTransactionsFromStorage])

  const sortedTransactionsByDate = transactions?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )

  function handleDeleteTransaction(idToDelete: string) {
    deleteTransactionFromStorage(idToDelete)
  }

  function handleResetTransactions() {
    loadTransactions()
  }

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        {transactions.length ? (
          <TransactionsTable>
            <tbody>
              <AnimatePresence>
                {sortedTransactionsByDate.map((transaction) => {
                  return (
                    <motion.tr key={transaction.id} exit={{ opacity: 0 }}>
                      <td width="40%">{transaction.description}</td>
                      <td>
                        <PriceHighlight variant={transaction.type}>
                          {transaction.type === 'outcome'
                            ? priceFormatter(transaction.price * -1) // Transformar o outcome em número negativo
                            : priceFormatter(transaction.price)}
                        </PriceHighlight>
                      </td>
                      <td>{transaction.category}</td>
                      <td>
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </td>
                      <td>
                        <DeleteButton
                          onClick={() =>
                            handleDeleteTransaction(transaction.id)
                          }
                        >
                          Excluir
                        </DeleteButton>
                      </td>
                    </motion.tr>
                  )
                })}
              </AnimatePresence>
            </tbody>
          </TransactionsTable>
        ) : (
          <TransactionNotFound>
            <span>
              <X size={28} />
              Nenhuma transação encontrada!
              <X size={28} />
            </span>

            <ResetButton
              onClick={handleResetTransactions}
              disabled={isDisabled}
            >
              Reset <ArrowsClockwise size={24} />
            </ResetButton>
          </TransactionNotFound>
        )}
      </TransactionsContainer>
    </div>
  )
}
