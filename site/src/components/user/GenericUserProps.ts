import UserState from "./UserState";

interface GenericUserProps {
    userState: UserState;
    setUserState: (x: UserState) => void;
}

export default GenericUserProps;