import CustomIcon from '../CustomIcon'

import * as S from './style'

export default function SocialLinks({ dark }) {
    return (
        <S.ContainerSocial>
            <a href="#" target="_blank">
                <S.ButtonLinks>
                    <CustomIcon
                        icon="facebook"
                        size={dark ? '22' : '10'}
                        color={dark ? '#304F47' : '#fff'}
                    />
                </S.ButtonLinks>
            </a>

            <a href="#" target="_blank">
                <S.ButtonLinks>
                    <CustomIcon
                        icon="twitter"
                        size={dark ? '22' : '10'}
                        color={dark ? '#304F47' : '#fff'}
                    />
                </S.ButtonLinks>
            </a>

            <a href="#" target="_blank">
                <S.ButtonLinks>
                    <CustomIcon
                        icon="linkedin"
                        size={dark ? '22' : '10'}
                        color={dark ? '#304F47' : '#fff'}
                    />
                </S.ButtonLinks>
            </a>

            <a href="#" target="_blank">
                <S.ButtonLinks>
                    <CustomIcon
                        icon="instagram"
                        size={dark ? '24' : '12'}
                        color={dark ? '#304F47' : '#fff'}
                    />
                </S.ButtonLinks>
            </a>
        </S.ContainerSocial>
    )
}
