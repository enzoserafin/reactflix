import { Container, Iframe, Title } from './styles'

const VideoSingle = ({ id, title }) => (
    <Container>
        <Iframe
            width="560"
            height="480"
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
        <Title>{title}</Title>
    </Container>
)

export default VideoSingle