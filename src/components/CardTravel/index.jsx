import * as S from './style'

export default function CardTravel({ img, title, text }) {
    return (
        <S.CardContainer>
            <figure>
                <S.CardImage src={img} alt={`Image from ${title}`} />
            </figure>

            <S.CardContent>
                <div>
                    <S.CardTitle>{title}</S.CardTitle>
                    <S.CardText>{text}</S.CardText>
                </div>
                <S.CardButton>Learn More</S.CardButton>
            </S.CardContent>
        </S.CardContainer>
    )
}
