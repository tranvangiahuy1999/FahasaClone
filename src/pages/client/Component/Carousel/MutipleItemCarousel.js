import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import CardItemVertical from '../Card/CardItemVertical';

export default function MutipleItemCarousel(props) {
    const { listData, textEmpty, settings, ...other } = props;
    return (
        (listData && listData.length > 0) ?
            <Slider {...settings} {...other}>
                {listData.map((item, i) => <Item key={item._id + i} item={item} />)}
            </Slider>
            : <div>{textEmpty}</div>
    )
}

function Item(props) {
    const { item } = props;
    return (
        <CardItemVertical item={item} />
    )
}