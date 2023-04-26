
// 2.- componets
import { Text } from "../../../layauts/Text";
import Button from "../../../layauts/button/Button";
import ImagesPage from "./ImagesPage";

// 3.- estilos
import { Container } from "../styled";

// 4.- assets
import { ReactComponent as LogoOrange } from '../../../assets/icons/logo_orange.svg';

const MemoriesPage = (): JSX.Element => {

    return <Container className="pt-5 pb-2 px-5">
        <div className="w-100 text-center mb-5">
            <LogoOrange />

            <Text
                color="#204D83"
                weight="bold"
                size="40px"
            >Memories</Text>
        </div>

        <ImagesPage />

        <div className="w-100 d-flex justify-content-center my-4">
            <Button color="#5AD3DF" classes="btn">more events</Button>
        </div>
    </Container>;
}

export default MemoriesPage;