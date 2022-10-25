import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-center text-4xl font-bold text-blue-600' >Please Log in!!!</h2>
            <form className="flex flex-col gap-4 w-3/4 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
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