import React from 'react'

import './Tile.css'

const Tile = (props) => {

    const selmatchtrue = (props.selected || props.matched);

    const colour = selmatchtrue ? {
        backgroundColor: props.color
    } : null

    return (
        <div className='Tile' style={colour}>
            {selmatchtrue ? <props.svg/> : null}
        </div>
    )
}

export default Tile
