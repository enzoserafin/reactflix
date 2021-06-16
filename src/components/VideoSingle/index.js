import { Container, Iframe, Title } from './styles'

const VideoSingle = () => (
    <Container>
        <Iframe
            width="560"
            height="480"
            src="https://www.youtube-nocookie.com/embed/epII7UIu2vU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
        <Title>Título do vídeo</Title>
    </Container>
)

export default VideoSingle