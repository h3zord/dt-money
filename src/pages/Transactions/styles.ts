import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 1.5rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const DeleteButton = styled.button`
  background-color: ${(props) => props.theme['red-500']};
  border: none;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => props.theme['red-700']};
    transition: background-color 0.2s;
  }
`

export const TransactionNotFound = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  span {
    color: 'red';
    text-align: center;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 18px;

    svg {
      color: red;
    }
  }
`

export const ResetButton = styled.button`
  background: ${(props) => props.theme['green-500']};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`
