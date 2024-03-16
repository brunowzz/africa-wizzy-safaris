import { IconContext } from 'react-icons'

import { IoMdCall, IoMdMail } from 'react-icons/io'
import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaCalendarCheck,
} from 'react-icons/fa6'
import { FaLinkedinIn, FaCarAlt, FaRegCheckCircle } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'
import { MdArrowRight } from 'react-icons/md'

export default function CustomIcon({ icon, color, size }) {
    const iconMapping = {
        call: IoMdCall,
        mail: IoMdMail,
        facebook: FaFacebookF,
        twitter: FaXTwitter,
        linkedin: FaLinkedinIn,
        instagram: FaInstagram,
        car: FaCarAlt,
        check: FaRegCheckCircle,
        calendar: FaCalendarCheck,
        like: AiFillLike,
        arrowRight: MdArrowRight,
    }

    const IconComponent = iconMapping[icon]

    return (
        <IconContext.Provider value={{ color, size }}>
            <IconComponent />
        </IconContext.Provider>
    )
}
