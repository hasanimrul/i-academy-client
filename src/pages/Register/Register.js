import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mt-15'>
            <h2 className='text-center text-4xl font-bold text-blue-500'>Please Register!!!</h2>
            <form className="flex flex-col gap-4 w-3/4 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Full Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        placeholder="David John"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo"
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        id="photo"
                        type="text"
                        placeholder="URL"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="name@gmail.com"
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
                        placeholder='at least 6 characters'
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Accept <Link className='text-blue-500' to='/terms'>Terms & Conditions</Link>
                    </Label>
                </div>
                <Button className='mx-auto mb-4 p-3' type="submit" gradientDuoTone="purpleToBlue">
                    Register
                </Button>
                <p>Already have an account? <Link className='text-blue-500' to='/login'>Log in</Link></p>
            </form>
        </div>
    );
};

export default Register;