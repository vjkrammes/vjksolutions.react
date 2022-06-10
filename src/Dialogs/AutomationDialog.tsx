import './DialogBase';
import DialogBase from './DialogBase';

type Props = {
  onClose: () => void;
};

export default function AutomationDialog({ onClose }: Props) {
  const title = 'Automation';
  const content = () => {
    return <></>;
  };
  return <DialogBase title={title} content={content()} onClose={onClose} />;
}
