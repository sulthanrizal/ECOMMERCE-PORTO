import { Box, Flex, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { onClickNav } from "../../@helper/onClick";
import './header.scss'

const Header = () => {
    const navigate = useNavigate()
    return (
        <Box className="container-header">
            <Flex className="flex-header">
                <Box className="title-header">
                    <Text>Vim</Text>
                </Box>
                <Box className="list-page-header">
                    <Text onClick={() => { onClickNav({ path: '/', navigate }) }}>Home</Text>
                    <Text onClick={() => { onClickNav({ path: '/shop', navigate }) }}>Shop</Text>
                    <Text>About</Text>
                    <Text>Contact</Text>
                </Box>
            </Flex>
        </Box>
    )
}
export default Header;