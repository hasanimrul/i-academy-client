import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../routes/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('')

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
        })
        .catch(e => {
            console.error(e)
            setError(e.message)
        })
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

                <p>Want to register first? <Link className='text-blue-500' to='/register'>Register Here</Link></p>
                <Button className='mx-auto mb-4 p-3' type="submit" gradientDuoTone="purpleToBlue">
                    Log in
                </Button>
            </form>
            <p className='text-center'>Log in with one of the following:</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
                <div className=''>
                    <Button
                        outline={true}
                        gradientDuoTone="purpleToBlue"
                    >
                        <FaGoogle></FaGoogle>
                    </Button>
                </div>
                <div >
                    <Button
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