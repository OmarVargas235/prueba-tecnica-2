import { useState } from 'react';

// 2.- components
import MenuPage from "./components/MenuPage";
import NavbarPage from "./container/Navbar";

// 3.- hooks
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Navbar = (): JSX.Element => {

    const matches = useMediaQuery('(max-width: 991px)');

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <div className="position-relative">
        <NavbarPage
            setIsOpen={setIsOpen}
        />

        {
            (isOpen && matches) ? <MenuPage /> : null
        }
    </div>;
}

export default Navbar;