import React, { useContext,useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

type FormValues = {
	name: string;
	email: string;
	password: string;
	role: string;
};

const SignUp = () => {
	useTitle("- SignUp");
	const navigate = useNavigate();
	const { user, signUp, nameUpdate, googlLogin } = useContext(AuthContext)
	const [showPassword,setShowPassword]=useState<Boolean>(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>();

	const SignupHandle: SubmitHandler<FormValues> = (data) => {
		const name = data.name;
		const email = data.email;
		const password = data.password;
		const role = data.role;
		// console.log(name, email, password, role);
		signUp(email, password)
			.then((data: any) => {
				if (data?.user.uid) {
					nameUpdate(name)
						.then(() => { })
					saveUser(email, name, role)
				}
			}).catch((e: any) => toast.error(e.message))
		reset()
	}

	// Signup with google
	const GoogleHandle = () => {
		googlLogin()
			.then((data: any) => {
				if (data.user.uid) {
					saveUser(data.user.email, data.user.displayName);
				}
			}).catch((e: any) => toast.error(e.message))
	}

	// Save user data in database
	const saveUser = (email: string, name: string, role: string = 'buyer', isVerified: Boolean = false) => {
		const user = { email, name, role, isVerified };
		// console.log(user);
		fetch('https://bookship-server-zamanxd.vercel.app/saveuser', {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(user)
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				toast.success('Thank you for Login')
				navigate("/");
			})
	};
	return (
		<div className="w-full max-w-md mx-auto my-20 p-8 shadow-lg shadow-gray-400 space-y-3 rounded-xl bg-white text-gray-600">
			<h1 className="text-2xl font-bold text-center">Sign Up</h1>
			<form onSubmit={handleSubmit(SignupHandle)} className="space-y-6 ng-untouched ng-pristine ng-valid">
				<div className="space-y-1 text-sm">
					<label htmlFor="userName" className="block text-gray-500">User Name</label>
					<input
						{...register("name", { required: "Name is required" })}
						type="name"
						id="name"
						placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-500" />
					{errors.name && (
						<p className="text-sm text-red-500">{errors.name?.message}</p>
					)}
				</div>
				<div className="space-y-1 text-sm">
					<label htmlFor="email" className="block text-gray-500">Email</label>
					<input
						{...register("email", { required: "Email is required" })}
						type="email"
						id="email"
						placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-500" />
					{errors.email && (
						<p className="text-sm text-red-500">{errors.email?.message}</p>
					)}
				</div>
				<div className="space-y-1 text-sm relative">
					<label htmlFor="password" className="block text-gray-500">Create Password</label>
					<input
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 6,
								message: "Password must be 6 characters or longer",
							},
							pattern: {
								value: /(?=.*[a-z])(?=.*[0-9])/,
								message:
									"Password must use one small letter and one number",
							},
						})}
						type={
							showPassword?"text":"password"
						}
						id="password"
						placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-500" />
						<span className='absolute right-4 top-[1.9em] text-lg text-gray-400'>
						{
							showPassword?
							<span onClick={()=>setShowPassword(!showPassword)}>
								<FaEyeSlash/>
								</span>
							:
							<span onClick={()=>setShowPassword(!showPassword)}>
								<FaEye/>
								</span>
						}</span>
					{errors.password && (
						<p className="text-sm text-red-500">{errors.password?.message}</p>
					)}
				</div>

				<div>
					<label htmlFor="role" className="block text-gray-500">
						Select user role
					</label>
					<select
						id="role"
						{...register("role", { required: "Selact user role must" })}
					className="w-full px-3 py-[11px] rounded-md border-gray-700 bg-gray-100 text-black"
						defaultValue="Select user role"
					>
						<option>buyer</option>
						<option>seller</option>
					</select>
					{errors.role && (
						<p className="text-sm text-red-500">{errors.role?.message}</p>
					)}
				</div>

				<button type='submit' className="w-full p-3 text-center rounded-full bg-gradient-to-r bs-button">Sign Up</button>
			</form>
			<div className="flex items-center pt-4 space-x-1">
				<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
				<p className="px-3 text-sm text-gray-500">Signup with social accounts</p>
				<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
			</div>
			<div className="flex justify-center space-x-4">
				<button onClick={GoogleHandle} aria-label="Log in with Google" className="p-3 rounded-sm">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
						<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
					</svg>
				</button>

			</div>
			<p className="text-xs text-center sm:px-6 text-gray-500">Already have an account?{' '}
				<Link rel="noopener noreferrer" to="/login" className="underline text-green-500">Log in</Link>
			</p>
		</div>
	);
};

export default SignUp;