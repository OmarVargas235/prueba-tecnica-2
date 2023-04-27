// 1.- librerias
import { useState } from 'react';

// 2.- components
import BannerPage from "../components/BannerPage";

const Banner = (): JSX.Element => {

    const [changeButton, setChangeButton] = useState<boolean>(false);

    return <BannerPage
        changeButton={changeButton}
        setChangeButton={setChangeButton}
    />;
}

export default Banner;