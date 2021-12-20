import React from 'react';
import './menu-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const MenuItems = ({title, imageUrl, size}) => {
    let navigate = useNavigate();
    return(
        <div onClick = {() => {navigate(`/${title}`)} } className = {`${size} menu-item `} >
            <div  className = 'background-image' style = {{backgroundImage : `url(${imageUrl})`}}  />
            <div className = 'content'>
                <div className = 'title'>
                <h1> {title.toUpperCase() } </h1>
                    <div className = 'subtitle'>
                        <span>SHOP NOW</span>
                    </div>
                            
                </div>

            </div>

        </div>

    )
}

export default MenuItems;