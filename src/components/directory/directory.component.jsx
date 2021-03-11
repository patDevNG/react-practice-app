import React, {Component} from 'react'
import './directory.styles.scss'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import  MenuItem from '../menu-item/menu-item.components'
import {selectDirectorySelection} from '../../redux/directory/directory.selector'
const Directory =({sections})=>{
  

   
        return (
            <div className='directory-menu'>
                {sections.map(({id, ...otherSectionProps})=>(
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }

    const mapStateToProp = createStructuredSelector({
      sections: selectDirectorySelection
    })

export default connect(mapStateToProp)(Directory);