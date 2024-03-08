import { Box, ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DasboardContianer from './@dasboardContainer';
import router from './@router';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box className='container-app'>
          <DasboardContianer>
            <Routes>
              {
                router.map(({ path, element }, index) => {
                  return (
                    <Route key={index} path={path} element={element} />
                  )
                })
              }
            </Routes>
          </DasboardContianer>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App;
