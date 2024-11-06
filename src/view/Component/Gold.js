import React from 'react'
import { Tooltip } from 'react-tooltip'

function Gold() {
    return (
        <span>
            <img data-tooltip-id="Gold" data-tooltip-content='Gold' src="/images/icons/gold.png" alt="" />
            <Tooltip id="Gold" />
        </span>
    )
}

export default Gold
