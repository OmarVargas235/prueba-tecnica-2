
// 2.- componets
import { Text } from "../../../layauts/Text";

// 3.- estilos
import { Container, ContainerPlayer, ImgPlayer } from "../styled";

// 4.- assets
import newmanSountrack from '../../../assets/images/newman_sountrack.png';
import album from '../../../assets/images/album.jpg';
import { ReactComponent as PlayButton } from '../../../assets/icons/play-button.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { ReactComponent as Spotify } from '../../../assets/icons/spotify.svg';
import { ReactComponent as SharingShare } from '../../../assets/icons/sharing_share.svg';

// 5.- hooks
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const SountrackPage = (): JSX.Element => {

    const matches = useMediaQuery('(min-width: 991px)');

    return <Container className="pt-5 pt-lg-0 pr-2 pr-lg-5 d-flex flex-column flex-lg-row align-items-center position-relative">
        {
            matches ?  <div className="bg"></div> : null
        }

        <div className="position-relative col-12 col-lg-8 order-1 order-lg-0">
            <img src={newmanSountrack} alt="newmanSountrack" className="img" />
            
            <Text
                className="position-absolute text1 text-center"
                color="white"
                size="40px"
                weight="bold"
            >Newman</Text>

            <Text
                className="position-absolute text2 text-center ml-5"
                color="white"
                size="40px"
                weight="bold"
            >Sountrack</Text>
        </div>
        
        <ContainerPlayer className="p-0 col-12 col-lg-4 d-flex flex-column justify-content-center mt-5">
            <div className="header row">
                <div className="col col-4 position-relative d-flex align-items-center">
                    <ImgPlayer src={album} alt="album" />
                    <PlayButton className="position-absolute playbutton" />
                </div>

                <div className="col col-6 pl-2 d-flex flex-column justify-content-center">
                    <div>
                        <Text
                            color="white"
                            weight="bold"
                            size="14px"
                        >Newman Sountrack</Text>

                        <Text
                            color="#ABA7C3"
                            size="14px"
                        >Newman Cathol...</Text>
                    </div>

                    <div className="d-flex align-items-center">
                        <Arrow />
                        <div className="bar mx-1"></div>
                        <Arrow className="arrow-right" />
                    </div>
                </div>

                <div className="col-2 d-flex flex-column justify-content-center">
                    <Spotify className="mb-4 icon" />
                    <SharingShare className="icon" />
                </div>
            </div>

            <div className="body">
                {
                    [
                        { n: 3, title: 'This is Amazing grace', subtitle: 'Phil Wickman', min: '4', second: '39' },
                        { n: 5, title: 'This is Amazing grace', subtitle: 'Phil Wickman', min: '4', second: '39' },
                        { n: 6, title: 'This is Amazing grace', subtitle: 'Phil Wickman', min: '4', second: '39' },
                        { n: 6, title: 'This is Amazing grace', subtitle: 'Phil Wickman', min: '4', second: '39' },
                    ].map((v, index) => (
                        <div
                            key={index}
                            className="row container-music pointer py-1"
                        >
                            <div className="col-2">
                                <Text>{v.n}</Text>
                            </div>

                            <div className="col-7">
                                <Text color="white">{v.title}</Text>
                                <Text>{v.subtitle}</Text>
                            </div>

                            <div className="col-3 d-flex">
                                <Text>{v.min}</Text>
                                <Text>:</Text>
                                <Text>{v.second}</Text>
                            </div>
                        </div>
                    ))
                }
            </div>
        </ContainerPlayer>
    </Container>;
}

export default SountrackPage;