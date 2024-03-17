import CustomIcon from '../CustomIcon'

import * as S from './style'

export default function InfoContact({ dark, column }) {
    return (
        <S.ContainerLinks column={column}>
            <S.LinkStyle dark={dark}>
                <CustomIcon
                    icon="call"
                    size={20}
                    color={dark ? '#304F47' : '#fff'}
                />
                +250 784 688 641
            </S.LinkStyle>

            <S.LinkStyle
                href="mailto:bbonteemma@gmail.com"
                target="_blank"
                dark={dark}
            >
                <CustomIcon
                    icon="mail"
                    size={20}
                    color={dark ? '#304F47' : '#fff'}
                />
                bbonteemma@gmail.com
            </S.LinkStyle>
        </S.ContainerLinks>
    )
}
