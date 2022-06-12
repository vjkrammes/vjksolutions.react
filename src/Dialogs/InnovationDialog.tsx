import './DialogBase';
import DialogBase from './DialogBase';

type Props = {
  onClose: () => void;
};

export default function InnovationDialog({ onClose }: Props) {
  const title = 'Innovation';
  const content = () => {
    return (
      <>
        <p>
          We can take your ideas, input from your domain experts, and your
          budget and produce an entire application (or suite of applications)
          from scratch. When complete, we offer a maintenance contract, or
          &#8212; via a copyright transfer agreement &#8212; can transfer the
          ownership (and support) of the product to your business.
        </p>
        <p>
          We are also available on a contract basis to support your existing
          application base. Rates can be hourly or fixed over longer periods.
          Click on the "Tech" button above to see what technologies we can
          support.
        </p>
      </>
    );
  };
  return <DialogBase title={title} content={content()} onClose={onClose} />;
}
