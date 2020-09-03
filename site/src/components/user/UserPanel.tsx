import React from 'react';
import UserState, { Status, newUserState, UserStateProps } from './UserState';
import UserSignIn from './UserSignIn';
import { withCardLayout } from '../withCardLayout';
import UserNotAuthenticated from './UserNotAuthenticated';
import UserRegister from './UserRegister';
import UserAuthenticated from './UserAuthenticated';

interface UserPanelProps {

}

const userStatusMessage = (userState: UserState): string => {
    switch (userState.status) {
        case Status.AUTHENTICATED:
            return "Signed in as";

        case Status.NOT_AUTHENTICATED:
            return "Not signed in";

        case Status.REGISTERING:
            return "Registering";

        case Status.SIGNING_IN:
            return "Signing in";
    }
}

const userPanelContent = (userStateProps: UserStateProps): JSX.Element => {
    const userState = userStateProps.userState;

    switch (userState.status) {
        case Status.SIGNING_IN:
            return <UserSignIn {...userStateProps} />;

        case Status.NOT_AUTHENTICATED:
            return <UserNotAuthenticated {...userStateProps} />;

        case Status.REGISTERING:
            return <UserRegister {...userStateProps} />;

        case Status.AUTHENTICATED:
            return <UserAuthenticated {...userStateProps} />;
    }

    return <></>;
}

const UserPanel: React.FC<UserPanelProps> = (props) => {

    const [userState, setUserState] = React.useState(newUserState());
    const userStatus: string = userStatusMessage(userState);
    const userName: string | undefined = userState.userName;

    const userStateProps: UserStateProps = {
        userState: userState,
        setUserState: setUserState,
        setUserStatus: (newStatus: Status) => {
            const newState = { ...userState, status: newStatus };
            setUserState(newState);
        }
    }

    var panelContent: JSX.Element = userPanelContent(userStateProps);

    return withCardLayout(<div className="text-left">
        <div className="text-muted">{userStatus}</div>
        <h4>{userName}</h4>
        {panelContent}
    </div>);
}

export default UserPanel;