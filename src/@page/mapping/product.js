import { Box, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"

const Product = ({ image1, price, image2, name }) => {
    const [isHover, setIsHover] = useState(false)
    return (
        <Box className="flex-body-home-second">
            <Box
                transform={`scale(${isHover ? 1.05 : 1})`}
                transition={"0.5s"}
                onMouseMove={() => setIsHover(true)} onMouseLeave={() => setIsHover
                    (false)}>
                {
                    isHover ?
                        <img className="img-home-second" src={image1} />
                        :
                        <img className="img-home-second" src={image2} />
                }
            </Box>
            <Flex className="flex-body-title-price">
                <Box className="title-price-home">
                    <Text>{name}</Text>
                </Box>
                <Box className="rating-price-home">
                    <Box className="star-rating-home">
                        <img src="https://vimcosmo.com/pics/star.svg" />
                        <img src="https://vimcosmo.com/pics/star.svg" />
                        <img src="https://vimcosmo.com/pics/star.svg" />
                        <img src="https://vimcosmo.com/pics/star.svg" />
                        <img src="https://vimcosmo.com/pics/star.svg" />
                    </Box>
                    <Text>{price}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default Product