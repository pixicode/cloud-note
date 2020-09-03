import React from 'react';
import { Status, UserStateProps } from './UserState';
import UserButton from '../UserButton';
import Field from './Field';
import UserApi from '../../api/UserApi';


const UserRegister: React.FC<UserStateProps> = (props) => {
    
    const submitButton = <UserButton label="Submit" action={() => onSubmit()} />;
    const cancelButton = <UserButton label="Cancel" action={() => props.setUserStatus(Status.NOT_AUTHENTICATED)} />;
   
    const [email, setEmail] = React.useState("");
    const emailField = <Field label="Email" value={email} setValue={setEmail}/>;

    const [password, setPassword] = React.useState("");
    const passwordField = <Field label="Password" value={password} setValue={setPassword}/>;

    const onSubmit = () => {
        console.log(`Submitting Registration with email [${email}] and password [${password}]`);
        props.setUserState({...props.userState, userName: email, status: Status.AUTHENTICATED});
        UserApi.register(email, password);
    }

    return <div>
        {emailField}
        {passwordField}
        <div>{submitButton} | {cancelButton}</div>
    </div>
}

export default UserRegister;