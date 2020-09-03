import React from 'react';
import { Status, UserStateProps } from './UserState';
import UserButton from '../UserButton';
import Field from './Field';
import UserApi, { UserApiStatus } from '../../api/UserApi';


const UserSignIn: React.FC<UserStateProps> = (props) => {

    const defaultApiStatus: UserApiStatus = {
        isLoading: false,
        isError: false,
        errorDetais: ""
    }

    const [apiStatus, setApiStatus] = React.useState(defaultApiStatus);

    const submitButton = <UserButton label="Submit" disabled={apiStatus.isLoading} action={() => onSubmit()} />;
    const cancelButton = <UserButton label="Cancel" disabled={apiStatus.isLoading} action={() => props.setUserStatus(Status.NOT_AUTHENTICATED)} />;

    const [email, setEmail] = React.useState("");
    const emailField = <Field label="Email" value={email} setValue={setEmail} />;

    const [password, setPassword] = React.useState("");
    const passwordField = <Field label="Password" value={password} setValue={setPassword} />;

    const onSubmit = () => {
        console.log(`Submitting Signin with email [${email}] and password [${password}]`);

        setApiStatus({
            isLoading: true,
            isError: false,
            errorDetais: ""
        });

        UserApi.signIn(email, password)
            .then(x => {
                console.log(x);
                if (x.success) {
                    props.setUserState({ ...props.userState, userName: email, status: Status.AUTHENTICATED });
                } else {
                    setApiStatus({
                        isLoading: false,
                        isError: true,
                        errorDetais: x.details ? x.details : "Unknown"
                    });
                }
            })
            .catch(x => {
                setApiStatus({
                    isLoading: false,
                    isError: true,
                    errorDetais: "Caught Exception"
                });
            });
    }

    let statusElement = null;

    if (apiStatus.isLoading) {
        const spinner = <div className="spinner-border spinner-border-sm mr-2" role="status">
            <span className="sr-only">Loading...</span>
        </div>

        statusElement = <div className="alert alert-primary" role="alert">
            {spinner} Loading...
        </div>
    }

    if (apiStatus.isError) {
        statusElement = <div className="alert alert-danger" role="alert">
            Error: {apiStatus.errorDetais}
        </div>
    }

    return <div>
        {emailField}
        {passwordField}
        {statusElement}
        <div>{submitButton} | {cancelButton}</div>
    </div>
}

export default UserSignIn;