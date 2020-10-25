import * as React from 'react';

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
    file: File;
}

export const FileImage: React.FC<Props> = ({file, ...props}: Props) => {
    const src = React.useMemo(() => URL.createObjectURL(file), [file])
    return (
        <img {...props} alt={props.alt} src={src}/>
    );
};
