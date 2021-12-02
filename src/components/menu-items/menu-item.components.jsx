import React from 'react';

import './menu-item.styles.scss';

const MenuItems = ({title, imageUrl, size}) => {
    return(
        <div className = {`${size} menu-item `} >
            <div className = 'background-image' style = {{backgroundImage : `url(${imageUrl})`}}  />
            <div className = 'content'>
                <div className = 'title'>
                    <div className = 'subtitle'>
                        <h1> {title.toUpperCase() } </h1>
                        <span>SHOP NOW</span>
                    </div>
                            
                </div>

            </div>

        </div>

    )
}

export default MenuItems;