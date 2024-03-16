import { Box, Flex, Text } from "@chakra-ui/react"
import './shop.scss'
import { backgroundImg } from "../mapping/backgroundImg";
import Product from "../mapping/product";
import { useEffect, useState } from "react";
import { getProductShop } from "../../@service/crud";

const Shop = () => {
    const [productShop, setProductShop] = useState([])
    const homeBackground = backgroundImg.find(img => img?.backgroundImgShop);


    useEffect(() => {
        getProductShop({ setProductShop })
    })
    return (
        <Box className="container-shop">
            <Box className="background-img-shop">
                <img src={homeBackground?.backgroundImgShop} />
                <Box className="span-background-img-shop">
                    <Text>Explore the best</Text>
                    <Text>brands</Text>
                </Box>
            </Box>
            <Box className="body-shop">
                <Box className="box-body-home-second">
                    <Flex className="body-home-second">
                        <Text className="title-body-home-second">Popular Products</Text>
                        <Flex className="img-body-home-second">
                            {
                                productShop?.map((item) => (
                                    <Product
                                        image1={item?.image1}
                                        image2={item?.image2}
                                        price={item?.price}
                                        name={item?.nameProduct} />
                                ))
                            }
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
export default Shop;