import React from "react"
import "./MultiCard.css"
import Button from '@mui/material/Button';

function MultiCard({title,image,body,linkTo}){
    const handleClick = () => {
        window.location.href = linkTo;
      };
    return(
        <div
            className="multi-card-container">
            <div className="multi-image-container">
                <img src={image} alt=""/>
            </div>

            <div className="multi-card-content">
                <div className="multi-card-title">
                    <h1>{title}</h1>
                </div>
                <div className="multi-card-body">
                    <p>{body}</p>
                </div>
            </div>
            <div className="multi-card-button">
                <Button variant="contained" color="warning" onClick={handleClick}> 
                    Ver artículo 
                </Button>
            </div>
        </div>
    )
}

function MultiCardNoButton({title,image,body}){
    return(
        <div
            className="multi-card-container">
            <div className="multi-image-container">
                <img src={image} alt=""/>
            </div>

            <div className="multi-card-content">
                <div className="multi-card-title">
                    <h1>{title}</h1>
                </div>
                <div className="multi-card-body">
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}



export  {MultiCard,MultiCardNoButton};