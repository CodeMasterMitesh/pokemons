import React from 'react'

function Modal() {
    return (
        <div style={{position:'relative'}}>
            <div class="main_box">
                <section class="modal_area">
                    <div class="container">
                        <div class="modal_content">
                            <div class="modal_button">
                                <a class="modal_btn" href="#"><img src="/images/modal/successfully-message.png" alt="" /><p>החלצהב העדוה </p></a>
                                <a href="#" class="modal_close">
                                    <img src="/images/menu/popup-close-button.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Modal
