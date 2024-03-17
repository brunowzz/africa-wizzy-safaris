import * as S from './style'

export default function ContainerSubtitle({ children }) {
    return (
        <S.ContainerSubtitleStyle>
            <S.BoxText>{children}</S.BoxText>
        </S.ContainerSubtitleStyle>
    )
}
