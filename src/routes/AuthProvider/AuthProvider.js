import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'; 
import app from '../../firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)

const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
};

const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
};
const authInfo = {createUser, signIn};

const AuthProvider = ({children}) => {
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;