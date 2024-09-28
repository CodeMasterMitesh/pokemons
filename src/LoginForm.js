// src/LoginForm.js
import React from 'react';

const LoginForm = () => {
    return (
        <form method="post" autoComplete="off" style={{ height: '230px', padding: '10px', width: '520px', zIndex: 10 }}>
            <table width="70%" cellSpacing="0" cellPadding="0" border="0">
                <tr>
                    <td colSpan="2">
                        <input type="text" name="username" placeholder="Usuário:" style={{ width: '99%', height: '40px', marginBottom: '10px', fontSize: '14px' }} required autoFocus />
                        <input type="password" name="password" placeholder="Senha:" style={{ width: '99%', height: '37px', fontSize: '14px' }} required />
                    </td>
                </tr>
                <tr style={{ fontStyle: 'italic' }}>
                    <td style={{ paddingLeft: '5px', paddingTop: '5px', width: '50%' }}>
                        <a href="./activate">Ative sua Conta</a>
                    </td>
                    <td style={{ width: '50%', textAlign: 'right', paddingTop: '5px', paddingRight: '10px' }}>
                        <a href="./forgot">Recuperar Conta</a>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ paddingTop: '10px' }}>
                        <button className="button-rounded ripple" name="login" type="submit" value="login">Começar Aventura!</button>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ fontStyle: 'italic', textAlign: 'center', paddingTop: '5px' }}>
                        Não tem uma conta? <a href="./register" style={{ color: '#6ac7ee', fontWeight: 'bold' }}>CADASTRE-SE</a> agora mesmo!
                    </td>
                </tr>
            </table>
        </form>
    );
};

export default LoginForm;