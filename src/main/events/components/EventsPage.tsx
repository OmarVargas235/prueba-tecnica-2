
// 2.- componets
import { Text } from "../../../layauts/Text";

// 3.- estilos
import { Container, Card } from "../styled";

// 4.- assets
import { ReactComponent as LogoOrange } from '../../../assets/icons/logo_orange.svg';
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';
import Button from "../../../layauts/button/Button";

// 5.- hooks

const EventsPage = (): JSX.Element => {

    return <Container className="mt-5 px-5">
        <div className="w-100 text-center mb-5">
            <LogoOrange />
            <Text
                color="#204D83"
                weight="bold"
                size="40px"
            >Events</Text>
        </div>

        <div className="row">
            {
                [
                    { img: img1, alt: 'img1', title: 'event 1', day: '12', month: 'jun' },
                    { img: img2, alt: 'img2', title: 'event 2', day: '13', month: 'dic' },
                    { img: img3, alt: 'img3', title: 'event 3', day: '16', month: 'dic' },
                    { img: img4, alt: 'img4', title: 'event 4', day: '24', month: 'dic' },
                ].map((v, index) => (
                    <Card
                        key={index}
                        className="col-12 col-sm-4 col-lg-3 d-flex justify-content-center pb-4"
                    >
                        <img
                            src={v.img}
                            alt={v.alt}
                        />

                        <Text
                            className="text1 position-absolute text-uppercase"
                            weight="bold"
                            size="25px"
                            color="white"
                        >{v.title}</Text>

                        <Text
                            className="text2 position-absolute text-uppercase"
                            weight="bold"
                            size="40px"
                            color="#FF7E54"
                        >{v.day}</Text>
                        
                        <Text
                            className="text3 position-absolute text-uppercase"
                            weight="bold"
                            size="40px"
                            color="#FF7E54"
                        >{v.month}</Text>
                    </Card>
                ))
            }
        </div>

        <div className="w-100 d-flex flex-column jsutify-cotent-center align-items-center mt-2 mt-sm-2">
            <div className="my-3 order-1 order-sm-0">
                <Button color="#FF7E54">more events</Button>
            </div>

            <Text
                className="text-center"
            >{"Let's have fun, join us in our events. Find out more here"}</Text>
        </div>
    </Container>;
}

export default EventsPage;