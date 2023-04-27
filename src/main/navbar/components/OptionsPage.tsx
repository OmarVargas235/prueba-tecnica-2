
// 2.- componets
import { Text } from '../../../layauts/Text';
import Button from '../../../layauts/button/Button';

// 3.- estilos
import { ContainerIcon, ContainerText, Option } from "../styled";

// 4.- iconos
import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';

// 5.- hooks
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const OptionsPage = (): JSX.Element => {

    const matches = useMediaQuery('(min-width: 992px)');

    return <>
        <ContainerText className={`d-flex flex-column flex-lg-row justify-content-center align-items-center ml-lg-5 ${matches ? '' : 'w-100'}`}>
            <Option className='my-2 mt-lg-0 my-lg-0 mr-0 mr-lg-4'>
                <Text>Home</Text>
            </Option>

            <Option className='my-2 my-lg-0 mr-0 mr-lg-4'>
                <Text>The crew</Text>
            </Option>
            
            <Option className='my-2 my-lg-0 mr-0 mr-lg-4'>
                <Text>Events</Text>
            </Option>

            <Option className='my-2 my-lg-0 mr-0 mr-lg-4'>
                <Text>{"What's new"}</Text>
            </Option>

            <Option className='my-2 my-lg-0 mr-0 mr-lg-4'>
                <Text>Virtual office</Text>
            </Option>

            <Option className='my-2 my-lg-0 mr-0 mr-lg-4'>
                <Text>Contact</Text>
            </Option>
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