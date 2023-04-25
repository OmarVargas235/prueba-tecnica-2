
// 2.- componets
import { Text } from '../../../layauts/Text';
import Button from '../../../layauts/button/Button';

// 3.- estilos
import { Container, ContainerIcon, ContainerText } from "../styled";

// 4.- iconos
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';

const NavbarPage = (): JSX.Element => {

    return <Container className="py-3">
        <div className='d-flex justify-content-center align-items-center'>
            <Logo className='logo mr-lg-5' />

            <ContainerText className='d-flex justify-content-center align-items-center ml-lg-5'>
                <Text className='mr-4'>Home</Text>
                <Text className='mr-4'>The crew</Text>
                <Text className='mr-4'>Events</Text>
                <Text className='mr-4'>{"What's new"}</Text>
                <Text className='mr-4'>Virtual office</Text>
                <Text className='mr-4'>Contact</Text>
            </ContainerText>
            
            <div className='d-flex justify-content-center align-items-center'>
                <Button
                    color='#5AD3DF'
                    classes='btn'
                >Maria Reina Parish</Button>
            </div>

            <ContainerIcon className='ml-4'>
                <Instagram />
            </ContainerIcon>

            <ContainerIcon className='ml-2 mr-4'>
                <Facebook />
            </ContainerIcon>
        </div>
    </Container>
}

export default NavbarPage;