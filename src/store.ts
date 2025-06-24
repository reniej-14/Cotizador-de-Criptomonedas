import { create } from 'zustand'
import type { CryptoCurrency } from './types'
import { getCryptos } from './services/CryptoService'

type CryptoStore = {
    cryptocurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        
        set(() => ({
            cryptocurrencies
        }))
    }
}))