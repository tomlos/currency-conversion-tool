import { useState } from 'react'
import CurrencySelector from './components/CurrencySelector/CurrencySelector'
import { useGetCurrencies, useGetConvertedCurrency } from '../../api/hooks';
import "./CurrencyConverter.css";

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
    <div id="currency-converter">
      <h2> Currency Converter Tool</h2>
      <div className='converter-input'>
        <label htmlFor='amount'>Amount:</label>
        <input
          type="number"
          id='amount'
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
      </div>
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
      <div className='converter-input'>
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