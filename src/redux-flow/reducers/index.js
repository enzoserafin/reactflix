import { combineReducers } from 'redux'
import ui from './ui'
import videos from './videos'
import videoSingle from './videoSingle'

export default combineReducers({
    ui,
    videos,
    videoSingle
})