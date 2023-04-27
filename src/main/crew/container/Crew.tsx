// 1.- librerias
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// 2.- components
import CrewPage from '../components/CrewPage';

// 3.- redux
import { setCrew } from '../../../redux/reducers/reducerScrollTo';

// 4.- hooks
import { useScrollTo } from "../../../hooks/useScrollTo";

const Crew = (): JSX.Element => {

    const dispatch = useDispatch();

    const { n, sectionRef } = useScrollTo();

    const [isChagneImg, setIsChagneImg] = useState<boolean>(false);

    useEffect(() => {

        const interval = window.setInterval(() => setIsChagneImg(state => !state), 2000);

        return () => window.clearInterval(interval);

    }, []);

    useEffect(() => { dispatch(setCrew(n)) }, [n]);

    return <CrewPage
        isChagneImg={isChagneImg}
        sectionRef={sectionRef}
    />;
}

export default Crew;