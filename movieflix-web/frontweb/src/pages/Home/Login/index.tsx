import './styles.css';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/requests';
import { useState } from 'react';

import ButtonIcon from 'components/ButtonIcon';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {
    const [hasError, setHasError] = useState(false);

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        requestBackendLogin(formData)
            .then(response => {
                setHasError(false);
                console.log('SUCESSO', response);
            }).catch(error => {
                setHasError(true);
                console.log('ERRO', error);
            })

    };

    return (
        <div className='base-card login-card'>
            <h1>Login</h1>
            {hasError && (
                <div className='alert alert-danger'>
                    Email ou senha inválidos!
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <input
                        {...register("username")}
                        type="text"
                        className="form-control base-input"
                        placeholder="Email"
                        name="username"
                    />
                </div>
                <div className='mb-2'>
                    <input
                        {...register("password")}
                        type="password"
                        className="form-control base-input "
                        placeholder="Senha"
                        name="password"
                    />
                </div>

                <div className='login-submit'>
                    <ButtonIcon text='Fazer Login' />
                </div>

            </form>
        </div>
    );
}

export default Login;
