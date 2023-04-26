
// 2.- componets
import { Text } from "../../../layauts/Text";
import Button from "../../../layauts/button/Button";

// 3.- estilos
import { Container, Date } from "../styled";

// 4.- assets
import { ReactComponent as LogoOrange } from '../../../assets/icons/logo_orange.svg';

// 5.- utils
import { contentCards } from "../utils";

const WhatsNewPage = (): JSX.Element => {

    return <Container className="mt-5 p-5">
        <div className="w-100 text-center mb-5">
            <LogoOrange />
            
            <div className="d-flex justify-content-center">
                <Text
                    color="#FF7E54"
                    weight="600"
                    size="45px"
                >{"What's"}</Text>

                <Text
                    className="ml-2"
                    color="white"
                    weight="600"
                    size="45px"
                >new</Text>
            </div>

            <Text
                color="white"
            >Find out about latest about our club</Text>
        </div>

        <div className="row">
            {
                contentCards.map((v, index) => (
                    <div
                        key={index}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-3"
                    >
                        <img
                            src={v.img}
                            alt={v.alt}
                        />

                        <Date
                            className="text-center py-3 px-2 position-absolute"
                        >
                            <Text
                                className="text-uppercase"
                                weight="bold"
                                size="24px"
                                color="white"
                            >{v.day}</Text>
                            
                            <Text
                                className="text-uppercase"
                                weight="bold"
                                size="22px"
                                color="white"
                            >{v.year}</Text>

                            <Text
                                className="text-uppercase"
                                weight="bold"
                                size="20px"
                                color="white"
                            >{v.month}</Text>
                        </Date>

                        <Text
                            className="text1 text-uppercase position-absolute"
                            size="15px"
                            color="white"
                        >{v.name}</Text>

                        <Text
                            className="text2 text-uppercase position-absolute"
                            size="25px"
                            color="white"
                            weight="bold"
                        >{v.title}</Text>

                        <Text
                            className="text3 position-absolute"
                            size="13px"
                            color="white"
                        >{v.text}</Text>

                        <Button
                            color="#5AD3DF"
                            classes="btn position-absolute"
                        >See more</Button>
                    </div>
                ))
            }
        </div>

        <div className="w-100 d-flex justify-content-center">
            <Button>Find out more</Button>
        </div>
    </Container>;
}

export default WhatsNewPage;