// 1.- librerias
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

// 2.- components
import JoinUsPage from "../components/JoinUsPage";

// 3.- redux
import { setContact } from '../../../redux/reducers/reducerScrollTo';

// 4.- hooks
import { useScrollTo } from "../../../hooks/useScrollTo";

const JoinUs = (): JSX.Element => {

    const dispatch = useDispatch();

    const { n, sectionRef } = useScrollTo();

    useEffect(() => { dispatch(setContact(n)) }, [n]);

    async function onSubmit(model: object): Promise<void> {}

    return <JoinUsPage
        onSubmit={onSubmit}
        sectionRef={sectionRef}
    />;
}

export default JoinUs;