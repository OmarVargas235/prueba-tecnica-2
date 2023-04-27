// 1.- librerias
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

// 2.- components
import EventsPage from "../components/EventsPage";

// 3.- redux
import { setEvenets } from '../../../redux/reducers/reducerScrollTo';

// 4.- hooks
import { useScrollTo } from "../../../hooks/useScrollTo";

const Events = (): JSX.Element => {

    const dispatch = useDispatch();

    const { n, sectionRef } = useScrollTo();

    useEffect(() => { dispatch(setEvenets(n)) }, [n]);

    return <EventsPage
        sectionRef={sectionRef}
    />;
}

export default Events;