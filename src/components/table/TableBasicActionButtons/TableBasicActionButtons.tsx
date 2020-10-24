import * as React from 'react';
import {FaPen, FaTrash} from 'react-icons/fa';
import {IconButton} from "../../elementary/form/IconButton/IconButton";

interface Props {
    onEditClick: React.MouseEventHandler<HTMLButtonElement>;
    onRemoveClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const TableBasicActionButtons: React.FC<Props> = (props: Props) => {
    return (
        <>
            <IconButton className="px-2" onClick={props.onEditClick}><FaPen/></IconButton>
            <IconButton className="px-2" onClick={props.onRemoveClick}><FaTrash/></IconButton>
        </>
    );
};
