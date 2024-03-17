import styled from 'styled-components'

export const ContainerBestDestinations = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 0 6.25rem;

    .embla {
        overflow: hidden;
    }

    .embla__container {
        display: flex;
        justify-content: center;
        gap: 2.25rem;
    }

    .embla__slide {
        flex: 0 0 20%;
        min-width: 0;
    }

    @media (max-width: 1440px) {
        .embla__slide {
            flex: 0 0 30%;
            min-width: 0;
        }
    }
`

export const CardDestination = styled.div`
    width: 18.75rem;
`

export const CardDestinationImage = styled.img`
    width: 100%;
    height: 18.75rem;
`

export const CardDestinationTitle = styled.h4`
    margin: 2.56rem 0 1rem 0;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0.01219rem;
    color: #000;
`

export const CardDestinationDescription = styled.p`
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.005rem;
    color: #9a9ab0;
`
