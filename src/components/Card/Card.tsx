import { Box, Center, Heading, Input, Link } from '@chakra-ui/react'
import { ButtonComponent } from '../Button/Button'
import { login } from '../../services/login'
import { Header } from '../Header/Header'

export const LoginCard = () => {
  return(
    <>
    <Header/>
    <Box minHeight='100vh' backgroundColor='#223a5e' padding='25px' alignItems='center' >
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'  p='6' w='65%' marginLeft='17%'>
        <Center>
          <Heading>Login</Heading>
        </Center>
        <Input margin='10px' placeholder='email' />
        <Input margin='10px' placeholder='password' />
        
        <ButtonComponent onClick={login} text='Button' chackraProps={{colorScheme:'messenger', width:'100%', marginTop:'10px', margin: '10px'}} />
        <Center>
            <Link paddingLeft='5px' color='#087dcc'>Register</Link>
        </Center>
      </Box>
    </Box>
    </>
  )
}