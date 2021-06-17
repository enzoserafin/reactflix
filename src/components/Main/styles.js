import styled from 'styled-components'
import { headerHeigth, footerHeigth } from '../../utils/constants'

export const Container = styled.main`
    min-height: calc(100% - ${headerHeigth} - ${footerHeigth});
`

