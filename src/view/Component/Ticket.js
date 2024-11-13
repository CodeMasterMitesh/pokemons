import React from 'react'
import { Tooltip } from 'react-tooltip'

function Ticket() {
    return (
        <span>
            <img data-tooltip-id="Ticket" data-tooltip-content='Ticket' src="/images/icons/ticket.png" alt="" />
            <Tooltip id="Ticket" />
        </span>
    )
}

export default Ticket
