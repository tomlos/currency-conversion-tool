import { useState } from 'react'
import CurrencySelector from '../CurrencySelector/CurrencySelector'
import { useGetCurrencies, useGetConvertedCurrency } from '../../../../api/hooks/';

export default function CurrencyConverter() {
  const { data: currencies, isLoading } = useGetCurrencies();

  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [toCurrency, setToCurrency] = useState<string>('');
  const [amount, setAmount] = useState<number>(100);

  const { data: convertedValue } = useGetConvertedCurrency({
    from: fromCurrency || undefined,
    to: toCurrency || undefined,
    amount,
    enabled: !!(fromCurrency && toCurrency && amount > 0)
  })

  return (
    <div id="root">
      <h1> Currency converter tool</h1>
      <div>
        <h3>Convert:</h3>
        <label htmlFor='amount'>Amount:</label>
        <input
          type="number"
          id='amount'
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
        <CurrencySelector
          title='From'
          currencies={currencies}
          value={fromCurrency}
          onChange={setFromCurrency}
          isLoading={isLoading}
        />
        <CurrencySelector
          title='To'
          currencies={currencies}
          value={toCurrency}
          onChange={setToCurrency}
          isLoading={isLoading}
        />
        <label htmlFor='value'>Value({convertedValue?.to}): </label>
        <input
          type="text"
          id='value'
          disabled
          value={convertedValue?.value || ''}
        />
      </div>
    </div>
  )
}