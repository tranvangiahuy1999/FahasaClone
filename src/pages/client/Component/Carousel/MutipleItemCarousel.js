import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { convertURL } from '../../../../utils/format-string.util';
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function MutipleItemCarousel(props) {
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
        <div className="item">
            <Link
                to={
                    "/chi-tiet/" +
                    convertURL(props.item.name) +
                    "." +
                    props.item._id
                }
                key={item._id}
            >
                <ProductCard
                    img={item.img}
                    productName={props.item.name}
                    productPrice={props.item.price}
                ></ProductCard>
            </Link>

        </div>
    )
}