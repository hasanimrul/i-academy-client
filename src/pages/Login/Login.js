import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../routes/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn, providerLogin, setLoading, loading, setUser } = useContext(AuthContext);
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    if (loading) {
        return <div className=" flex justify-center items-center">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-gray-300"></div>
        </div>
    }

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
            .finally(() => setLoading(false))
    }

    const handleGoogleSignIn = provider => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    };

    const handleGithubSignin = provider => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user);
                navigate(from, { replace: true })

            })
            .catch(error => console.error(error))
    }
    return (
        <div className='mt-20'>
            <h2 className='text-center text-4xl font-bold text-blue-600' >Please Log in!!!</h2>
            <form onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-3/4 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        name='email'
                        type="email"
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        name='password'
                        type="password"
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <div className="text-red-600">
                    {error}
                </div>

                <p className='text-gray-500 dark:text-gray-400'>Want to register first? <Link className='text-blue-500' to='/register'>Register Here</Link></p>
                <Button className='mx-auto mb-4 p-3' type="submit" gradientDuoTone="purpleToBlue">
                    Log in
                </Button>
            </form>
            <p className='text-center text-gray-500 dark:text-gray-400'>Log in with one of the following:</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
                <div className=''>
                    <Button
                        onClick={handleGoogleSignIn}
                        outline={true}
                        gradientDuoTone="purpleToBlue"
                    >
                        <FaGoogle></FaGoogle>
                    </Button>
                </div>
                <div >
                    <Button
                        onClick={handleGithubSignin}
                        outline={true}
                        gradientDuoTone="purpleToPink"
                    >
                        <FaGithub></FaGithub>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;