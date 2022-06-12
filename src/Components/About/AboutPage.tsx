import { MdHome } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="heading">About</div>
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
        <div className="ap__item">
          This web site is written using{' '}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            TypeScript
          </a>
          ,{' '}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>{' '}
          version 18, and hand crafted{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            CSS
          </a>{' '}
          for styling.
        </div>
        <div className="ap__item">
          The code repository can be found on GitHub{' '}
          <a
            href="https://github.com/vjkrammes/vjksolutions.react"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </div>
        <div className="ap__item">
          The site is hosted on a{' '}
          <a
            href="https://azure.microsoft.com/en-us/"
            target="_blank"
            rel="noreferrer"
          >
            Microsoft Azure
          </a>{' '}
          web application.
        </div>
        <div className="ap__item">
          The site uses a back-end API to handle the sending of email from the
          "Contact Us" page. That API is written in{' '}
          <a
            href="https://docs.microsoft.com/en-us/dotnet/csharp/"
            target="_blank"
            rel="noreferrer"
          >
            C#
          </a>{' '}
          version 10 and{' '}
          <a
            href="https://dotnet.microsoft.com/en-us/"
            target="_blank"
            rel="noreferrer"
          >
            .Net Core
          </a>{' '}
          version 6. The back-end API is also hosted on a Microsoft Azure web
          application.
        </div>
        <div className="ap__item">
          The code repository for the API can be found on GitHub{' '}
          <a
            href="https://github.com/vjkrammes/vjksolutions.api"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </div>
        <div className="ap__item">
          This site uses{' '}
          <a href="https://mailgun.com" target="_blank" rel="noreferrer">
            Mailgun
          </a>{' '}
          for email delivery.
        </div>
      </div>
    </div>
  );
}
