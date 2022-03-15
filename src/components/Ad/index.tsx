import { Flex, Text, Image } from "@chakra-ui/react";

const ad = () => {
  return (
    <Flex style={{ cursor: "pointer" }} width="22vw" alignItems="center">
      <Flex width="75%" position="relative">
        <Image src="/partnership.png" alt="partnership background" />
        <Text
          fontWeight="bold"
          color="white"
          position="absolute"
          fontSize="3xl"
          width="80%"
          left="10%"
          top="30%"
        >
          Cool Partnership {<br />} Ad Placement
        </Text>
      </Flex>
    </Flex>
  );
};

export default ad;
