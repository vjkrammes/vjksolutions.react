import { useNavigate } from 'react-router-dom';
import { MdHome, MdInfo } from 'react-icons/md';
import './DemosPage.css';

export default function DemosPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="heading">Demos</div>
        <button
          className="primarybutton headerbutton-left"
          onClick={() => navigate('/')}
        >
          <span>
            <MdHome /> Home
          </span>
        </button>
      </div>
      <div className="content">
        <div className="dp__item">
          <div className="dp__header">
            <img src="/images/jimcologo-64.png" alt="JimCo Logo" />{' '}
            <span>JimCo Retailers</span>
          </div>
          <p>
            A collection of 3 web pages and one web API that simulate the web
            presence of a retail store. The web sites include:
            <ul>
              <li>A Retail Site</li>
              <li>An Employee Portal</li>
              <li>A Vendor Portal</li>
            </ul>
          </p>
          <p>
            The three web sites are written using React, and the API is written
            in C# using ASP.Net Core.
          </p>
          <p>
            The retail site is responsive down to 375 pixels, while the two
            portals are designed for a minimum of 1024x768 pixels (for in-store
            tablets and desktops).
          </p>
          <button
            className="squarebutton dp__moreinfo"
            onClick={() => navigate('/JimCo')}
            title="More Information"
          >
            <MdInfo />
          </button>
        </div>
        <div className="dp__item">
          <div className="dp__header">
            <img src="/images/book-512.png" alt="Ledger" />{' '}
            <span>Ledger 8</span>
          </div>
          <p>
            A desktop application used to track bills:
            <ul>
              <li>Due dates</li>
              <li>Payment dates, amount, references, balances, etc.</li>
              <li>Identities associated with on-line accounts</li>
            </ul>
          </p>
          <p>
            Ledger version 8 is written in C# and uses a Microsoft SQL database
            to store its data.
          </p>
          <p>
            It uses Windows Presentation Foundation (WPF) for its user interface
          </p>
          <p>
            The code repository can be found{' '}
            <a
              href="https://github.com/vjkrammes/ledger8"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
