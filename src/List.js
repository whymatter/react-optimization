import React from 'react';
import {PersonItem} from "./PersonItem";

const List = props => {
    return <ul>{props.data.map(o => <PersonItem key={o.id} person={o}/>)}</ul>; // key={o.id}
};

export {List};
