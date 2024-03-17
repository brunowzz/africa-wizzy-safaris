import { v4 as uuid } from 'uuid'

import Kigali from '../assets/kigali-image.svg'
import Huye from '../assets/huye-image.svg'
import Rubavu from '../assets/rubavu-image.svg'
import Musanze from '../assets/musanze-image.svg'

export const MockDestinations = [
    {
        id: uuid(),
        img: `${Kigali}`,
        title: 'Kigali',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
    },
    {
        id: uuid(),
        img: `${Huye}`,
        title: 'Huye',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
    },
    {
        id: uuid(),
        img: `${Rubavu}`,
        title: 'Rubavu',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
    },
    {
        id: uuid(),
        img: `${Musanze}`,
        title: 'Musanze',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
    },
]
