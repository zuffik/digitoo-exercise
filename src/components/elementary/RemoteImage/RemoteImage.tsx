import * as React from 'react';
import {useGet} from '../../../services/http/HttpHooks';
import {Spinner} from '../progress/Spinner/Spinner';
import {Warning} from '../Warning/Warning';

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  imageId: string;
}

export const RemoteImage: React.FC<Props> = (props: Props) => {
  const [{data, error, loading}] = useGet<Blob>(`/images/${props.imageId}`, {
    responseType: 'blob',
  });
  const [image, setImage] = React.useState<string | undefined>(undefined);
  React.useEffect(() => {
    if (data) {
      setImage(URL.createObjectURL(data));
    }
  }, [data]);
  const {imageId, ...rest} = props;

  if (loading) return <Spinner />;
  if (error) return <Warning />;
  return <img {...rest} src={image} />;
};
