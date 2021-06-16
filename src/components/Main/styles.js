import styled from 'styled-components'

const headerHeigth = '60px'
const footerHeigth = '30px'

export const Container = styled.main`
    min-height: calc(100% - ${headerHeigth} - ${footerHeigth});
`

