import React, { useContext, useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../routes/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted,setAccepted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setUser(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photo);
        })
        .catch(e =>{
            console.error(e)
            setError(e.message)
        })

    };
    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then( () =>{})
        .catch(e => console.error(e))
    };

    const handleAccepted = (event) =>{
        setAccepted(event.target.checked)
};
    return (
        <div className='mt-15'>
            <h2 className='text-center text-4xl font-bold text-blue-500'>Please Register!!!</h2>
            <form onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-3/4 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Full Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        name='name'
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
                        name='photo'
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
                        name='email'
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
                        name='password'
                        type="password"
                        placeholder='at least 6 characters'
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox onClick={handleAccepted} id="remember" />
                    <Label htmlFor="remember">
                        Accept <Link className='text-blue-500' to='/terms'>Terms & Conditions</Link>
                    </Label>
                </div>
                <div className="text-red-600">
                        {error}
                </div>
                <Button className='mx-auto p-3' type="submit" gradientDuoTone="purpleToBlue" disabled={!accepted}>
                    Register
                </Button>
                <p className='text-gray-500 dark:text-gray-400'>Already have an account? <Link className='text-blue-500' to='/login'>Log in</Link></p>
            </form>
        </div>
    );
};

export default Register;