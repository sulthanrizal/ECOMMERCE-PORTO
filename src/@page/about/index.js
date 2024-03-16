import { Box, Flex, Text } from "@chakra-ui/react"
import { backgroundImg } from "../mapping/backgroundImg";
import './about.scss'
import { onClickNav } from "../../@helper/onClick";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    const homeBackground = backgroundImg.find(img => img?.backgroundImgAbout);

    return (
        <Box className="container-about">
            <Box className="background-img-about">
                <img src={homeBackground?.backgroundImgAbout} />
                <Box className="span-background-img-about">
                    <Text>About us</Text>
                </Box>
            </Box>
            <Box className="body-about">
                <Box className="box-body-about-first">
                    <img src="https://vimcosmo.com/pics/10-years-experience.webp" />
                    <Box className="text-body-about-first">
                        <Text className="text-about-first">Over 10 years of experience</Text>
                        <Text className="text-about-second">Founded in 2012, Vimcosmo is Europe’s leading online premium beauty retailer with over 30,000 products at your fingertips.</Text>
                        <Text className="text-about-threed" onClick={() => { onClickNav({ path: '/shop', navigate }) }}>Browse products</Text>
                    </Box>
                </Box>
                <Box className="box-body-about-second">
                    <Flex className="body-about-top-second">
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-1.png" />
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-2.png" />
                    </Flex>
                    <Flex className="body-about-body-second">
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-6.png" />
                        <Box className="text-body-second">
                            <Text>Why you should</Text>
                            <Text>choose VIM?</Text>
                        </Box>
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-3.png" />
                    </Flex>
                    <Flex className="body-about-bottom-second">
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-5.png" />
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-4.png" />
                    </Flex>
                </Box>
                <Box className="box-body-about-threed">
                    <Box className="text-body-about-threed">
                        <Text className="text-about-one">Love your beauty, body & skin</Text>
                        <Text className="text-about-two">Try something new by exploring our website and we will help you find what works for you and your skin, with your top concerns in mind</Text>
                        <Text className="text-about-three" onClick={() => { onClickNav({ path: '/shop', navigate }) }}>Browse product</Text>
                    </Box>
                    <img src="https://vimcosmo.com/pics/love-beauty.webp" />
                </Box>
            </Box>
            <Box className="footer-about">
                <Box className="box-footer-about-first">
                    <Flex className="footer-about-top-first">
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-1.png" />
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-2.png" />
                    </Flex>
                    <Flex className="footer-about-body-first">
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-6.png" />
                        <Box className="text-footer-first">
                            <Text>Why you should</Text>
                            <Text>choose VIM?</Text>
                        </Box>
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-3.png" />
                    </Flex>
                    <Flex className="footer-about-bottom-first">
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-5.png" />
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-4.png" />
                    </Flex>
                </Box>
                <Box className="box-footer-about-second">
                    <Flex className="footer-about-second-one">
                        <Box className="img-footer-about-second">
                            <img src="https://vimcosmo.com/pics/easy-shop.png" />
                        </Box>
                        <Flex className="text-footer-about-second">
                            <Text className="title-text-footer-second">Easy to shop</Text>
                            <Text className="text-footer-second">Beauty should be accessible to all, regardless of location or financial ability.</Text>
                        </Flex>
                    </Flex>
                    <Flex className="footer-about-second-two">
                        <Box className="img-footer-about-second">
                            <img src="https://vimcosmo.com/pics/good-skin.png" />
                        </Box>
                        <Flex className="text-footer-about-second">
                            <Text className="title-text-footer-second">Good For Skin</Text>
                            <Text className="text-footer-second">If there's one place to invest in your beauty routine, it's here. Get your skincare right.</Text>
                        </Flex>
                    </Flex>
                    <Flex className="footer-about-second-three">
                        <Box className="img-footer-about-second">
                            <img src="https://vimcosmo.com/pics/best-brands.png" />
                        </Box>
                        <Flex className="text-footer-about-second">
                            <Text className="title-text-footer-second">Best Brands</Text>
                            <Text className="text-footer-second">We stock incredible products from more than 500 brands. Authenticity is guaranteed.</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
export default About;