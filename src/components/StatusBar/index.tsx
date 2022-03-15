import { useEffect } from "react";
import useStore from "../../stores/useStore";
import shallow from "zustand/shallow";
import {
  Box,
  Flex,
  Image,
  Text,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
  Link,
} from "@chakra-ui/react";
import { useAccount, useConnect, useBalance, useNetwork } from "wagmi";
import styles from "./styles";

const StatusBar = () => {
  // TODO
  // [ ] Add error cases
  // [ ] Add loading cases
  const { chainId, setChainId } = useStore(
    (state) => ({ chainId: state.chainId, setChainId: state.setChainId }),
    shallow
  );

  const [{ data: connectData }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const [{ data: balanceData, loading: loadingBalance }, getBalance] =
    useBalance({
      addressOrName: accountData?.address || "",
    });
  const [{ data, error, loading }, switchNetwork] = useNetwork();

  console.log("chainId", chainId);
  console.log("connectData", connectData);
  console.log("accountData", accountData);
  console.log("balanceData", balanceData);
  useEffect(() => {
    //  getBalance();
    connect(connector);
  }, [chainId]);

  const connector = connectData.connectors[0];

  const chains = [
    {
      id: 43113,
      icon: <Image height="25px" src="/avax.png" alt="avax logo" />,
      name: "Avalanche",
    },
    {
      id: 97,
      icon: <Image height="25px" src="/binance.png" alt="binance logo" />,
      name: "Binance",
    },
  ];

  const MenuButtonContent = ({ item }) => {
    return (
      <Flex alignItems="center" gap="10px">
        {item.icon}
        <Text fontSize="xl" color="#BBB8B8" fontWeight="bold">
          {item.name}
        </Text>
      </Flex>
    );
  };

  const MenuItemContent = ({ item }) => {
    return (
      <MenuItem
        height="70%"
        key={item.id}
        icon={item.icon}
        onClick={() => {
          setChainId(item.id);
          switchNetwork(item.id);
        }}
      >
        <Text fontSize="xl" color="#BBB8B8" fontWeight="bold">
          {item.name}
        </Text>
      </MenuItem>
    );
  };

  return (
    <Flex justify="space-between" height="62px" width="87.5vw">
      <Flex width="22vw" justify="flex-end">
        <Box width="70%" paddingLeft="30px">
          <Link href="/">
            <Image src="/Logo.png" alt="Logo" height="90%" />
          </Link>
        </Box>
      </Flex>
      <Flex alignItems="center" justify="flex-end" gap="20px">
        <Menu>
          <MenuButton
            bg="#041716"
            height="70%"
            padding="10px"
            borderRadius="10px"
            as={Button}
          >
            {chains
              .filter((chain) => chain.id === chainId)
              .map((item) => {
                return <MenuButtonContent item={item} />;
              })}
          </MenuButton>

          <MenuList bg="#041716">
            {chains
              .filter((chain) => chain.id !== chainId)
              .map((item) => {
                return <MenuItemContent item={item} />;
              })}
          </MenuList>
        </Menu>
        <Flex style={styles.connectContainer}>
          <Text fontWeight="bold" fontSize="md" padding="20px" color="#BBB8B8">
            {loadingBalance
              ? "Loading..."
              : accountData
              ? `${balanceData?.formatted.substring(0, 5)} AVAX`
              : "0 AVAX"}
          </Text>
          <Flex
            style={styles.connectButton}
            bgGradient="linear(to-r, #D48B47, #6340B7)"
            onClick={
              connectData?.connected ? disconnect : () => connect(connector)
            }
            as={Button}
          >
            <Text color="white" fontSize="md" fontWeight="bold">
              {accountData
                ? accountData.ens?.name ||
                  `${accountData.address.substring(
                    0,
                    4
                  )}...${accountData.address.substring(
                    accountData.address.length - 4
                  )}`.toLowerCase()
                : "MetaMask"}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StatusBar;
