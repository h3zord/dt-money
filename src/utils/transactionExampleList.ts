interface TtransactionExampleList {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export const transactionExampleList = [
  {
    id: crypto.randomUUID(),
    description: 'X-Burguer Duplo',
    type: 'outcome',
    price: 49.9,
    category: 'Alimentação',
    createdAt: String(new Date()),
  },
  {
    id: crypto.randomUUID(),
    description: 'Desenvolvimento de Site',
    type: 'income',
    price: 3000,
    category: 'Serviços',
    createdAt: String(new Date()),
  },
  {
    id: crypto.randomUUID(),
    description: 'Dentista',
    type: 'outcome',
    price: 500,
    category: 'Saúde',
    createdAt: String(new Date()),
  },
  {
    id: crypto.randomUUID(),
    description: 'Recebimento de dividendos',
    type: 'income',
    price: 1450,
    category: 'Renda passiva',
    createdAt: String(new Date()),
  },
  {
    id: crypto.randomUUID(),
    description: 'Aluguel',
    type: 'outcome',
    price: 2500,
    category: 'Despesas',
    createdAt: String(new Date()),
  },
] as TtransactionExampleList[]
