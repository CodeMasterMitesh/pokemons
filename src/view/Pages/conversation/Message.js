import React from 'react'

function Message() {
    return (
        <div>
            <h1 className='text-center'>Message</h1>
            <div>{Array.from({ length: 5 }).map(() => {
                return <div className="ar_single_item_table_work hard w-100" style={{ marginBlock: '5px' }}>
                    <div className="p-4 d-flex justify-content-between w-100">
                        <div>
                            <h5 className='m-0'>Message</h5>
                        </div>
                        <div>
                            <b>08/25/2019</b>
                        </div>
                    </div>

                </div>
            })}
            </div>
        </div>
    )
}

export default Message
