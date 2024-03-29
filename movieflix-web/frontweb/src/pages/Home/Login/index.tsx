import './styles.css';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/requests';
import { useState, useContext } from 'react';
import ButtonIcon from 'components/ButtonIcon';
import { useHistory } from 'react-router-dom';
import { getAuthData, saveAuthData } from 'util/storage';
import { AuthContext } from 'AuthContext';
import { getTokenData } from 'util/auth';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {
    const { setAuthContextData } = useContext(AuthContext);

    const [hasError, setHasError] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const history = useHistory();

    const onSubmit = (formData: FormData) => {
        requestBackendLogin(formData)
            .then(response => {
                saveAuthData(response.data);
                const token = getAuthData().access_token;
                console.log('TOKEN GERADO: ' + token);
                setHasError(false);
                console.log('SUCESSO', response);
                setAuthContextData({
                    authenticated: true,
                    tokenData: getTokenData()
                })
                history.push('/movies');
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
                        {...register("username", {
                            required: 'Campo obrigatório',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email inválido'
                            }
                        })}
                        type="text"
                        className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        name="username"
                    />
                    <div className='invalid-feedback d-block'>{errors.username?.message}</div>
                </div>
                <div className='mb-2'>
                    <input
                        {...register("password", {
                            required: 'Campo obrigatório'
                        })}
                        type="password"
                        className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Senha"
                        name="password"
                    />
                    <div className='invalid-feedback d-block'>{errors.password?.message}</div>
                </div>

                <div className='login-submit'>
                    <ButtonIcon text='Fazer Login' />
                </div>

            </form>
        </div>
    );
}

export default Login;
