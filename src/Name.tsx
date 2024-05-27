import React from 'react';

export interface IProps {
    readonly name: string
}

export const Name = (props: IProps) => {
    return (<div>
        <p>{props.name}</p>
    </div>)
}