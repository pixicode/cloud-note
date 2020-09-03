import React from 'react';
import { Status, UserStateProps } from './UserState';
import UserButton from '../UserButton';
import UserApi from '../../api/UserApi';


const UserAuthenticated: React.FC<UserStateProps> = (props) => {
    
    const signOutButton = <UserButton label="Sign Out" action={() => onSignOut()} />;

    const onSignOut = () => {
        props.setUserState({...props.userState, userName: undefined, status: Status.NOT_AUTHENTICATED});
        UserApi.signOut();
    }

    return <div>
        <div>{signOutButton}</div>
    </div>
}

export default UserAuthenticated;