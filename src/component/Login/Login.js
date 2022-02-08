import { useState } from "react";
import { useAuth } from '../../Context/authContext';
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "../Alert";
import { async } from "@firebase/util";

export function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState("")
    const navigate = useNavigate();
    const { login, loginGoogleAuth, restPassword } = useAuth();

    const handelGoogle = async () => {
        try {
            await loginGoogleAuth();
            navigate("/home");
            console.log(user)
        } catch (error) {
            setError(error.message);
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            navigate("/home");
        } catch (error) {
            setError(error.message)
        }
    };
    const handleResetPassword = async () => {
        if (!user.email) return setError("Porfavor entre su email")
        try {
            await restPassword(user.email)
            setError("enviamos un mail para restablecer tu contraseña")
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="w full max-w-xs  m-auto">
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className="mb-4">
                    <label htmlFor="email"
                        className="block text-gray-700 text-sm  font-fold mb-2">Email</label>
                    <input type='text' name='email'
                        placeholder="yourmail@gmail.com"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className='shadow apparence-none border  rounded w-full py-2 px-3 text-gray-700 leanding-tight focus:outline-none focus:shadow-outline '></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="password"
                        className="block text-gray-700 text-sm  font-fold mb-2"
                    >Password</label>
                    <input type='password'
                        name='password'
                        id='password'
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        className='shadow apparence-none border  rounded w-full py-2 px-3 text-gray-700 leanding-tight focus:outline-none focus:shadow-outline ' />
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outlline ">Login</button>
                    <a href="#"
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        onClick={handleResetPassword}>Olvidaste la contrasña?</a>
                </div>
            </form>
            <p className="my-4 text-sm flex justify-between px3">No tienes cuenta? <Link to='/register' >Registrate</Link></p>
            <button onClick={handelGoogle}
                className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full">Google Login</button>
        </div>
    );
};