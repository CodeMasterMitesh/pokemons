import React from 'react';
import { useForm } from "react-hook-form";
import { forgotPassword } from '../../store/auth'
import {useSelector,useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
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
                                <h2>שכחת סיסמה<img src="images/register-01.png" alt="" /></h2>
                            </div>
                            <div className="register-item-inner7">
                                <div className='validation-box'>
                                    <div className="register-item-inner4 m-0">
                                        <input type="text"
                                            id="name"
                                            placeholder="Email"
                                            {...register("email", { required: true })} />
                                        <img src="images/register-02.png" alt="" />
                                    </div>
                                    {errors.email && <span className='error-text m-3'>This field is required</span>}
                                </div>
                            </div>
                            <div className="register-item-inner8">
                                <Link to='/login'>Back to login?</Link>
                            </div>
                            <div className="register-item-inner6">
                                <button type="submit">הלחתה</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;