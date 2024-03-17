import * as S from './style'

export default function Title({ children, dark }) {
    return <S.TitleStyle dark={dark}>{children}</S.TitleStyle>
}
