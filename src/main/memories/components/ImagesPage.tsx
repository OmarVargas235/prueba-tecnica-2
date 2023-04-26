
// 2.- estilos
import { ContainerImg } from "../styled";

// 3.- assets
import img5 from '../../../assets/images/img5.png';
import img6 from '../../../assets/images/img6.png';
import img7 from '../../../assets/images/img7.png';
import img8 from '../../../assets/images/img8.png';
import img9 from '../../../assets/images/img9.png';
import img10 from '../../../assets/images/img10.png';

const ImagesPage = (): JSX.Element => {

    return <ContainerImg className="row">
        <img src={img8} alt="img8" className="col col-sm-3" />
        <img src={img7} alt="img7" className="col col-sm-4" />
        <img src={img9} alt="img9" className="col img9 col-sm-5" />
        <img src={img6} alt="img6" className="col img6 col-sm-4" />
        <img src={img5} alt="img5" className="col img5 col-sm-4" />
        <img src={img10} alt="img10" className="col col-sm-4" />
    </ContainerImg>;
}

export default ImagesPage;