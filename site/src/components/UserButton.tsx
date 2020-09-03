import React from 'react';

interface UserButtonProps {
    label: string,
    action: (x?: any) => void;
    disabled?: boolean;
}

const UserButton: React.FC<UserButtonProps> = (props) => {
    return <button className="btn btn-link" onClick={props.action} disabled={props.disabled}>
        {props.label}
    </button>;
}

export default UserButton;