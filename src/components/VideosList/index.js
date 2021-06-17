import { connect } from 'react-redux'
import {
    Container,
    Video,
    VideoLink,
    VideoTitle,
    VideoThumb,
    PlayStyled
} from './styles'
import { selectVideoSingle } from '../../redux-flow/reducers/videoSingle/action-creators'

const VideosList = ({ videos, handleClick }) => (
    <Container>
        {Object.keys(videos).map((id) => (
            <Video key={id}>
                <VideoLink href='#' onClick={handleClick(id)}>
                    <VideoTitle>{videos[id].title}</VideoTitle>
                    <VideoThumb>
                        <PlayStyled />
                    </VideoThumb>
                </VideoLink>
            </Video>
        ))}
    </Container>
)

const mapStateToProps = (state) => ({
    videos: state.videos
})

const mapDispatchToProps = (dispatch) => ({
    handleClick: (id) => (e) => {
        e.preventDefault()
        dispatch(selectVideoSingle(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(VideosList)