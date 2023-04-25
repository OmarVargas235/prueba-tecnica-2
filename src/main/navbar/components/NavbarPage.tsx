
// 2.- componets
import OptionsPage from './OptionsPage';

// 3.- estilos
import { Container } from "../styled";

// 4.- iconos
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as Hamburger } from '../../../assets/icons/hamburger.svg';

// 4.- hooks
import { useMediaQuery } from '../../../hooks/useMediaQuery';

interface Props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarPage = ({ setIsOpen }: Props): JSX.Element => {
    
    const matches = useMediaQuery('(min-width: 991px)');

    return <Container className={`py-3 d-flex justify-content-${!matches ? 'between' : 'center'}`}>
        {
            !matches ? <Logo className='logo' /> : null
        }

        <div className='d-flex justify-content-center align-items-center'>
            {
                matches
                ?
                    <>
                        <Logo className='logo mr-5' />
                        <OptionsPage />
                    </>
                : null
            }
        </div>

        {
            !matches
            ? <Hamburger
                className='icon mr-3 pointer'
                onClick={() => setIsOpen((v: boolean) => !v)}
            />
            : null
        }
    </Container>
}

export default NavbarPage;