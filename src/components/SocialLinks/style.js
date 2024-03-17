import styled from 'styled-components'

export const ContainerSocial = styled.nav`
    display: flex;
    align-items: center;
    gap: ${(props) => (props.dark ? '0.9rem' : '0.5rem')};
`

export const ButtonLinks = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => (props.dark ? '3.1rem' : '1.5rem')};
    height: ${(props) => (props.dark ? '3.1rem' : '1.5rem')};
    background: transparent;
    border: 1px solid ${(props) => (props.dark ? '#304F47' : '#fff')};
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        border: 1px solid #000;
    }
`
