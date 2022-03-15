import create from "zustand";
import { Chain } from "wagmi";

interface useStore {
  chainId: number;
  setChainId: (chainId: number) => void;
  testChains: Chain[];
}

const useStore = create<useStore>((set) => ({
  chainId: 43113,
  setChainId: (chainId) => set((state) => ({ ...state, chainId })),
  testChains: [
    {
      id: 43113,
      name: "Avalanche FUIJI C-Chain",
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
        decimals: 18,
      },
      rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
      blockExplorers: [
        {
          name: "Snowtrace",
          url: "https://testnet.snowtrace.io",
        },
      ],
      testnet: true,
    },
    {
      id: 97,
      name: "Smart Chain - Testnet",
      nativeCurrency: {
        name: "BNB Token",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
      blockExplorers: [
        {
          name: "bscscan",
          url: "https://testnet.bscscan.com",
        },
      ],
      testnet: true,
    },
  ],
}));

export default useStore;
