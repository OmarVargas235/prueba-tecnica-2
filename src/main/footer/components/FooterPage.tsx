
// 2.- componets
import { Text } from "../../../layauts/Text";
import TextField from "../../../layauts/textField/TextField";
import Button from "../../../layauts/button/Button";

// 3.- estilos
import { Container, FooterBlue, ContainerIcon, FooterOrange } from "../styled";

// 4.- assets
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as Letter } from '../../../assets/icons/letter.svg';
import { ReactComponent as Phone } from '../../../assets/icons/phone.svg';
import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';
// import img1 from '../../../assets/images/img1.jpg';

// 5.- hooks

const FooterPage = (): JSX.Element => {

    return <Container className="mt-5">
        <FooterBlue className="row py-4">
            <div className="col-12 col-md-4 text-center">
                <Logo className="logo" />

                <Text
                    color="white"
                    size="14px"
                >Voluptate veniam non pariatur velit Lorem fugiat tempor in.</Text>
            </div>
            
            <div className="order-1 order-md-0 col-12 col-md-4 d-flex flex-column justify-cotent-center align-items-center">
                <div className="d-flex mb-2 mt-4">
                    <Letter />
                    <Text
                        className="ml-2"
                        color="white"
                    >+57 (322) 374 6739</Text>
                </div>

                <div className="d-flex">
                    <Phone />
                    <Text
                        className="ml-2"
                        color="white"
                    >servicio@lurdes.co</Text>
                </div>

                <div className="d-flex mt-3">
                    <ContainerIcon className="mr-3">
                        <Instagram />
                    </ContainerIcon>
                    
                    <ContainerIcon>
                        <Facebook />
                    </ContainerIcon>
                </div>
            </div>
            
            <div className="col-12 col-md-4 d-flex flex-column align-items-center my-4 my-md-0">
                <Text
                    color="white"
                    weight="bold"
                    className="text-center text-uppercase"
                    size="13px"
                >subscribe to our newsletter</Text>

                <TextField
                    name="email"
                    value=''
                    handleChange={()=>{}}
                    placeholder="Your Email"
                    classes="my-3 w-100 w-sm-50 w-md-100"
                />

                <div className="w-100 d-flex justify-content-center">
                    <Button classes="px-5">send</Button>
                </div>
            </div>
        </FooterBlue>

        <FooterOrange className="text-center py-2">
            <Text
                color="white"
                weight="300"
            >Terms & Conditions I Privacity Policy</Text>

            <Text
                color="white"
                weight="300"
            >© Copyright 2020 - 2021 Ingenuity & Solutions LLC All Right Reserved.</Text>
        </FooterOrange>
    </Container>;
}

export default FooterPage;