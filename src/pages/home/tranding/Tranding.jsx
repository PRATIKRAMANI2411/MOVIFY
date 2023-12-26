import React, { useState } from 'react'

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from '../../../hooks/useFetch';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';


const Tranding = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`)

    console.log("datadata", data);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    }
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Tranding</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Tranding
