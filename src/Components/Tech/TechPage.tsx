import { MdHome } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './TechPage.css';

export default function TechPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="heading">Technology</div>
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
        <div className="tp__intro">
          We offer services featuring the following technologies:
        </div>
        <ul className="tp__outer">
          <li>
            Full Stack Web
            <ul className="tp__inner">
              <li>ASP.Net Core Blazor (C#)</li>
              <li>ASP.Net Core MVC (Model-View-Controller) (C#)</li>
              <li>PHP</li>
            </ul>
          </li>
          <li>
            Back End Web
            <ul className="tp__inner">
              <li>ASP.Net Core API (Application Programming Interface) (C#)</li>
              <li>PHP</li>
            </ul>
          </li>
          <li>
            Client Side Web
            <ul className="tp__inner">
              <li>
                React (specifically React functional components and hooks)
                (TypeScript/JavaScript)
              </li>
              <li>Blazor WebAssembly (C#)</li>
              <li>Angular (TypeScript/JavaScript)</li>
            </ul>
          </li>
          <li>
            Desktop GUI Application (Windows)
            <ul className="tp__inner">
              <li>Windows Presentation Foundation (WPF) (C#)</li>
            </ul>
          </li>
          <li>
            Desktop Console Application (Windows, Linux, Mac)
            <ul className="tp__inner">
              <li>C#</li>
              <li>Python</li>
            </ul>
          </li>
          <li>Other</li>
          <ul className="tp__inner">
            <li>COBOL</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
