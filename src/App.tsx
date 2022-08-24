import { useState } from 'react'
import { 
  ColorModeScript, 
  useColorMode, 
  Box, 
  Button, 
  Center,
  Container, 
  Flex, 
  HStack,
  VStack, 
  Heading,
  Input, 
  Text,
  Textarea } from '@chakra-ui/react'

import styled from '@emotion/styled'

import theme from './theme'
import Header from './components/Header'

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    
      <div className="App">
        <AppWrapper>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Header title="Beach Resort" mode={toggleColorMode} current={colorMode} />
          This is a Vite App
        </AppWrapper>
      </div>
    
  )
}

export default App


const AppWrapper = styled.div`
  height: 100vh;
  background-color: blue;
`