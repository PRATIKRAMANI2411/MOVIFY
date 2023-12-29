import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Tranding from './tranding/Tranding'
import Populer from './populer/Populer'
import TopRated from './topRated/TopRated'

function Home() {
    return (
        <div className='homePage'>
            <HeroBanner />
            <Tranding />
            <Populer />
            <TopRated />
        </div>
    )
}

export default Home
