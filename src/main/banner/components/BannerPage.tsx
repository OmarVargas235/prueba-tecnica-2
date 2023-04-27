
// 2.- componets
import { Text } from "../../../layauts/Text";

// 3.- estilos
import { Container, ContainerVideo, ContainerMessage, ButtonIcon } from "../styled";
import { Divider } from "../../../layauts/Divider";

// 4.- assets
import videodesktop from '../../../assets/videos/video_banner.mp4';
import videomovil from '../../../assets/videos/video_banner2.mp4';
import { ReactComponent as Grupo971 } from '../../../assets/icons/grupo_971.svg';
import { ReactComponent as Comment } from '../../../assets/icons/comment.svg';
import { ReactComponent as Favorite } from '../../../assets/icons/favorite.svg';

// 5.- hooks
import { useMediaQuery } from '../../../hooks/useMediaQuery';

interface Props {
    changeButton: boolean;
    setChangeButton: (v: boolean) => void;
}

const BannerPage = ({ changeButton, setChangeButton }: Props): JSX.Element => {

    const matches = useMediaQuery('(min-width: 575px)');

    return <Container className="position-relative">
        <ContainerVideo>
            <video muted loop autoPlay className="video" style={{ display: matches ? 'block' : 'none' }}>
                <source src={videodesktop} type="video/mp4" />
            </video>
            
            <video muted loop autoPlay className="video" style={{ display: matches ? 'none' : 'block' }}>
                <source src={videomovil} type="video/mp4" />
            </video>
        </ContainerVideo>
        
        {
            matches ? <Grupo971 className="position-absolute group971" /> : null
        }

        <Divider className="position-absolute" />

        {
            matches ? <ContainerMessage className="position-absolute">
                <Comment />
            </ContainerMessage> : null
        }

        <ButtonIcon
            className="d-flex align-items-center position-absolute pointer"
            matches={matches}
            onClick={() => setChangeButton(!changeButton)}
            color={ changeButton ? '#FF7E54' : '#5AD3DF'}
        >
            <div className="container-icon mr-2">
                <Favorite />
            </div>

            <Text className="mr-3" weight="bold">{changeButton ? 'YAY!' : 'Join us'}</Text>
        </ButtonIcon>
    </Container>;
}

export default BannerPage;