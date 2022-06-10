import './DialogBase';
import DialogBase from './DialogBase';

type Props = {
  onClose: () => void;
};

export default function InnovationDialog({ onClose }: Props) {
  const title = 'Innovation';
  const content = () => {
    return <></>;
  };
  return <DialogBase title={title} content={content()} onClose={onClose} />;
}
