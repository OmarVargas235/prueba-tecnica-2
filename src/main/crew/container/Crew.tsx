// 1.- librerias
import { useEffect, useState } from 'react';

// 2.- components
import CrewPage from '../components/CrewPage';

const Crew = (): JSX.Element => {

    const [isChagneImg, setIsChagneImg] = useState<boolean>(false);

    useEffect(() => {

        const interval = window.setInterval(() => setIsChagneImg(state => !state), 2000);

        return () => window.clearInterval(interval);

    }, []);

    return <CrewPage
        isChagneImg={isChagneImg}
    />;
}

export default Crew;