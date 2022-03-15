import { Flex } from "@chakra-ui/react";
import { StatusBar, NavMenu, Bridge, Ad, Footer } from "../components";

const Games = () => (
  <Flex height="100vh" flexDir="column">
    <StatusBar />
    <Flex flexGrow="1">
      <NavMenu />
    </Flex>
    <Footer />
  </Flex>
);

export default Games;
