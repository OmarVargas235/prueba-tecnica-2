
// 2.- components
import NavbarPage from "../components/NavbarPage";

interface Props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsOpen }: Props): JSX.Element => {

    return <NavbarPage
        setIsOpen={setIsOpen}
    />;
}

export default Navbar;