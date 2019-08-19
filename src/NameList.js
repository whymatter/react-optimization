import React from 'react';
import {ListItemColored} from "./ListItemColored";

const NameList = props => {
    return <ul>{props.data.map(o => <ListItemColored>{o.name}</ListItemColored>)}</ul>;
};

export {NameList};
