import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
            <button onClick={() => loginWithRedirect()} className="py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none">
                Login 
            </button>
        )
}

export default LoginButton;