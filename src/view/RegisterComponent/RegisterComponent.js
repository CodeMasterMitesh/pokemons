import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../store/auth'
import { useTranslation } from 'react-i18next';


const Register = () => {
    const {t} = useTranslation();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            delete data.others            
            await dispatch(registerUser(data)).unwrap(); 
            navigate('/login'); 
        } catch (error) {
            console.error('Register failed:', error);
        }
    };
    const password = watch("wachtwoord", "");
    const isChecked = watch("others", false);

    return (
        <main className="main-wrapper main-wrapper3">

            {/* register-area start  */}
            <section className="register-area">
                <div className="container">
                    <div className="register-item">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="register-item-inner">
                                <h2>{t('Open an account')}</h2>
                                <img src="/images/register-01.png" alt="" />
                            </div>
                            <div className="register-item-inner2">
                                <div className="register-item-inner3">
                                    <div className='validation-box'>
                                        <div className="register-item-inner4 m-0">
                                            <input name="" type='email' placeholder={t('Email')} {...register('email', { required: true })} />
                                            <img src="/images/register-02.png" alt="" />
                                        </div>
                                        {errors.email && <div className='error-text m-2'>{t('This field is required')}</div>}
                                    </div>
                                </div>
                                <div className="register-item-inner3">
                                    <div className='validation-box'>
                                        <div className="register-item-inner4 m-0">
                                            <input type="text" name="" placeholder={t('Username')} {...register('username', { required: true })} />
                                            <img src="/images/register-02.png" alt="" />
                                        </div>
                                        {errors.username && <div className='error-text m-2'>{t('This field is required')}</div>}
                                    </div>
                                </div>
                                <div className="register-item-inner3">
                                    <div className='validation-box'>

                                        <div className="register-item-inner4 m-0">
                                            <input type="password" name="" placeholder={t('Password')} {...register('wachtwoord', { required: true })} />
                                            <img src="/images/register-02.png" alt="" />
                                        </div>
                                        {errors.wachtwoord && <div className='error-text m-2'>{t('This field is required')}</div>}

                                    </div>
                                </div>
                                <div className="register-item-inner3">
                                    <div className='validation-box'>

                                        <div className="register-item-inner4 m-0">
                                            <input type="password" name="" placeholder={t('Confirm password')} {...register('wachtwoord_nogmaals', {
                                                    required: "This field is required",
                                                    validate: value => value === password || "Passwords do not match"
                                                })} />
                                            <img src="/images/register-02.png" alt="" />
                                        </div>
                                        {errors.wachtwoord_nogmaals && <div className='error-text m-2'>{t(errors.wachtwoord_nogmaals.message)}</div>}

                                    </div>
                                </div>
                                <div className="register-item-inner3">
                                    <div className='validation-box'>
                                        <div className="register-item-inner4 m-0">
                                            <input type="password" name="" placeholder={t('Refferal')} {...register('refferal')} />
                                            <img src="/images/register-02.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="register-item-inner5 validation-box">
                                <input type="checkbox" id="test" {...register("others", { required: true })} />
                                <label htmlFor="test">
                                    <span>
                                        {isChecked && <img src="/images/register-03.png" alt="Checked" />} {/* Show image if checked */}
                                    </span>
                                    {t('I agree with the Terms of Service and Privacy Policy')}
                                </label>
                                {errors.others && <span className='error-text m-3'>{t('This field is required')}</span>}
                            </div>
                            <div className="register-item-inner6">
                                <button type="submit">{t('Submit')}</button>
                            </div>
                            <div className="register-item-inner6 mt-3">
                                <button onClick={()=>{navigate('/login')}} className='register-button'>
                                    <span>{t('Login')}</span>
                                <img src="/images/banner-03.png" alt=""/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* register-area end */}

        </main>
    );
};

export default Register;