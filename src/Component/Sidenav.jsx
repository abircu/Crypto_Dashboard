import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidenav = () => {
    const navLinks = [{
        icon: LuLayoutDashboard,
        text: "Dashboard",
        link: "/",
    },
    {
        icon: LuLayoutDashboard,
        text: "Transactions",
        link: "/transactions",
    },
    ];
    return <Stack>{
        navLinks.map((nav) => (
            <HStack key={nav.text}>
                <Icon>{nav.icon}</Icon>
                <Text>{nav.text}</Text>
            </HStack>
        ))}
    </Stack>;
};

export default Sidenav;

