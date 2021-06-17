import { OPEN_REGISTER_VIDEO, CLOSE_REGISTER_VIDEO } from "./actions";

export const onOpenRegisterVideo = () => ({
    type: OPEN_REGISTER_VIDEO
})

export const closeRegisterVideo = () => ({
    type: CLOSE_REGISTER_VIDEO
})