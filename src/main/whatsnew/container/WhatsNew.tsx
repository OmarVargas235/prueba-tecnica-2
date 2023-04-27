// 1.- librerias
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

// 2.- components
import WhatsNewPage from "../components/WhatsNewPage";

// 3.- redux
import { setWhatsNew } from '../../../redux/reducers/reducerScrollTo';

// 4.- hooks
import { useScrollTo } from "../../../hooks/useScrollTo";

const WhatsNew = (): JSX.Element => {

    const dispatch = useDispatch();

    const { n, sectionRef } = useScrollTo();

    useEffect(() => { dispatch(setWhatsNew(n)) }, [n]);

    return <WhatsNewPage
        sectionRef={sectionRef}
    />;
}

export default WhatsNew;