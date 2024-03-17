import { useState } from 'react'

import { Subtitle } from '../../../../components/Subtitle'
import CardTravel from '../../../../components/CardTravel'

import { MockTravels } from '../../../../mocks/MockTravels'

import * as S from './style'

export default function SelectTravel() {
    const [travel, setTravel] = useState(MockTravels)

    return (
        <S.ContainerTravels>
            <Subtitle.ContainerSubtitle>
                <Subtitle.AccentSubtitle>
                    Choose your Package
                </Subtitle.AccentSubtitle>

                <Subtitle.BoldSubtitle>
                    Select your Best Package for your Travel
                </Subtitle.BoldSubtitle>
            </Subtitle.ContainerSubtitle>

            <S.BoxTravels>
                {travel.map((item) => (
                    <CardTravel
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                    />
                ))}
                {travel.map((item) => (
                    <CardTravel
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </S.BoxTravels>
        </S.ContainerTravels>
    )
}
