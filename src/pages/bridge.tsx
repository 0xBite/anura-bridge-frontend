import { Flex } from "@chakra-ui/react";
import {
  StatusBar,
  NavMenu,
  Bridge as BridgeComponent,
  Ad,
  Footer,
} from "../components";

const Bridge = () => (
  <Flex height="100vh" flexDir="column">
    <StatusBar />
    <Flex flexGrow="1">
      <NavMenu />
      <BridgeComponent />
      <Ad />
    </Flex>
    <Footer />
  </Flex>
);

export default Bridge;
