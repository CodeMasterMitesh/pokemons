import React from 'react';
import { useForm } from "react-hook-form";
import { forgotPassword } from '../../store/auth'
import {useSelector,useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ForgotPassword = () => {
    const {t} =useTranslation();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            await dispatch(forgotPassword(data)).unwrap();
            navigate('/login');
        } catch (error) {
            console.error('Send mail failed:', error);
        }
    };
    return (
        <div className="main-wrapper main-wrapper3">
            <div className="register-area">
                <div className="container">
                    <div className="register-item register-item2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="register-item-inner">
                                <h2>{t('Forgot Password')}<img src="/images/register-01.png" alt="" /></h2>
                            </div>
                            <div className="register-item-inner7">
                                <div className='validation-box'>
                                    <div className="register-item-inner4 m-0">
                                        <input type="text"
                                            id="name"
                                            placeholder={t('Email')}
                                            {...register("email", { required: true })} />
                                        <img src="/images/register-02.png" alt="" />
                                    </div>
                                    {errors.email && <span className='error-text m-3'>{t('This field is required')}</span>}
                                </div>
                            </div>
                            <div className="register-item-inner6">
                                <button type="submit">{t('Submit')}</button>
                            </div>
                            
                            <div className="register-item-inner6 mt-3">
                                <button onClick={()=>{navigate('/login')}} className='register-button'>
                                    <span>{t('Back to login')}</span>
                                <img src="/images/banner-03.png" alt=""/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;