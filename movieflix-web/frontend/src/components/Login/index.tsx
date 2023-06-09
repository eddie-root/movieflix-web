import './styles.css';


import ButtonIcon from 'components/ButtonIcon';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
// import { requestBackendLogin } from 'util/requests';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {

    const { register } = useForm<FormData>();

    // const onSubmit = (formData: FormData) => {
    //     requestBackendLogin(formData)
    //         .then(response => {
    //             console.log('SUCESSO', response);
    //         })
    //         .catch(error => {
    //             console.log('ERROR', error);
    //         })
    // };

    return (
        <div className='base-card login-card'>
            <h1>Login</h1>
            <form >
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
                    <Link to="/movies" >
                        <ButtonIcon text='Fazer login' />
                    </Link>
                </div>

            </form>
        </div>
    );
}

export default Login;