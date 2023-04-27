
// 2.- componets
import { Text } from "../../../layauts/Text";
import { Divider } from "../../../layauts/Divider";
import Button from "../../../layauts/button/Button";

// 3.- estilos
import { Container, Card } from "../styled";

// 4.- assets
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';
import { ReactComponent as Group } from '../../../assets/icons/group_FILL0.svg';
import { ReactComponent as GroupPerson } from '../../../assets/icons/group_person.svg';
import { ReactComponent as Sentiment } from '../../../assets/icons/sentiment.svg';

// 5.- hooks
import { useMediaQuery } from '../../../hooks/useMediaQuery';

interface Props {
    isChagneImg: boolean;
    sectionRef:  React.MutableRefObject<HTMLDivElement | null>;
}

const CrewPage = ({ isChagneImg, sectionRef }: Props): JSX.Element => {

    const matches = useMediaQuery('(min-width: 992px)');

    return <Container
        className="my-5 p-5"
        ref={sectionRef}
    >
        <Card className="row p-3 p-lg-5">
            <div className="col-12 col-lg-7">
                <div className="d-flex">
                    <Text
                        color="#002D63"
                        weight="500"
                        className="mr-2"
                        size="50px"
                    >The</Text>

                    <Text
                        color="#FF7E54"
                        weight="500"
                        size="50px"
                    >crew.</Text>
                </div>

                <Text
                    className="mb-3 text"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quod, maiores a, iusto ipsa tempora deserunt quae voluptates libero voluptas, ipsam molestiae recusandae itaque distinctio eius quaerat officiis tenetur provident.</Text>

                <Text className="mb-4 text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta a beatae officiis minus, magnam exercitationem perferendis enim fugiat nihil laboriosam, et neque quasi, sed voluptatum saepe? Sunt, vitae quisquam.</Text>
            
                <div className="w-100 d-flex justify-content-center">
                    <Button
                        color="#FF7E54"
                    >learn more</Button>
                </div>
            </div>

            {
                matches ? <div className="col-lg-5 d-lg-flex align-items-center">
                    {
                        isChagneImg
                        ? <img src={img4} alt="img4" />
                        : <img src={img3} alt="img3" />
                    }
                </div> : null
            }

            <div className='divider2'></div>
        </Card>

        <div className="w-100 d-flex justify-content-center mt-4 mt-lg-0">
            <div className="row container-card w-md-75 w-lg-50">
                {
                    [
                        { icon: <Sentiment />, text1: "165", text2: "Happy freshman members" },
                        { icon: <Group />, text1: "13", text2: "Wise Senior members" },
                        { icon: <GroupPerson />, text1: "173", text2: "The whole crew" },
                    ].map((v, index) => (
                        <div
                            key={index}
                            className="d-flex justify-content-center align-items-center col-12 col-sm-4 card p-4"
                        >
                            { v.icon }

                            <Text
                                color="#FF7E54"
                                weight="bold"
                                size="40px"
                            >{v.text1}</Text>

                            <Text
                                color="#204D83"
                                size="18px"
                            >{v.text2}</Text>

                            <div className={index === 2 ? "" : "divider"}></div>
                        </div>
                    ))
                }
            </div>
        </div>

        {
            !matches ? <div className="col-12 d-flex justify-content-center align-items-center mt-4">
                {
                    isChagneImg
                    ? <img src={img4} alt="img4" />
                    : <img src={img3} alt="img3" />
                }
            </div> : null
        }

        <Divider className="position-absolute divider" />
    </Container>;
}

export default CrewPage;