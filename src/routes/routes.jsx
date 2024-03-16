import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'

import DefaultLayout from '../layout/DefaultLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import TourPackage from '../pages/TourPackage'
import Gallery from '../pages/Gallery'
import ContactUs from '../pages/ContactUs'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tour-package" element={<TourPackage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
        </Route>
    )
)
