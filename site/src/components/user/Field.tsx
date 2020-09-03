import React from 'react';

interface FieldProps {
    label: string;
    value: string;
    setValue: (x: string) => void;
}

const Field: React.FC<FieldProps> = (props) => {
    return <div style={{"marginBottom": "1rem"}}>
        <div>{props.label}</div>
        <input type="text" className="form-control" value={props.value} onChange={(x) => props.setValue(x.currentTarget.value)}/>
    </div>;
}

export default Field;