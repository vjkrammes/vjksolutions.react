import './DialogBase';
import DialogBase from './DialogBase';

type Props = {
  onClose: () => void;
};

export default function IntegrationDialog({ onClose }: Props) {
  const title = 'Integration';
  const content = () => {
    return <></>;
  };
  return <DialogBase title={title} content={content()} onClose={onClose} />;
}
