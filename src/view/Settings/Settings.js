import React from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Col, Form, Row } from 'react-bootstrap';

function Settings() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { t } = useTranslation()

    const onSubmit = async (data) => {

    };
    return (
        <div>
            <GoldSiverHeader previous={'/home'} title='Settings'>
                <section className="ar_myProfile_area_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ar_myProfile_area">
                                    <div className="ar_myProfile_itam_wrapper">
                                        <Row className='justify-content-start'>
                                            <Col md={6} className='p-4'>
                                                <Row>
                                                    <Col md={12} className='p-4'>
                                                        <div className="ar_myProfile_single_item">
                                                            <div className="ar_myProfile_sinle_title">
                                                                <a href="#" className='settings-anchor'><img src="/images/myAccount/shap.png" alt="" />Personal data</a>
                                                            </div>
                                                            <div className="ar_myProfile_swithc_area">
                                                                <div className="ar_myProfile_sinlge_switch_area">
                                                                    <div className="ar_myProfile_sinlge_text">
                                                                        <p> Show team in profile:</p>
                                                                    </div>
                                                                    <div className="ar_myProfile_sinlge_switch">
                                                                        <label className='toggle-label'>
                                                                            <input type='checkbox' />
                                                                            <span className='back'>
                                                                                <span className='toggle'></span>
                                                                                <span className='label on'>Yes</span>
                                                                                <span className='label off'>No</span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="ar_myProfile_sinlge_switch_area">
                                                                    <div className="ar_myProfile_sinlge_text">
                                                                        <p>Show badges on profile</p>
                                                                    </div>
                                                                    <div className="ar_myProfile_sinlge_switch">
                                                                        <label className='toggle-label'>
                                                                            <input type='checkbox' />
                                                                            <span className='back'>
                                                                                <span className='toggle'></span>
                                                                                <span className='label on'>Yes</span>
                                                                                <span className='label off'>No</span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="ar_myProfile_sinlge_switch_area">
                                                                    <div className="ar_myProfile_sinlge_text">
                                                                        <p>Chat:</p>
                                                                    </div>
                                                                    <div className="ar_myProfile_sinlge_switch">
                                                                        <label className='toggle-label'>
                                                                            <input type='checkbox' />
                                                                            <span className='back'>
                                                                                <span className='toggle'></span>
                                                                                <span className='label on'>Yes</span>
                                                                                <span className='label off'>No</span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="ar_myProfile_sinlge_switch_area">
                                                                    <div className="ar_myProfile_sinlge_text">
                                                                        <p>Accept duels:</p>
                                                                    </div>
                                                                    <div className="ar_myProfile_sinlge_switch">
                                                                        <label className='toggle-label'>
                                                                            <input type='checkbox' />
                                                                            <span className='back'>
                                                                                <span className='toggle'></span>
                                                                                <span className='label on'>Yes</span>
                                                                                <span className='label off'>No</span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="ar_myProfile_sinlge_switch_area">
                                                                    <div className="ar_myProfile_sinlge_text">
                                                                        <p>Displays the status of Pokémon in the profile:</p>
                                                                    </div>
                                                                    <div className="ar_myProfile_sinlge_switch">
                                                                        <label className='toggle-label'>
                                                                            <input type='checkbox' />
                                                                            <span className='back'>
                                                                                <span className='toggle'></span>
                                                                                <span className='label on'>Yes</span>
                                                                                <span className='label off'>No</span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ar_myProfile_range_area">
                                                                <div className="ar_myProfile_range_text">
                                                                    <p>Volume:</p>
                                                                    <p>30%</p>
                                                                </div>
                                                                <div className="ar_myProfile_range">
                                                                    {/* <label for="customRange1" className="form-label">Example range</label> */}
                                                                    <input type="range" className="form-range" id="customRange1" />
                                                                </div>
                                                            </div>
                                                            <div className="ar_myProfile_btn">
                                                                <a href="#" className='settings-anchor'><img src="/images/myAccount/accBtn.png" alt="" /></a>
                                                                <div className="ar_myProfile_btn_text">
                                                                    <p>Edit </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={12} className='p-4'>

                                                        <div className="ar_myProfile_single_item change-password h-100">
                                                            <div className="ar_myProfile_sinle_title">
                                                                <a href="#" className='settings-anchor'><img src="/images/myAccount/shap.png" alt="" />Change Password</a>
                                                            </div>
                                                            <div className='validation-box'>
                                                                <div className="position-relative m-0">
                                                                    <input type="text"
                                                                        className="form-control"
                                                                        id="name"
                                                                        placeholder={t('Old Password')}
                                                                        {...register("old_password", { required: true })} />
                                                                    <img src="/images/register-02.png" alt="" />
                                                                </div>
                                                                {errors.old_password && <div className='error-text m-2'>{t('This field is required')}</div>}
                                                            </div>

                                                            <div className='validation-box'>
                                                                <div className="position-relative m-0">
                                                                    <input type="password"
                                                                        className="form-control"
                                                                        id="password"
                                                                        placeholder={t('New Password')}
                                                                        {...register("new_password", { required: true })} />
                                                                    <img src="/images/register-02.png" alt="" />
                                                                </div>
                                                                {errors.new_password && <div className='error-text m-2'>{t('This field is required')}</div>}
                                                            </div>
                                                            <div className='validation-box'>
                                                                <div className="position-relative m-0">
                                                                    <input type="password"
                                                                        className="form-control"
                                                                        id="password"
                                                                        placeholder={t('Confirm Password')}
                                                                        {...register("confirm_password", { required: true })} />
                                                                    <img src="/images/register-02.png" alt="" />
                                                                </div>
                                                                {errors.confirm_password && <div className='error-text m-2'>{t('This field is required')}</div>}
                                                            </div>
                                                            <div className="ar_myProfile_btn">
                                                                <a href="#" className='settings-anchor'><img src="/images/myAccount/accBtn.png" alt="" /></a>
                                                                <div className="ar_myProfile_btn_text" >
                                                                    <p className='m-0' style={{ fontSize: '11px', top: '20px' }} onClick={handleSubmit(onSubmit)}>Change Password </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md={6} className='p-4'>
                                                <Row>
                                                    <Col md={12} className='p-4'>

                                                        <div className="ar_myProfile_single_item">
                                                            <div className="ar_myProfile_sinle_title">
                                                                <a href="#" className='settings-anchor'><img src="/images/myAccount/shap.png" alt="" />Account Sharing</a>
                                                            </div>

                                                            <div className="ar_myProfile_select_area">
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>None</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>

                                                            <div className="ar_myProfile_btn">
                                                                <a href="#" className='settings-anchor'><img src="/images/myAccount/accBtn.png" alt="" /></a>
                                                                <div className="ar_myProfile_btn_text">
                                                                    <p>To Add </p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Col>
                                                    <Col md={12} className='p-4'>

                                                        <div className="ar_myProfile_single_item change-password h-100">
                                                            <div className="ar_myProfile_sinle_title">
                                                                <a href="#" className='settings-anchor'><img src="/images/myAccount/shap.png" alt="" />Update Email</a>
                                                            </div>
                                                            <div className='validation-box'>
                                                                <div className="position-relative m-0">
                                                                    <input type="text"
                                                                        className="form-control"
                                                                        id="name"
                                                                        placeholder={t('Old Password')}
                                                                        {...register("old_password", { required: true })} />
                                                                    <img src="/images/register-02.png" alt="" />
                                                                </div>
                                                                {errors.old_password && <div className='error-text m-2'>{t('This field is required')}</div>}
                                                            </div>

                                                            <div className='validation-box'>
                                                                <div className="position-relative m-0">
                                                                    <input type="password"
                                                                        className="form-control"
                                                                        id="password"
                                                                        placeholder={t('New Password')}
                                                                        {...register("new_password", { required: true })} />
                                                                    <img src="/images/register-02.png" alt="" />
                                                                </div>
                                                                {errors.new_password && <div className='error-text m-2'>{t('This field is required')}</div>}
                                                            </div>
                                                            <div className='validation-box'>
                                                                <div className="position-relative m-0">
                                                                    <input type="password"
                                                                        className="form-control"
                                                                        id="password"
                                                                        placeholder={t('Confirm Password')}
                                                                        {...register("confirm_password", { required: true })} />
                                                                    <img src="/images/register-02.png" alt="" />
                                                                </div>
                                                                {errors.confirm_password && <div className='error-text m-2'>{t('This field is required')}</div>}
                                                            </div>
                                                            <div className="ar_myProfile_btn">
                                                                <a href="#" className='settings-anchor'><img src="/images/myAccount/accBtn.png" alt="" /></a>
                                                                <div className="ar_myProfile_btn_text" >
                                                                    <p className='m-0' style={{ fontSize: '11px', top: '20px' }} onClick={handleSubmit(onSubmit)}>Change Password </p>
                                                                </div>
                                                            </div>
                                                        </div></Col>
                                                    <Col md={12} className='p-4'>

                                                        <div className="ar_myProfile_single_item lavel-radio h-100">
                                                            <div className="ar_myProfile_sinle_title">
                                                                <a href="#" className='settings-anchor'><img src="/images/myAccount/shap.png" alt="" />Choose Level</a>
                                                            </div>
                                                            <div className='d-flex justify-content-center flex-column align-items-center gap-3'>
                                                                <div className='d-flex'>
                                                                    <Form.Check type='radio' name='level' /> <span style={{ marginLeft: '10px' }}><h4>05 - 20</h4> </span>
                                                                </div>
                                                                <div className='d-flex'>
                                                                    <Form.Check type='radio' name='level' /> <span style={{ marginLeft: '10px' }}><h4>20 - 40</h4> </span>
                                                                </div>
                                                                <div className='d-flex'>
                                                                    <Form.Check type='radio' name='level' /> <span style={{ marginLeft: '10px' }}><h4>40 - 60</h4> </span>
                                                                </div>
                                                                <div className='d-flex'>
                                                                    <Form.Check type='radio' name='level' /> <span style={{ marginLeft: '10px' }}><h4>60 - 80</h4> </span>
                                                                </div>
                                                            </div>
                                                            <div className="ar_myProfile_btn">
                                                                <a href="#" className='settings-anchor'><img src="/images/myAccount/accBtn.png" alt="" /></a>
                                                                <div className="ar_myProfile_btn_text" >
                                                                    <p className='m-0' style={{ fontSize: '11px', top: '20px' }}>Change Level </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>

                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </GoldSiverHeader>
        </div>
    )
}

export default Settings
