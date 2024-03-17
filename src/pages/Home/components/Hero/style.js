import BackgroundImage from '../../../../assets/hero-background.svg'

import styled from 'styled-components'

export const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 10.2rem);
    background: url(${BackgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const BoxText = styled.div`
    width: 44.7rem;
`

export const Subtitle = styled.h2`
    margin-top: 1rem;
    text-align: center;
    font-size: 1.25rem;
    color: #fff;
`
