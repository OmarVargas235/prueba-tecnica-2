
// 2.- componets
import { Text } from "../../../layauts/Text";

// 3.- estilos
import { Container, ContainerVideo, DividerVertical, ContainerMessage, ButtonIcon } from "../styled";

// 4.- assets
import videodesktop from '../../../assets/videos/video_banner.mp4';
import videomovil from '../../../assets/videos/video_banner2.mp4';
import { ReactComponent as Grupo971 } from '../../../assets/icons/grupo_971.svg';
import { ReactComponent as Comment } from '../../../assets/icons/comment.svg';
import { ReactComponent as Favorite } from '../../../assets/icons/favorite.svg';

// 5.- hooks
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const BannerPage = (): JSX.Element => {

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

        <DividerVertical className="position-absolute" />

        {
            matches ? <ContainerMessage className="position-absolute">
                <Comment />
            </ContainerMessage> : null
        }

        <ButtonIcon
            className="d-flex align-items-center position-absolute"
            matches={matches}
        >
            <div className="container-icon mr-2">
                <Favorite />
            </div>

            <Text className="mr-3" weight="bold">Join us</Text>
        </ButtonIcon>
    </Container>;
}

export default BannerPage;