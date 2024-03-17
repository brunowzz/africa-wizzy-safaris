import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { MockDestinations } from '../../../../mocks/MockDestinations'

import { Subtitle } from '../../../../components/Subtitle'

import * as S from './style'

const options = {
    active: true,
    loop: true,
    breakpoints: {
        '(min-width: 1440px)': { active: 4 },
        '(min-width: 1280px)': { active: 3 },
    },
}

export default function BestDestinations() {
    const [destination, setDestination] = useState(MockDestinations)
    const [emblaRef] = useEmblaCarousel({ options })

    return (
        <S.ContainerBestDestinations>
            <Subtitle.ContainerSubtitle>
                <Subtitle.AccentSubtitle>
                    Popular Destinations
                </Subtitle.AccentSubtitle>

                <Subtitle.BoldSubtitle>
                    Select Our Best Popular Destinations
                </Subtitle.BoldSubtitle>
            </Subtitle.ContainerSubtitle>

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {destination.map((item) => (
                        <div className="embla__slide" key={item.id}>
                            <S.CardDestination>
                                <figure>
                                    <S.CardDestinationImage
                                        src={item.img}
                                        alt={`Image from ${item.title}`}
                                    />
                                </figure>

                                <S.CardDestinationTitle>
                                    {item.title}
                                </S.CardDestinationTitle>
                                <S.CardDestinationDescription>
                                    {item.text}
                                </S.CardDestinationDescription>
                            </S.CardDestination>
                        </div>
                    ))}
                </div>
            </div>
        </S.ContainerBestDestinations>
    )
}
