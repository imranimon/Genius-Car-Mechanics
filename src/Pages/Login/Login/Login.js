import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth()
    const prevLocation = useLocation();
    const redirect_url = prevLocation.state?.from || '/';
    const history = useHistory()

    const handleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)

            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div>
            <h2>Please Login</h2>
            <Button onClick={handleSignIn} variant='primary'>
                Singn In using Google
            </Button>
        </div>
    );
};

export default Login;