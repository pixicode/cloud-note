export enum Status {
    NOT_AUTHENTICATED,
    AUTHENTICATED,
    SIGNING_IN,
    REGISTERING
}

interface UserState {
    status: Status;
    statusReason?: string;
}

export interface UserStateProps {
    userState: UserState;
    setUserState: (x: UserState) => void;
    setUserStatus: (x: Status) => void;
}

export const newUserState = () => {
    return {
        status: Status.NOT_AUTHENTICATED
    }
}

export default UserState;
