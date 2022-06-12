import { ReactNode } from 'react';
import ColorSwatch from '../Swatch/ColorSwatch';
import './DemoItemWidget.css';

export type ColorScheme = {
  name: string;
  light: string;
  lightAccent: string;
  base: string;
  darkAccent: string;
  dark: string;
  black: string;
  white: string;
};

type Props = {
  name: string;
  repo: string;
  url: string;
  authScheme?: string;
  cicd?: string;
  colorScheme?: ColorScheme;
  children?: ReactNode;
};

export default function DemoItemWidget({
  name,
  repo,
  url,
  authScheme,
  cicd,
  colorScheme,
  children,
}: Props) {
  return (
    <div className="diw__container">
      <div className="diw__item">
        <div className="diw__label">Name</div>
        <div className="diw__value">{name}</div>
      </div>
      <div className="diw__item">
        <div className="diw__label">Repo</div>
        <div className="diw__value">
          <a href={repo} target="_blank" rel="noreferrer">
            {repo}
          </a>
        </div>
      </div>
      <div className="diw__item">
        <div className="diw__label">URL</div>
        <div className="diw__value">
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </div>
      </div>
      <div className="diw__item">
        <div className="diw__label">Authentication</div>
        <div className="diw__value">{authScheme || 'None'}</div>
      </div>
      <div className="diw__item">
        <div className="diw__label">CI / CD</div>
        <div className="diw__value">{cicd}</div>
      </div>
      {colorScheme && (
        <div className="diw__item">
          <div className="diw__label">Color Scheme</div>
          <div className="diw__value">
            <ColorSwatch scheme={colorScheme} />
          </div>
        </div>
      )}
      {children && <div className="diw__body">{children}</div>}
    </div>
  );
}
