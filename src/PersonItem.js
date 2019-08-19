import React from 'react';
import {ListItemColored} from "./ListItemColored";

const PersonItem = React.memo(props => {
    return <ListItemColored>
        <span>{props.person.name}</span>
        <button>Delete</button>
    </ListItemColored>
});

export {PersonItem};
