import React, { useEffect, useState } from 'react';
import HorizontalProductCard from '../HorizontalProductCard';
import { convertURL } from '../../../../utils/format-string.util';
import Slider from "react-slick";

export default function MultipleRowsItemCarousel(props) {
    const { listData, textEmpty, settings, ...other } = props;
    const [settingsCarousel, setSettingsCarousel] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    })
    useEffect(() => {
        setSettingsCarousel(settings);
    }, [settings])

    return (
        (listData && listData.length > 0) ?
            <Slider {...settingsCarousel}>
                {listData.map((item, i) => <Item key={item._id + i} item={item} />)}
            </Slider>
            : <div>{textEmpty}</div>
    )
}

function Item(props) {
    const { item } = props;
    return (
        <HorizontalProductCard
            item={item}
        ></HorizontalProductCard>
    )
}