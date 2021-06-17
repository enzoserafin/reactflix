import { connect } from 'react-redux'
import {
    Container,
    HeaderTitle,
    RegisterButton
} from './styles'
import { onOpenRegisterVideo } from '../../redux-flow/reducers/ui/action-creators'

const Header = ({ onOpenRegisterVideo }) => (
    <Container>
        <HeaderTitle>Reactflix</HeaderTitle>
        <RegisterButton onClick={onOpenRegisterVideo}>Cadastrar vídeo</RegisterButton>
    </Container>
)

const mapDispatchToProps = (dispatch) => ({
    onOpenRegisterVideo: () => dispatch(onOpenRegisterVideo())
})

export default connect(null, mapDispatchToProps)(Header)