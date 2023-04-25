
// 2.- componets
import OptionsPage from './OptionsPage';

// 3.- estilos
import { Menu } from "../styled";

const MenuPage = (): JSX.Element => {

    return <Menu className='d-flex flex-column align-items-center'>
        <OptionsPage />
    </Menu>;
}

export default MenuPage;