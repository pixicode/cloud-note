import React from 'react';
import { Status, UserStateProps } from './UserState';
import UserButton from '../UserButton';


const UserSignUp: React.FC<UserStateProps> = (props) => {
    
    const submitButton = <UserButton label="Submit" action={() => props.setUserStatus(Status.AUTHENTICATED)} />;
    const cancelButton = <UserButton label="Cancel" action={() => props.setUserStatus(Status.NOT_AUTHENTICATED)} />;

    return <div>
        This is the sign-up props.
        <div>{submitButton} | {cancelButton}</div>
    </div>
}

export default UserSignUp;