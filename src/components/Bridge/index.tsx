import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdOutlineEast } from "react-icons/md";
import styles from "./styles";

const Bridge = () => {
  return (
    <Flex style={styles.bridgeContainer} flexDir="column">
      <Heading className="multi-chain-bridge" size="lg">
        Multi-Chain Bridge
      </Heading>
      <Flex style={styles.bridgeContent} flexDir="column">
        <Flex flexGrow="1" margin="20px" flexDir="column">
          <Flex width="100%" marginTop="10%">
            <Box width="40%">
              <Flex style={styles.chainContainer} as={Button}>
                <Image height="50%" src="/avax.png" alt="avax logo" />
                <Text fontWeight="medium" fontSize="xl" color="#D0CACA">
                  Avalanche
                </Text>
                <MdKeyboardArrowDown />
              </Flex>
              <Text style={styles.fromToChainText} textAlign="center">
                From Chain
              </Text>
            </Box>
            <Box width="20%">
              <Flex style={styles.switchContainer} as={Button}>
                <MdOutlineEast color="#B7B7B7" size="20px" />
              </Flex>
            </Box>
            <Box width="40%">
              <Flex style={styles.chainContainer} as={Button}>
                <Image height="60%" src="/binance.png" alt="Binance logo" />
                <Text fontWeight="medium" fontSize="xl" color="#D0CACA">
                  Binance
                </Text>
                <MdKeyboardArrowDown />
              </Flex>
              <Text style={styles.fromToChainText} textAlign="center">
                To Chain
              </Text>
            </Box>
          </Flex>
          <Flex style={styles.amountContainer} as={Button}></Flex>
          <Text color="#9D9D9D" textAlign="center" marginTop="10px">
            * Please connect your wallet to the chain you wish to bridge from.
          </Text>
        </Flex>
        <Flex margin="20px">
          <Flex
            style={styles.bridgeButton}
            bgGradient="linear(to-r, #D48B47, #6340B7)"
            as={Button}
          >
            <Text style={styles.bridgeText} textAlign="center">
              Bridge Token
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Bridge;
