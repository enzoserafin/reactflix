import { connect } from 'react-redux'

import { Container } from './styles'
import RegisterVideo from '../RegisterVideo'
import VideoSingle from '../VideoSingle'
import VideosList from '../VideosList'

const Main = ({ isRegisterVideoFormOpened, videoSingleId, videos }) => (
    <Container>
        {isRegisterVideoFormOpened && <RegisterVideo />}
        {videoSingleId && <VideoSingle id={videoSingleId} title={videos[videoSingleId].title} />}
        <VideosList />
    </Container>
)

const mapStateToProps = (state) => ({
    isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened,
    videoSingleId: state.videoSingle,
    videos: state.videos
})

export default connect(mapStateToProps)(Main)