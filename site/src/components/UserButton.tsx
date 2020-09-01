import React from 'react';

interface UserButtonProps {
    label: string,
    action: (x?: any) => void;
}

const UserButton: React.FC<UserButtonProps> = (props) => {
    return <button className="btn btn-link" onClick={props.action}>
        {props.label}
    </button>;
}

export default UserButton;