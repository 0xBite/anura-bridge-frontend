import useStore from "../stores/useStore";
import shallow from "zustand/shallow";
import { ethers } from "ethers";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { WagmiProvider } from "wagmi";
import { AppProps } from "next/app";
import "../../styles/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { testChains, chainId } = useStore(
    (state) => ({ testChains: state.testChains, chainId: state.chainId }),
    shallow
  );
  const RPCUrl = testChains.filter((chain) => chain.id === chainId)[0]
    ?.rpcUrls[0];
  const provider = new ethers.providers.JsonRpcProvider(RPCUrl);
  const connectors = [new InjectedConnector({ chains: testChains })];

  return (
    <ChakraProvider resetCSS theme={theme}>
      <WagmiProvider provider={provider} connectors={connectors} autoConnect>
        <Component {...pageProps} />
      </WagmiProvider>
    </ChakraProvider>
  );
}

export default MyApp;
