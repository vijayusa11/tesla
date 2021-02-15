import React from 'react'
import Button from './Button'
import './Item.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';

function Item({ title, desc, descLink, backgroungImage, leftBtnText, leftBtnLink, rightBtnText, rightBtnLink, twoButtons, first }) {
    return (
        <div className='item' style={{
                backgroundImage: `url(${backgroungImage})`
        }}>
            <div className='item__container'>
                <div className='item__text'>
                    <p>{title}</p>
                    <div className='item__textdesc'>
                        <p>{desc}</p>
                    </div>
                    <div className='item__lowerthird'>
                        <div className='item__buttons'>
                            <Button imp='primary' text={leftBtnText} link={leftBtnLink}/>
                            {twoButtons && <Button imp='secondary' text={rightBtnText} link={rightBtnLink}/>}
                        </div>
                            {first && (
                                <div className='item__expand'>
                                    <ExpandMoreIcon fontSize='large'/>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
