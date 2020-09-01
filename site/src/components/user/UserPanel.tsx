import React from 'react';
import UserState, {Status, newUserState, UserStateProps} from './UserState';
import UserSignUp from './UserSignUp';
import { withCardLayout } from '../withCardLayout';
import UserNotAuthenticated from './UserNotAuthenticated';

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

const UserPanel: React.FC<UserPanelProps> = (props) => {

    const [userState, setUserState] = React.useState(newUserState());

    const userStatus: string = userStatusMessage(userState);
    const userName: string | null = null;

    const userStateProps: UserStateProps = {
        userState: userState,
        setUserState: setUserState,
        setUserStatus: (newStatus: Status) => {
            const newState = {...userState, status: newStatus};
            setUserState(newState);
        }
    }

    var panelContent: JSX.Element | null = null;
    if (userState.status === Status.SIGNING_IN) {
        panelContent = <UserSignUp {...userStateProps}/>
    } else if (userState.status === Status.NOT_AUTHENTICATED) {
        panelContent = <UserNotAuthenticated {...userStateProps}/>
    }

    return withCardLayout(<div className="text-left">
        <div className="text-muted">{userStatus}</div>
        <h4>{userName}</h4>
        {panelContent}
    </div>);
}

export default UserPanel;