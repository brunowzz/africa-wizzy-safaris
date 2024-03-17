import styled from 'styled-components'

export const TitleStyle = styled.h1`
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0.012rem;
    color: ${(props) => (props.dark ? '#000' : '#fff')};
`
