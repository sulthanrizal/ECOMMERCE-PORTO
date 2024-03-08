import { Box } from "@chakra-ui/react"
import Header from "../@components/header";
import Footer from "../@components/footer";
import './dasboard.scss'

const DasboardContianer = ({ children }) => {
    return (
        <Box className="container-dasboard">
            <Box className="header-dasboard">
                <Header />
            </Box>
            {children}
            <Box className="footer-dasboard">
                <Footer />
            </Box>
        </Box>
    )
}
export default DasboardContianer;