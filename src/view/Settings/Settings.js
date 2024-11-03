import React, { useEffect, useState } from 'react'
import GoldSiverHeader from '../HomePage/GoldSiverHeader'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../store/auth';
import { changePersonalData, updateEmail, updatePassword } from '../../store/settings';

function Settings() {
    const { register, handleSubmit, formState: { errors } } = useForm();

  const { register: registerForm2, handleSubmit: handleSubmitForm2, formState: { errors: errorsForm2 } } = useForm();
  const onSubmitForm2 = (data) => {
    dispatch(updateEmail(data))
  };
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const profile_data = useSelector(state => state.auth.user_data)
    console.log(profile_data);

    const [personalData, setPersonalData] = useState({
        teamzien: 0,
        chat: 0,
        badgeszien: 0,
        dueluitnodiging: 0,
        exibepokes: 0,
        volume: 0
    })

    const onSubmit = async (data) => {
        dispatch(updatePassword(data))

    };
    const onPersonalDataSubmit = () => {
        dispatch(changePersonalData(personalData))

    }
    useEffect(() => {
        setPersonalData(
            {
                teamzien: parseInt(profile_data.teamzien),
                chat: parseInt(profile_data.chat),
                badgeszien: parseInt(profile_data.badgeszien),
                dueluitnodiging: parseInt(profile_data.dueluitnodiging),
                exibepokes: 1,
                volume: parseInt(profile_data.volume)
            }
        )
        
    }, [profile_data])
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
                                                                            <input type='checkbox' checked={personalData.teamzien ? true : false} />
                                                                            <span className='back'>
                                                                                <span className='toggle'></span>
                                                                                <span className='label on' onClick={() => setPersonalData({ ...personalData, teamzien: 0 })}>No</span>
                                                                                <span className='label off' onClick={() => setPersonalData({ ...personalData, teamzien: 1 })}>Yes</span>
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
                                                                            <input type='checkbox' checked={personalData.badgeszien ? true : false} />
                                                                            <span className='back'>
                                                                                <span className='toggle'></span>
                                                                                <span className='label on' onClick={() => setPersonalData({ ...personalData, badgeszien: 0 })}>No</span>
                                                                                <span className='label off' onClick={() => setPersonalData({ ...personalData, badgeszien: 1 })}>Yes</span>
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
                                                                            <input type='checkbox' checked={personalData.chat ? true : false} />
                                                                            <span className='back'>
                                                                                <span className='toggle'></span>
                                                                                <span className='label on' onClick={() => setPersonalData({ ...personalData, chat: 0 })}>No</span>
                                                                                <span className='label off' onClick={() => setPersonalData({ ...personalData, chat: 1 })}>Yes</span>
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
                                                                            <input type='checkbox' checked={personalData.dueluitnodiging ? true : false} />
                                                                            <span className='back'>
                                                                                <span className='toggle'></span>
                                                                                <span className='label on' onClick={() => setPersonalData({ ...personalData, dueluitnodiging: 0 })}>No</span>
                                                                                <span className='label off' onClick={() => setPersonalData({ ...personalData, dueluitnodiging: 1 })}>Yes</span>
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
                                                                            <input type='checkbox' checked={personalData.exibepokes ? true : false} />
                                                                            <span className='back'>
                                                                                <span className='toggle'></span>
                                                                                <span className='label on' onClick={() => setPersonalData({ ...personalData, exibepokes: 0 })}>No</span>
                                                                                <span className='label off' onClick={() => setPersonalData({ ...personalData, exibepokes: 1 })}>Yes</span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ar_myProfile_range_area">
                                                                <div className="ar_myProfile_range_text">
                                                                    <p>Volume:</p>
                                                                    <p>{personalData.volume}%</p>
                                                                </div>
                                                                <div className="ar_myProfile_range">
                                                                    {/* <label for="customRange1" className="form-label">Example range</label> */}
                                                                    <input type="range" value={personalData.volume} className="form-range" id="customRange1" onChange={(e) => setPersonalData({ ...personalData, volume: e.target.value })} />
                                                                </div>
                                                            </div>
                                                            <div className="ar_myProfile_btn" onClick={onPersonalDataSubmit}>
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
                                                                        placeholder={t('Current Password')}
                                                                        {...register("current_password", { required: true })} />
                                                                    <img src="/images/register-02.png" alt="" />
                                                                </div>
                                                                {errors.current_password && <div className='error-text m-2'>{t('This field is required')}</div>}
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
                                                                        {...register("password", { required: true })} />
                                                                    <img src="/images/register-02.png" alt="" />
                                                                </div>
                                                                {errors.password && <div className='error-text m-2'>{t('This field is required')}</div>}
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
                                                                        id="password"
                                                                        placeholder={t('Email')}
                                                                        value={profile_data.email}
                                                                        disabled/>
                                                                    <img src="/images/register-02.png" alt="" />
                                                                </div>
                                                                {errors.old_password && <div className='error-text m-2'>{t('This field is required')}</div>}
                                                            </div>

                                                            <div className='validation-box'>
                                                                <div className="position-relative m-0">
                                                                    <input 
                                                                        className="form-control"
                                                                        id="password"
                                                                        placeholder={t('Email')}
                                                                        {...registerForm2("email", { required: true })} />
                                                                    <img src="/images/register-02.png" alt="" />
                                                                </div>
                                                                {errors.email && <div className='error-text m-2'>{t('This field is required')}</div>}
                                                            </div>
                                                            <div className='validation-box'>
                                                                <div className="position-relative m-0">
                                                                    <input 
                                                                        className="form-control"
                                                                        id="password"
                                                                        placeholder={t('Confirm Email')}
                                                                        {...registerForm2("email2", { required: true })} />
                                                                    <img src="/images/register-02.png" alt="" />
                                                                </div>
                                                                {errors.email2 && <div className='error-text m-2'>{t('This field is required')}</div>}
                                                            </div>
                                                            <div className="ar_myProfile_btn">
                                                                <a href="#" className='settings-anchor'><img src="/images/myAccount/accBtn.png" alt="" /></a>
                                                                <div className="ar_myProfile_btn_text" >
                                                                    <p className='m-0' style={{ fontSize: '11px', top: '20px' }} onClick={handleSubmitForm2(onSubmitForm2)}>Change Email </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
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
