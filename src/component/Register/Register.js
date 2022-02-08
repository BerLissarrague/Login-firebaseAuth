import { useState } from "react";
import { useAuth } from '../../Context/authContext';
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "../Alert";

export function Register() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState("")
    const navigate = useNavigate();
    const { singup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await singup(user.email, user.password);
            navigate("/home");
        } catch (error) {
            setError(error.message)
        };
    };

    return (
        <div className="w full max-w-xs  m-auto">
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit}
                className='bg-white swhadow-md rounder px-8 pt-6 pb-8 mb-4 '>
                <div className="mb-4">
                    <label htmlFor="email"
                        className="block text-gray-700 text-sm  font-fold mb-2">Email</label>
                    <input type='text'
                        name='email'
                        placeholder=" Tumail@email.com"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className=' shadow apparence-none border rounded w-full py-2 px-3 text-grat-700 leandign-tight focus:outline-none focus:shadow-outline'></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="password"
                        className="block text-gray-700 text-sm  font-fold mb-2" >Password</label>
                    <input type='password'
                        name='password'
                        id='password'
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        className=' shadow apparence-none border rounded w-full py-2 px-3 text-grat-700 leandign-tight focus:outline-none focus:shadow-outline'></input>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outlline ">Register</button>
                <p className="my-4 text-sm flex justify-between px3">Ya tienes cuenta? <Link to='/login' >Entra</Link></p>
            </form>
        </div>
    );
};