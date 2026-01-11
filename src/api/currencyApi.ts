const CURRENCY_BEACON_API_KEY = import.meta.env.VITE_CURRENCY_BEACON_API_KEY;
const CURRENCY_API_BASE_URL = 'https://api.currencybeacon.com/v1';

if (!CURRENCY_BEACON_API_KEY) {
    throw new Error('CURRENCY_BEACON_API_KEY environment variable is not defined');
}

export interface Currency {
    name: string;
    code: number;
    id: number;
    short_code: string;
}

export interface Conversion {
    from: string;
    to: string;
    value: string;
    amount: number
}

interface CurrenciesApiResponse {
    meta: {
        code: number;
    },
    response: Currency[]
}

interface ConversionApiResponse {
    meta: {
        code: number,
    },
    response: Conversion
}

const getCurrencies = async () => {
    try {
        const url = `${CURRENCY_API_BASE_URL}/currencies?api_key=${CURRENCY_BEACON_API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to get currencies, API error: ${response.status}`);
        }

        const data: CurrenciesApiResponse = await response.json();

        if (!data.meta || data.meta.code !== 200) {
            throw new Error(`Failed to get currencies, invalid data`);
        }

        return data.response || []
    }
    catch {
        throw new Error('Failed to get currencies');
    }
}

interface ConversionParams {
    from: string;
    to: string;
    amount: number;
}

const getConversion = async ({ from, to, amount }: ConversionParams) => {
    if (!CURRENCY_BEACON_API_KEY) {
        throw new Error('API key is missing');
    }
    try {
        const url = new URL(`${CURRENCY_API_BASE_URL}/convert`);
        url.searchParams.set('api_key', CURRENCY_BEACON_API_KEY);
        url.searchParams.set('from', from);
        url.searchParams.set('to', to);
        url.searchParams.set('amount', String(amount));

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data: ConversionApiResponse = await response.json();

        return data.response;
    } catch {
        throw new Error('Failed to convert currency');
    }
}

export const currencyApi = {
    getCurrencies,
    getConversion,
}