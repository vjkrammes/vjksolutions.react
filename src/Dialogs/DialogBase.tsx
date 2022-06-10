import { CSSProperties } from 'react';
import { MdClose } from 'react-icons/md';
import './DialogBase.css';

type Props = {
  title: string;
  content: JSX.Element | string;
  onClose: () => void;
  contentStyle?: CSSProperties | undefined;
};

export default function DialogBase({
  title,
  content,
  onClose,
  contentStyle,
}: Props) {
  return (
    <div className="db__container">
      <div className="db__header">
        <div className="db__heading">{title}</div>
      </div>
      {content && (
        <div className="db__content" style={contentStyle || undefined}>
          {content}
        </div>
      )}
      <div className="buttoncontainer">
        <button className="primarybutton" type="button" onClick={onClose}>
          <MdClose /> Close
        </button>
      </div>
    </div>
  );
}
