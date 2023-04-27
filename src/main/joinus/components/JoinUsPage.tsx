
// 2.- componets
import { Text } from "../../../layauts/Text";
import Form from "../../../layauts/form/Form";
import TextField from "../../../layauts/textField/TextField";
import Button from "../../../layauts/button/Button";

// 3.- estilos
import { Container } from "../styled";

// 4.- assets
import onlineCommunication from '../../../assets/images/online-communication.png';

interface Props {
    onSubmit: (v: object) => Promise<void>;
    sectionRef:  React.MutableRefObject<HTMLDivElement | null>;
}

const JoinUsPage = ({ onSubmit, sectionRef }: Props): JSX.Element => {

    return <Container
        className="mt-5 px-5"
        ref={sectionRef}
    >
        <div className="bg row px-1 px-sm-5 py-4 py-sm-5 d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6 order-1 order-md-0">
                <div className="d-flex">
                    <Text
                        color="#295D8F"
                        size="50px"
                        weight="600"
                    >Join</Text>

                    <Text
                        color="#FF7E54"
                        size="50px"
                        weight="bold"
                        className="ml-2"
                    >us.</Text>
                </div>

                <Text
                    color="#6A8D8B"
                    size="14px"
                    weight="600"
                >Anim ea dolor culpa ea reprehenderit tempor laboris Lorem aliquip proident tempor non esse.</Text>

                <Form
                    onSubmit={onSubmit}
                    handleSubmit={()=>{}}
                    className="my-4"
                >
                    <TextField
                        name="fullname"
                        handleChange={()=>{}}
                        value=''
                        placeholder="Full Name"
                        classesInput="text-center"
                        classes="mb-2"
                    />

                    <TextField
                        name="email"
                        handleChange={()=>{}}
                        value=''
                        placeholder="Email Address"
                        classesInput="text-center"
                        classes="mb-2"
                    />

                    <TextField
                        name="callPhone"
                        handleChange={()=>{}}
                        value=''
                        placeholder="Call Phone Number"
                        classesInput="text-center"
                        classes="mb-2"
                    />

                    <TextField
                        type="textarea"
                        name="message"
                        handleChange={()=>{}}
                        handleChangeTextarea={() => {}}
                        value=''
                        placeholder="Message"
                        classesInput="text-center"
                        classes="mb-2"
                    />

                    <div className="w-100 d-flex justify-content-center mt-4">
                        <Button
                            classes="px-5"
                        >sent</Button>
                    </div>
                </Form>
            </div>

            <div className="col-12 col-md-6 order-md-0 mb-4 mb-md-0">
                <img src={onlineCommunication} alt='onlineCommunication' />
            </div>
        </div>
    </Container>;
}

export default JoinUsPage;