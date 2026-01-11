import type { Currency } from "../../../../api/currencyApi";

interface CurrencySelectorProps {
    title: string;
    currencies?: Currency[];
    isLoading?: boolean;
    value: string;
    onChange: (value: string) => void;
}

export default function CurrencySelector({
    title,
    currencies,
    isLoading,
    value,
    onChange
}: CurrencySelectorProps) {
    if (!currencies) {
        return (
            <div>
                <label>{title}</label>
                <div>Loading currencies...</div>
            </div>
        );
    }

    return (
        <div>
            <label>{title}</label>
            <select
                disabled={isLoading}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Select currency</option>
                {currencies.map((currency) => (
                    <option key={currency.code} value={currency.short_code}>
                        {currency.name}
                    </option>
                ))}
            </select>
        </div>
    );
} 