import {
    Container,
    Video,
    VideoTitle,
    VideoThumb,
    PlayStyled
} from './styles'

const VideosList = () => (
    <Container>
        {Array.from({ length: 10 }).map((item, index) => (
            <Video key={index}>
                <VideoTitle>Título do vídeo</VideoTitle>
                <VideoThumb>
                    <PlayStyled />
                </VideoThumb>
            </Video>
        ))}
    </Container>
)

export default VideosList