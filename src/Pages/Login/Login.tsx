import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const { login, googlLogin, forgatePassword } = useContext(AuthContext)
	const LoginHandle = (e: any) => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const password = form.password.value
		login(email, password)
			.then((data: any) => {
				console.log(data);
				navigate(from, { replace: true });
			})
		form.reset()
	}

	// Signup with google
	const GoogleHandle = () => {
		googlLogin()
			.then((data: any) => {
				console.log(data.user);
				navigate(from, { replace: true });
			})
	}

	return (
		<div className="w-full max-w-md mx-auto my-20 p-8 shadow-lg shadow-gray-400 space-y-3 rounded-xl bg-white text-gray-600">
			<h1 className="text-2xl font-bold text-center">Login</h1>
			<form onSubmit={LoginHandle} className="space-y-6 ng-untouched ng-pristine ng-valid">
				<div className="space-y-1 text-sm">
					<label htmlFor="email" className="block text-gray-500">User Email</label>
					<input type="email" name="email" id="email" placeholder="User Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-300 text-gray-600" />
				</div>
				<div className="space-y-1 text-sm">
					<label htmlFor="password" className="block text-gray-500">Password</label>
					<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-300 text-gray-600" />
					<div className="flex justify-end text-xs text-red-400">
						<a rel="noopener noreferrer" href="#">Forgot Password?</a>
					</div>
				</div>
				<button className="block w-full p-3 text-center rounded-sm bg-[#3DB188] text-white">Log in</button>
			</form>
			<div className="flex items-center pt-4 space-x-1">
				<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
				<p className="px-3 text-sm text-gray-500">Login with social accounts</p>
				<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
			</div>
			<div className="flex justify-center space-x-4">
				<button onClick={GoogleHandle} aria-label="Log in with Google" className="p-3 rounded-sm">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
						<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
					</svg>
				</button>

			</div>
			<p className="text-xs text-center sm:px-6 text-gray-500">Don't have an account?{' '}
				<Link rel="noopener noreferrer" to='/signup' className="underline text-green-500">Sign up</Link>
			</p>
		</div>
	);
};

export default Login;