
// 2.- componets
import { Text } from '../../../layauts/Text';
import Button from '../../../layauts/button/Button';

// 3.- estilos
import { ContainerIcon, ContainerText } from "../styled";

// 4.- iconos
import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';

const OptionsPage = (): JSX.Element => {

    return <>
        <ContainerText className='d-flex flex-column flex-lg-row justify-content-center align-items-center ml-lg-5'>
            <Text className='my-2 mt-5 mt-lg-0 my-lg-0 mr-0 mr-lg-4'>Home</Text>
            <Text className='my-2 my-lg-0 mr-0 mr-lg-4'>The crew</Text>
            <Text className='my-2 my-lg-0 mr-0 mr-lg-4'>Events</Text>
            <Text className='my-2 my-lg-0 mr-0 mr-lg-4'>{"What's new"}</Text>
            <Text className='my-2 my-lg-0 mr-0 mr-lg-4'>Virtual office</Text>
            <Text className='my-2 my-lg-0 mr-0 mr-lg-4'>Contact</Text>
        </ContainerText>
        
        <div className='d-flex justify-content-center align-items-center my-4 my-lg-0'>
            <Button
                color='#5AD3DF'
                classes='btn'
            >Maria Reina Parish</Button>
        </div>

        <ContainerIcon className='ml-0 ml-lg-4 mb-3 mb-lg-0'>
            <Instagram />
        </ContainerIcon>

        <ContainerIcon className='ml-0 ml-lg-2 mr-0 mr-lg-4'>
            <Facebook />
        </ContainerIcon>
    </>
}

export default OptionsPage;