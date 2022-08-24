import {
  Button,
  ButtonGroup,
  Box,
  Flex,
  Heading,
  Spacer
} from '@chakra-ui/react'

import { css } from '@emotion/react'

import { LockIcon, MoonIcon, SunIcon, StarIcon} from '@chakra-ui/icons'

const Header = ({ title, mode, current }:{title:string, mode:any, current:any}) => { 
  let icon = current === 'light' ? <SunIcon /> : <MoonIcon />
  return (
      <Flex m='4' css={css`
        background-color: red;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      `}>
        <Box p='4'>
          <Heading as='h1' fontSize='20px'>{title}</Heading>
        </Box>
        <Spacer />
        <Box p='4'>
        <ButtonGroup variant='outline' spacing='2'>
          <Button leftIcon={<StarIcon />} >
            Star
          </Button>
        
          <Button leftIcon={<LockIcon />}>
            Lock
          </Button>
          <Button leftIcon={icon} onClick={mode}>
            I prefer the&nbsp;<strong>{current}</strong>
          </Button>
        </ButtonGroup>
      </Box>
    </Flex>
  )
}

export default Header

