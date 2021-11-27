import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function CardItemVertical(props) {
    const classes = useStyles();

    return (
        <>
            <a href={props.item.href} className={"" + props.className} title={props.item.img.alt} data-toggle="tooltip">
                <div className={"card"}>
                    <div className="card-img-wrapper"> 
                        <div className="card-img-top" style={{ backgroundImage: "url(" + props.item.img.src + ")" }} alt={props.item.img.alt} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.item.title}</h5>
                        {props.showDescription? <p className="card-description" dangerouslySetInnerHTML={{ __html: props.item.description }}></p> : <></>}                        
                        <p className="card-price" > {props.item.price}</p>
                    </div>
                </div>
            </a>
        </>
    );
}