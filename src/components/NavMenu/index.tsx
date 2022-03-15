import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import {
  MdOutlineWindow,
  MdDashboard,
  MdOutlineSportsEsports,
} from "react-icons/md";
import { GiSuspensionBridge } from "react-icons/gi";

const ICON_MENU_ITEMS = [
  {
    link: "/",
    icon: <MdOutlineWindow />,
    title: "Dashboard",
  },
  {
    link: "/bridge",
    icon: <GiSuspensionBridge />,
    title: "Bridge",
  },
  {
    link: "/games",
    icon: <MdOutlineSportsEsports />,
    title: "Games",
  },
  {
    link: "/mint",
    icon: <MdDashboard />,
    title: "Mint",
  },
];

const MENU_ITEMS = [
  {
    title: "Support",
  },
  {
    title: "Docs",
  },
];

const NavMenu = () => {
  const { pathname } = useRouter();

  const IconMenuItem = ({ link, icon, title }) => {
    return (
      <NextLink href={link} passHref>
        <Button
          padding="10px"
          isActive={pathname === link}
          width="80%"
          height="55px"
          margin="auto"
          bg="#041716"
          justifyContent="flex-start"
          leftIcon={icon}
          iconSpacing={5}
          _active={{
            borderColor: "#D48B47",
            borderWidth: "2px",
            transform: "scale(1)",
          }}
        >
          <Text fontSize="xl" fontWeight="medium" color="#B3ABAB">
            {title}
          </Text>
        </Button>
      </NextLink>
    );
  };

  const MenuItem = ({ title }) => {
    return (
      <Box style={{ cursor: "pointer" }} width="80%" margin="auto">
        <Flex alignItems="center" paddingLeft="70px">
          <Text fontSize="md" fontWeight="medium" color="#B3ABAB">
            {title}
          </Text>
        </Flex>
      </Box>
    );
  };

  return (
    <Flex width="22vw" justify="flex-end">
      <Box width="75%" height="100%" bg="#041716" borderRadius="8px">
        <Flex marginTop="20%" gap="10px" flexDir="column">
          <IconContext.Provider
            value={{
              style: {
                color: "black",
                backgroundColor: "#2B4642",
                borderRadius: "100%",
                padding: "8px",
              },
              size: "40px",
            }}
          >
            {ICON_MENU_ITEMS.map(({ link, icon, title }) => {
              return <IconMenuItem link={link} icon={icon} title={title} />;
            })}
          </IconContext.Provider>
          <Flex marginTop="50px" flexDir="column" gap="25px">
            {MENU_ITEMS.map(({ title }) => {
              return <MenuItem title={title} />;
            })}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NavMenu;
