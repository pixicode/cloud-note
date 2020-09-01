import React from 'react';
import { Status, UserStateProps } from './UserState';
import UserButton from '../UserButton';


const UserNotAuthenticated: React.FC<UserStateProps> = (props) => {

    const registerButton = <UserButton label="Register" action={() => props.setUserStatus(Status.REGISTERING)}/>;
    const signInButton = <UserButton label="Sign In" action={() => props.setUserStatus(Status.SIGNING_IN)}/>;

    return <div>
        <div>{registerButton} | {signInButton}</div>
    </div>
}

export default UserNotAuthenticated;