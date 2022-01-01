import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItems from '../menu-items/menu-item.components';
import './directory.styles.scss';

const Directory = ({sections}) => {
    return ( 
        <div className = 'directory-menu' > {
            sections.map(({id, ...restOfSections}) => < MenuItems key = {id} {...restOfSections} /> )
        } 
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);