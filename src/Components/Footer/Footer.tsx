import { useNavigate } from 'react-router-dom';
import { MdPrivacyTip, MdInfo } from 'react-icons/md';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="f__container">
      <div className="f__privacy">
        <button
          className="headerfooterbutton"
          type="button"
          title="Privacy Policy"
          onClick={() => navigate('/Privacy')}
        >
          <span>
            <MdPrivacyTip /> Privacy
          </span>
        </button>
      </div>
      <div className="f__copyright">
        ©<span className="f__optional">&nbsp;Copyright</span> 2019-2022 VJK
        Solutions
        <span className="f__optional">, LLC. All Rights Reserved.</span>
      </div>
      <div className="f__about">
        <button
          className="headerfooterbutton"
          type="button"
          title="About this site"
          onClick={() => navigate('/About')}
        >
          <span>
            <MdInfo /> About
          </span>
        </button>
      </div>
    </div>
  );
}
