import { ReactNode, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './HideWidget.css';

type HideWidgetState = 'open' | 'closed';

type Props = {
  label?: string;
  content?: JSX.Element | string;
  initialState?: HideWidgetState;
  children?: ReactNode;
};

export default function HideWidget({
  label,
  content,
  initialState,
  children,
}: Props) {
  const [showContent, setShowContent] = useState<boolean>(
    initialState === 'open',
  );
  const buttonClick = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="hw__container">
      <div className="hw__top">
        <button
          className="hw__expander"
          onClick={buttonClick}
          disabled={!children}
        >
          {showContent && <FaMinus />}
          {!showContent && <FaPlus />}
          {label && <span className="hw__buttontext">{label}</span>}
        </button>
        {content && <div className="hw__title">{content}</div>}
      </div>
      {showContent && <div className="hw__content">{children}</div>}
    </div>
  );
}
