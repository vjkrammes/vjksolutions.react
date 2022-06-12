import { useState } from 'react';
import {
  MdComputer,
  MdContactMail,
  MdHome,
  MdOutlineDescription,
} from 'react-icons/md';
import './Header.css';

export default function Header() {
  const [state, setState] = useState<boolean>(false);
  return (
    <div className="h__container">
      <a className="h__logo" href="/">
        <img
          className="h__logoimage"
          src="/images/logo-64.png"
          alt="VJK Solutions Logo"
        />
        <span className="h__title">VJK Solutions</span>
      </a>
      <input
        type="checkbox"
        className="h__navtoggle"
        id="nav-toggle"
        checked={state}
        onChange={() => setState(!state)}
      />
      <nav>
        <ul>
          <li>
            <a href="/">
              <span>
                <MdHome /> Home
              </span>
            </a>
          </li>
          <li>
            <a href="/Demos">
              <span>
                <MdOutlineDescription /> Demos
              </span>
            </a>
          </li>
          <li>
            <a href="/Tech">
              <span>
                <MdComputer /> Tech
              </span>
            </a>
          </li>
          <li>
            <a href="/Contact">
              <span>
                <MdContactMail /> Contact&nbsp;Us
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="h__navtogglelabel">
        <span></span>
      </label>
    </div>
  );
}
