import React, { useState} from 'react';
import {IButtonProps} from './button';

const ButtonHooks: React.FC<IButtonProps> = (props) => {
    const { buttonText, onClick, color } = props;

    const transformedColor: IButtonProps['color'] = color + "value";

    const [hoverState, setHoverState] = useState(false);

    return (
        <button
            style={{ backgroundColor: color }}
            onClick={onClick}
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
        >
            { buttonText }
        </button>
    )
};

ButtonHooks.defaultProps = {
    color: 'blue',
};

export default ButtonHooks;
