import React from 'react'
import { Tooltip } from 'react-tooltip'

function Silver() {
    return (
        <span>
            <img data-tooltip-id="Silver" data-tooltip-content='Silver' src="/images/icons/silver.png" alt="" />
            <Tooltip id="Silver" />
        </span>
    )
}

export default Silver
