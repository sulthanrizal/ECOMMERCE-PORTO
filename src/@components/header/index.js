import { Box, Flex, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { onClickNav } from "../../@helper/onClick";
import './header.scss'

const Header = () => {
    const navigate = useNavigate()

    const ImgSvgheader = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29.481 35">
                <path id="Path_385" data-name="Path 385" d="M1450.495,272.231c-.022-.947-.084-1.9-.144-2.825-.022-.349-.045-.7-.065-1.047q-.111-1.878-.225-3.754c-.156-2.584-.318-5.258-.459-7.888a3.556,3.556,0,0,0-3.872-3.744h-1.373a9.841,9.841,0,0,0-2.333-6.118,8.087,8.087,0,0,0-12.087-.49,9.488,9.488,0,0,0-2.808,6.608H1425.8a3.58,3.58,0,0,0-3.889,3.727c-.075,1.518-.171,3.063-.263,4.556-.05.8-.1,1.61-.146,2.415-.048.832-.1,1.662-.154,2.492-.126,1.993-.257,4.053-.327,6.086a6.341,6.341,0,0,0,1.761,4.671,6.455,6.455,0,0,0,4.691,1.957c2.623,0,5.309.006,8.1.006,2.7,0,5.505,0,8.442,0a6.381,6.381,0,0,0,6.48-6.649Zm-24.762-16.595h2.035l1.461.025h13.05l1.451.013c.28,0,.557-.006.827-.012a16.094,16.094,0,0,1,1.785.029c.367.034.554.419.577.786.11,1.794.215,3.619.318,5.384q.073,1.247.145,2.494.058,1,.115,1.99c.1,1.709.2,3.478.317,5.217a4.325,4.325,0,0,1-.609,2.994,3.61,3.61,0,0,1-3.07,1.655c-5.348.016-10.829.017-16.757,0a3.7,3.7,0,0,1-2.676-1.132,3.647,3.647,0,0,1-1.027-2.672c.054-1.691.162-3.415.267-5.082q.062-.984.12-1.968.1-1.643.2-3.284c.1-1.744.213-3.548.311-5.323C1424.62,255.877,1424.869,255.637,1425.732,255.636Zm4.1-2.68c0-.035.008-.069.012-.1a12.335,12.335,0,0,1,.254-1.564,6.268,6.268,0,0,1,2.7-3.839,5.257,5.257,0,0,1,6.107.142,6.71,6.71,0,0,1,2.758,5.364Z" transform="translate(-1421.016 -243.885)"></path>
            </svg>
        )
    }
    return (
        <Box className="container-header">
            <Flex className="flex-header">
                <Box className="title-header">
                    <Text>Vim</Text>
                </Box>
                <Box className="list-page-header">
                    <Text onClick={() => { onClickNav({ path: '/', navigate }) }}>Home</Text>
                    <Text onClick={() => { onClickNav({ path: '/shop', navigate }) }}>Shop</Text>
                    <Text onClick={() => { onClickNav({ path: '/about', navigate }) }}>About</Text>
                    <Text onClick={() => { onClickNav({ path: '/contact', navigate }) }}>Contact</Text>
                    <Text>
                        <ImgSvgheader />
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}
export default Header;