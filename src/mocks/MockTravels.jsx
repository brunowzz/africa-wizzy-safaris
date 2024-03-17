import { v4 as uuid } from 'uuid'

import AkageraPark from '../assets/akagera-park-image.svg'
import BisokeImage from '../assets/bisoke-image.svg'
import LakeKivu from '../assets/lake-kivu-image.svg'

export const MockTravels = [
    {
        id: uuid(),
        img: `${AkageraPark}`,
        title: 'Akagera National Park',
        text: 'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
    },
    {
        id: uuid(),
        img: `${BisokeImage}`,
        title: 'Bisoke Hike',
        text: 'The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.',
    },
    {
        id: uuid(),
        img: `${LakeKivu}`,
        title: 'Lake Kivu trip',
        text: 'A trip to Lake Kivu can be a truly unique and memorable experience. ',
    },
]
