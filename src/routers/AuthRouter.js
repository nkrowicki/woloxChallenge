import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';

const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path='/auth/login'
                    component={LoginScreen}
                    />
                <Redirect to='/app' />
            </Switch>
        </div>
    )
}

export default AuthRouter
