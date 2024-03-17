import BestDestinations from './components/BestDestinations'
import Hero from './components/Hero'
import SelectTravel from './components/SelectTravel'

import * as S from './style'

export default function Home() {
    return (
        <S.ContainerHome>
            <Hero />
            <SelectTravel />
            <BestDestinations />
        </S.ContainerHome>
    )
}
