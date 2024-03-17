import styled from 'styled-components'

export const ContainerLinks = styled.nav`
    display: flex;
    flex-direction: ${(props) => (props.column ? 'column' : 'row')};
    gap: 8px;
`

export const LinkStyle = styled.a`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${(props) => (props.dark ? '16px' : '12px')};
    color: ${(props) => (props.dark ? '#304F47' : '#fff')};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`
