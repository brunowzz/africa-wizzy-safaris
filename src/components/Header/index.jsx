import Logo from '../../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'

import InfoContact from '../InfoContact'
import SocialLinks from '../SocialLinks'

import * as S from './style'

export default function Header() {
    const { pathname } = useLocation()

    return (
        <S.ContainerHeader>
            <S.ContainerSocialLinks>
                <InfoContact />

                <SocialLinks />
            </S.ContainerSocialLinks>

            <S.ContainerNavigationLinks>
                <figure>
                    <Link to="/">
                        <S.Img src={Logo} alt="logo" />
                    </Link>
                </figure>

                <S.NavigationLinks>
                    <Link to="/" className={pathname === '/' ? 'isHere' : ''}>
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className={pathname === '/about' ? 'isHere' : ''}
                    >
                        About
                    </Link>

                    <Link
                        to="/tour-package"
                        className={pathname === '/tour-package' ? 'isHere' : ''}
                    >
                        Tour Package
                    </Link>

                    <Link
                        to="/gallery"
                        className={pathname === '/gallery' ? 'isHere' : ''}
                    >
                        Gallery
                    </Link>

                    <Link
                        to="/contact-us"
                        className={pathname === '/contact-us' ? 'isHere' : ''}
                    >
                        Contact Us
                    </Link>
                </S.NavigationLinks>
            </S.ContainerNavigationLinks>
        </S.ContainerHeader>
    )
}
