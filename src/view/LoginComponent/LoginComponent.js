import React from 'react';
import { useForm } from "react-hook-form";
import { loginUser } from '../../store/auth'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Login = () => {
    const {t}=useTranslation()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            await dispatch(loginUser(data)).unwrap(); // Unwrap to handle resolved value
            navigate('/'); // Redirect to the home page after successful login
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
                                <h2>{t('login')} <img src="images/register-01.png" alt="" /></h2>
                            </div>
                            <div className="register-item-inner7">
                                <div className='validation-box'>
                                    <div className="register-item-inner4 m-0">
                                        <input type="text"
                                            className="form-control"

                                            id="name"
                                            placeholder={t('name')}
                                            {...register("name", { required: true })} />
                                        <img src="images/register-02.png" alt="" />
                                    </div>
                                    {errors.name && <span className='error-text m-3'>{t('this_field_is_required')}</span>}
                                </div>

                                <div className='validation-box'>
                                    <div className="register-item-inner4 m-0">
                                        <input type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder={t('password')}
                                            {...register("password", { required: true })} />
                                        <img src="images/register-02.png" alt="" />
                                    </div>
                                    {errors.password && <span className='error-text m-3'>{t('this_field_is_required')}</span>}
                                </div>
                            </div>
                            <div className="register-item-inner8">
                                <Link to='/forgot-password'>{t('forgot_password')}?</Link>
                            </div>
                            <div className="register-item-inner6">
                                <button type="submit">{t('submit')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;