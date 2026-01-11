
import { useQuery } from '@tanstack/react-query';
import { currencyApi, type Currency } from '../currencyApi';

export const useGetCurrencies = () => {
    return useQuery<Currency[]>({
        queryKey: ['currencies'],
        queryFn: currencyApi.getCurrencies,
        staleTime: 1000 * 60 * 30 // 30 minutes, as currency list doesn't change often
    })
}