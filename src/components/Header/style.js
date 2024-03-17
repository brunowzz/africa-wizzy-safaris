import styled from 'styled-components'

export const ContainerHeader = styled.header`
    height: 10.2rem;
`

export const ContainerSocialLinks = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.1rem;
    padding: 0 6.25rem;
    background: #304f47;
`

export const ContainerNavigationLinks = styled.section`
    display: flex;
    align-items: center;
    gap: 3.5rem;
    height: 7.1rem;
    padding: 0 6.5rem;
`

export const Img = styled.img`
    width: 6rem;
    height: 6rem;
`

export const NavigationLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 120%;
        color: #304f47;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
            opacity: 0.6;
        }
    }

    .isHere {
        text-decoration: underline;
    }
`
