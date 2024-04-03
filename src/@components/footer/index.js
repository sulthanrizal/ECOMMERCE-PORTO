import { Box, Flex, Text } from "@chakra-ui/react"
import './footer.scss'
import ImgSvgFooter from "./imgSvgfooter";

const Footer = () => {


    return (
        <Flex className="container-footer">
            <Box className="background-img-footer">
                <img src="https://vimcosmo.com/pics/footer.webp" />
            </Box>
            <Box className="input-email-footer">
                <Text>Subscribe to our</Text>
                <Text>newsletters</Text>
                <Box className="input-footer">
                    <input type="email" name="email" placeholder="Email" />
                </Box>
                <span className="span-input-footer">Subscribe</span>
            </Box>
            <Box className="bottom-footer">
                <Text className="text-bottom-footer">Privacy policy</Text>
                <Text className="text-bottom-footer"> Desaign & Development  <ImgSvgFooter /></Text>
            </Box>
        </Flex>
    )
}
export default Footer;