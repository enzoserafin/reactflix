import { Container } from './styles'
import RegisterVideo from '../RegisterVideo'
import VideoSingle from '../VideoSingle'
import VideosList from '../VideosList'

const Main = () => (
    <Container>
        <RegisterVideo />
        <VideoSingle />
        <VideosList />
    </Container>
)

export default Main