
// 2.- components
import JoinUsPage from "../components/JoinUsPage";

const JoinUs = (): JSX.Element => {

    async function onSubmit(model: object): Promise<void> {
        
    }

    return <JoinUsPage
        onSubmit={onSubmit}
    />;
}

export default JoinUs;