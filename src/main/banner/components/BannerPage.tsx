
// 2.- componets
import { Text } from "../../../layauts/Text";

// 3.- estilos
import { Container, ContainerVideo, DividerVertical, ContainerMessage, ButtonIcon } from "../styled";

// 4.- assets
import video from '../../../assets/videos/video_banner.mp4';
import { ReactComponent as Grupo971 } from '../../../assets/icons/grupo_971.svg';
import { ReactComponent as Comment } from '../../../assets/icons/comment.svg';
import { ReactComponent as Favorite } from '../../../assets/icons/favorite.svg';

const BannerPage = (): JSX.Element => {

    return <Container className="position-relative">
        <ContainerVideo>
            <video muted loop autoPlay className="video">
                <source src={video} type="video/mp4" />
            </video>
        </ContainerVideo>

        <Grupo971 className="position-absolute group971" />

        <DividerVertical className="position-absolute" />

        <ContainerMessage className="position-absolute">
            <Comment />
        </ContainerMessage>
        
        {/* <Button
            edge='start'
            icon={<div className="container-icon-button"></div>}
        >join us</Button> */}

        <ButtonIcon className="d-flex align-items-center position-absolute">
            <div className="container-icon mr-2">
                <Favorite />
            </div>

            <Text className="mr-3" weight="bold">Join us</Text>
        </ButtonIcon>
    </Container>;
}

export default BannerPage;