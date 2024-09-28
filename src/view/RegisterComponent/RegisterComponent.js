import React from 'react';
import { useForm } from "react-hook-form";
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../store/auth'


const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            await dispatch(registerUser(data)).unwrap(); 
            navigate('/'); 
        } catch (error) {
            console.error('Register failed:', error);
        }
    };
    const password = watch("password", "");
    const isChecked = watch("terms", false);

    return (
        <main className="main-wrapper main-wrapper3">

            {/* register-area start  */}
            <section className="register-area">
                <div className="container">
                    <div className="register-item">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="register-item-inner">
                                <h2>פתח חשבון</h2>
                                <img src="images/register-01.png" alt="" />
                            </div>
                            <div className="register-item-inner2">
                                <div className="register-item-inner3">
                                    <div className='validation-box'>
                                        <div className="register-item-inner4 m-0">
                                            <input name="" type='email' placeholder="E-mail" {...register('email', { required: true })} />
                                            <img src="images/register-02.png" alt="" />
                                        </div>
                                        {errors.email && <span className='error-text m-3'>This field is required</span>}
                                    </div>
                                </div>
                                <div className="register-item-inner3">
                                    <div className='validation-box'>

                                        <div className="register-item-inner4 m-0">
                                            <input type="text" name="" placeholder="Login" {...register('login', { required: true })} />
                                            <img src="images/register-02.png" alt="" />
                                        </div>
                                        {errors.login && <span className='error-text m-3'>This field is required</span>}
                                    </div>
                                </div>
                                <div className="register-item-inner3">
                                    <div className='validation-box'>

                                        <div className="register-item-inner4 m-0">
                                            <input type="password" name="" placeholder="Password" {...register('password', { required: true })} />
                                            <img src="images/register-02.png" alt="" />
                                        </div>
                                        {errors.password && <span className='error-text m-3'>This field is required</span>}

                                    </div>
                                </div>
                                <div className="register-item-inner3">
                                    <div className='validation-box'>

                                        <div className="register-item-inner4 m-0">
                                            <input type="password" name="" placeholder="Confirm password" {...register('confirm_password', {
                                                    required: "This field is required",
                                                    validate: value => value === password || "Passwords do not match"
                                                })} />
                                            <img src="images/register-02.png" alt="" />
                                        </div>
                                        {errors.confirm_password && <span className='error-text m-3'>{errors.confirm_password.message}</span>}

                                    </div>
                                </div>
                            </div>
                            <div className="register-item-inner5 validation-box">
                                <input type="checkbox" id="test" {...register("terms", { required: true })} />
                                <label htmlFor="test">
                                    <span>
                                        {isChecked && <img src="images/register-03.png" alt="Checked" />} {/* Show image if checked */}
                                    </span>
                                    I agree with the Terms of Service and Privacy Policy
                                </label>
                                {errors.terms && <span className='error-text m-3'>This field is required</span>}
                            </div>
                            <div className="register-item-inner6">
                                <button type="submit">פתח חשבון</button>
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