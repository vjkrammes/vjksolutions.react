import './DialogBase';
import DialogBase from './DialogBase';

type Props = {
  onClose: () => void;
};

export default function IntegrationDialog({ onClose }: Props) {
  const title = 'Integration';
  const content = () => {
    return (
      <p>
        Bring together data from disparate sources into a unified presentation.
        Whether you need a Dashboard, printed reports, Excel spreadsheets, or
        data in any other form, we can produce the output you need. Additional
        services, such as event correlation, trending, and exception analysis
        and tracking are also available.
      </p>
    );
  };
  return <DialogBase title={title} content={content()} onClose={onClose} />;
}
