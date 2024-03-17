import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 21.875rem;
    height: 36.5rem;
    border-radius: 0.5rem;
    border: 1px solid #e1e1e1;
`

export const CardImage = styled.img`
    width: 21.8rem;
    height: 19.3rem;
    object-fit: contain;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 17.2rem;
    padding: 2rem 4rem 2rem 0.87rem;
`

export const CardTitle = styled.h4`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0.0075rem;
    color: #11142d;
`
export const CardText = styled.p`
    margin: 0.81rem 0 0.7rem 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.005rem;
    color: #000;
`

export const CardButton = styled.button`
    width: 7.3rem;
    height: 3.5rem;
    border: none;
    border-radius: 0.5rem;
    background: #c7923e;
    font-size: 1rem;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.005rem;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`
