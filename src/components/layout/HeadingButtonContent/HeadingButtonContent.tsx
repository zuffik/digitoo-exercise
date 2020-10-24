import * as React from 'react';
import {Button} from '../../elementary/form/Button/Button';

interface Props {
    heading: React.ReactText;
    buttonText: React.ReactText;
    onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

export const HeadingButtonContent: React.FC<Props> = (props: Props) => {
    return (
        <>
            <div className="row">
                <div className="col-auto">
                    <h2>{props.heading}</h2>
                </div>
                <div className="col-auto">
                    <Button onClick={props.onButtonClick}>{props.buttonText}</Button>
                </div>
            </div>
            {props.children}
        </>
    );
};
