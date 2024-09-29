import React from 'react';
import { useForm } from "react-hook-form";
import { loginUser } from '../../store/auth'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
const Login = () => {
    const { t } = useTranslation()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {login} = useAuth()
    const onSubmit = async (data) => {
        try {
            const response = await dispatch(loginUser(data)).unwrap();            
            if (response.token) {
                localStorage.setItem('token', response.token);
                login(response.token); 
                navigate('/home');
              }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    return (
        <div className="main-wrapper main-wrapper3">
            <div className="register-area">
                <div className="container">
                    <div className="register-item register-item2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="register-item-inner">
                                <h2>{t('Login')} <img src="images/register-01.png" alt="" /></h2>
                            </div>
                            <div className="register-item-inner7">
                                <div className='validation-box'>
                                    <div className="register-item-inner4 m-0">
                                        <input type="text"
                                            className="form-control"

                                            id="name"
                                            placeholder={t('Name')}
                                            {...register("username", { required: true })} />
                                        <img src="images/register-02.png" alt="" />
                                    </div>
                                    {errors.username && <div className='error-text m-2'>{t('This field is required')}</div>}
                                </div>

                                <div className='validation-box'>
                                    <div className="register-item-inner4 m-0">
                                        <input type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder={t('Password')}
                                            {...register("wachtwoord", { required: true })} />
                                        <img src="images/register-02.png" alt="" />
                                    </div>
                                    {errors.wachtwoord && <div className='error-text m-2'>{t('This field is required')}</div>}
                                </div>
                            </div>
                            <div className="register-item-inner8">
                                <Link to='/forgot-password'>{t('Forgot Password')}?</Link>
                            </div>
                            <div className="register-item-inner6">
                                <button type="submit">{t('Submit')}</button>
                            </div>
                            <div className="register-item-inner6 mt-3">
                                <button onClick={()=>{navigate('/register')}} className='register-button'>
                                    <span>{t('Open an account')}</span>
                                <img src="images/banner-03.png" alt=""/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;