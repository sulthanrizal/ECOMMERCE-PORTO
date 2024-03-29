import { Box, Flex, Text } from "@chakra-ui/react"
import './home.scss'
import { onClickNav } from "../../@helper/onClick"
import { useNavigate } from "react-router-dom"
import Product from "../mapping/product"
import { backgroundImg } from "../mapping/backgroundImg"
import { useEffect, useState } from "react"
import { getProduct } from "../../@service/crud"

const Home = () => {
    const [product, setProduct] = useState([])
    const navigate = useNavigate()
    const homeBackground = backgroundImg.find(img => img?.backgroundImgHome);


    useEffect(() => {
        getProduct({ setProduct })
    }, [])
    return (
        <Box className="container-home">
            <Box className="background-img-home">
                <img src={homeBackground?.backgroundImgHome} />
                <Box className="text-link-home">
                    <Text onClick={() => { onClickNav({ path: '/shop', navigate }) }}>Beauty & Cosmetic </Text>
                    <Text onClick={() => { onClickNav({ path: '/shop', navigate }) }}>Products</Text>
                </Box>
            </Box>
            <Box className="body-home">
                <Box className="box-body-home-first">
                    <img src="https://vimcosmo.com/pics/organic.webp" />
                    <Box className="text-body-home-first">
                        <Text className="text-home-first">Made Only With Organic Materials</Text>
                        <Text className="text-home-second">Feel good about yourself with our 100% vegan formulas free from phthalates, parabens, triclosan, triclocarban, and hydroquinone.</Text>
                        <Text className="text-home-threed" onClick={() => { onClickNav({ path: '/shop', navigate }) }}>Browse products</Text>
                    </Box>
                </Box>
                <Box className="box-body-home-second">
                    <Flex className="body-home-second">
                        <Text className="title-body-home-second">Popular Products</Text>
                        <Flex className="img-body-home-second">
                            {
                                product?.map((item) => (
                                    <Product
                                        image1={item?.image1}
                                        image2={item?.image2}
                                        price={item?.price}
                                        name={item?.nameProduct} />
                                ))
                            }
                            {
                                console.log(product, 'ini product')

                            }
                        </Flex>
                    </Flex>
                </Box>
                <Box className="box-body-home-threed">
                    <Box className="text-body-home-threed">
                        <Text className="text-home-one">Be Extra Without Paying Extra</Text>
                        <Text className="text-home-two">With us, you'll get quality products at realistic prices. Your feedback and reviews guide everything we do get the best without killing wallet.</Text>
                        <Text className="text-home-three" onClick={() => { onClickNav({ path: '/shop', navigate }) }}>Browse product</Text>
                    </Box>
                    <img src="https://vimcosmo.com/pics/be-extra.webp" />
                </Box>
                {/* <Box className="box-body-home-fourth">
                    <Flex className="flex-body-fourth-top">
                        <Box className="body-fourth-top">
                            <img src="https://vimcosmo.com/pics/sandra.webp" />
                            <Box className="">
                                <Text>kwwwk</Text>
                            </Box>
                        </Box>
                        <Box className="body-fourth-top">
                            <img src="https://vimcosmo.com/pics/sandra.webp" />
                            <Box>
                                <Text>kwwwk</Text>
                            </Box>
                        </Box>
                    </Flex>
                </Box> */}
                <Box className="box-body-home-five">
                    <img src="https://vimcosmo.com/pics/fast-delivery.webp" />
                    <Box className="text-body-home-five">
                        <Text className="text-home-first">Superfast Delivery System</Text>
                        <Text className="text-home-second">We’re all about fast delivery, unbeatable customer service, and simple returns. We ship to over 120 countries and counting. Plus, our loyalty program provides some insane rewards for our VIP customers.</Text>
                        <Text className="text-home-threed">Browse products</Text>
                    </Box>
                </Box>
            </Box>
            <Box className="footer-home">
                <Box className="box-footer-home-first">
                    <Flex className="footer-home-top-first">
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-1.png" />
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-2.png" />
                    </Flex>
                    <Flex className="footer-home-body-first">
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-6.png" />
                        <Box className="text-footer-first">
                            <Text>Why you should</Text>
                            <Text>choose VIM?</Text>
                        </Box>
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-3.png" />
                    </Flex>
                    <Flex className="footer-home-bottom-first">
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-5.png" />
                        <img src="https://vimcosmo.com/pics/cosmetic-particle-4.png" />
                    </Flex>
                </Box>
                <Box className="box-footer-home-second">
                    <Flex className="footer-home-second-one">
                        <Box className="img-footer-home-second">
                            <img src="https://vimcosmo.com/pics/easy-shop.png" />
                        </Box>
                        <Flex className="text-footer-home-second">
                            <Text className="title-text-footer-second">Easy to shop</Text>
                            <Text className="text-footer-second">Beauty should be accessible to all, regardless of location or financial ability.</Text>
                        </Flex>
                    </Flex>
                    <Flex className="footer-home-second-two">
                        <Box className="img-footer-home-second">
                            <img src="https://vimcosmo.com/pics/good-skin.png" />
                        </Box>
                        <Flex className="text-footer-home-second">
                            <Text className="title-text-footer-second">Good For Skin</Text>
                            <Text className="text-footer-second">If there's one place to invest in your beauty routine, it's here. Get your skincare right.</Text>
                        </Flex>
                    </Flex>
                    <Flex className="footer-home-second-three">
                        <Box className="img-footer-home-second">
                            <img src="https://vimcosmo.com/pics/best-brands.png" />
                        </Box>
                        <Flex className="text-footer-home-second">
                            <Text className="title-text-footer-second">Best Brands</Text>
                            <Text className="text-footer-second">We stock incredible products from more than 500 brands. Authenticity is guaranteed.</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box >
    )
}
export default Home;