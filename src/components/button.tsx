import * as React from 'react';

export interface IButtonProps {
    onClick: (e: any) => void;
    buttonText: string;
    color?: string;
}

interface IButtonState {
    hover: boolean;
}

export default class Button extends React.Component<IButtonProps, IButtonState> {
    constructor(props: IButtonProps) {
        super(props);

        this.state = {
            hover: false,
        }
    }

    private handleHover = (isHovered: boolean): void => this.setState({hover: isHovered});

    render(): React.ReactElement {
        const { buttonText, onClick, color } = this.props;
        return (
            <button
                style={{ backgroundColor: color }}
                onClick={onClick}
                onMouseEnter={() => this.handleHover(true)}
                onMouseLeave={() => this.handleHover(false)}
            >
                { buttonText }
            </button>
        )
    }
}
