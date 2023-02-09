import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Box,
  useColorModeValue,
  isOpen,
  HStack,
  MenuList,
  MenuItem,
  Avatar,
  MenuDivider,
  onOpen,
  Flex,
  Link,
  Button,
  ChakraProvider,
  Menu,
  NavLink,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import Router from 'next/router'
import { extendTheme } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../../images/SizzleLogo.png'


export default function DarkModeSwitch (){
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <>
      <Box bg={useColorModeValue('orange.300', 'gray.900')}  px={4}>
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={5} alignItems={'center'}>
          <Image src={logo} width="60" height="30"/>
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}
              pt={1}
              >
                <Link onClick={() => Router.push('/')}>Home</Link>
                <Link onClick={() => Router.push('/funder/search')}>View Funds</Link>
            </HStack>
          </HStack>




          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'orange'}
              size={'sm'}
              mr={4}
              onClick={() => Router.push('/fundee/create')}
              >
              Create a fund
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  height={30}
                  width={30}
    
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => Router.push('/profile/1')}>Profile</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => Router.push('/profile/editprofile')}>Edit Profile</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>

            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
