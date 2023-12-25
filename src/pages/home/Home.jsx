import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Tranding from './tranding/Tranding'

function Home() {
    return (
        <div className='homePage'>
            <HeroBanner />
            <Tranding/>
        </div>
    )
}

export default Home
