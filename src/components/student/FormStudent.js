import React from 'react';

const FormStudent = (props) => {
    return (
        <input
            className={props.className}
            type={props.type}
            onChange = {props.onChange}
            value = {props.value}
        />
    )
}

export default FormStudent;