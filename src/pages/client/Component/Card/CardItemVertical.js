import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


export default function CardItemVertical(props) {
    const { item, showDescription,className, ...other } = props;

    return (
        item.href ?
            <Link to={item.href} title={item.img.alt} className = {(className ? className : "") + " list-card-item"} data-toggle="tooltip" {...other}>
                <div className="card">
                    <div className="card-img-wrapper">
                        <div className="card-img-top" style={{ backgroundImage: "url(" + item.img.src + ")" }} alt={item.img.alt} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        {showDescription ? <p className="card-description" dangerouslySetInnerHTML={{ __html: props.item.description }}></p> : <></>}
                        <p className="card-price" >{item.price}</p>
                    </div>
                </div>
            </Link>
            :
            <div className="card">
                <div className="card-img-wrapper">
                    <div className="card-img-top" style={{ backgroundImage: "url(" + item.img.src + ")" }} alt={item.img.alt} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {showDescription ? <p className="card-description" dangerouslySetInnerHTML={{ __html: props.item.description }}></p> : <></>}
                    <p className="card-price" > {item.price}</p>
                </div>
            </div>
    );
}