
import { currencyApi, type Conversion } from '../currencyApi';

import { useQuery } from '@tanstack/react-query';

interface UseGetConvertedCurrencyProps {
    from?: string;
    to?: string;
    amount?: number;
    enabled: boolean;
}

export const useGetConvertedCurrency = ({ from, to, amount, enabled }: UseGetConvertedCurrencyProps) => {
    return useQuery<Conversion>({
        queryKey: ['convert', from, to, amount],
        queryFn: () => currencyApi.getConversion({ from: from!, to: to!, amount: amount! }),
        enabled: !!(enabled && from && to && amount && amount > 0),
    });
};