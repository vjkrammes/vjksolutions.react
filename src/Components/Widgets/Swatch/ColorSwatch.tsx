import { ColorScheme } from '../DemoItem/DemoItemWidget';
import './ColorSwatch.css';

type Props = {
  scheme: ColorScheme;
};

export default function ColorSwatch({ scheme }: Props) {
  return (
    <div className="cs__container">
      <div className="cs__name">{scheme.name}:</div>
      <div
        className="cs__swatch"
        style={{ backgroundColor: scheme.light }}
        title={`light: ${scheme.light}`}
      >
        &nbsp;
      </div>
      <div
        className="cs__swatch"
        style={{ backgroundColor: scheme.lightAccent }}
        title={`light accent: ${scheme.lightAccent}`}
      >
        &nbsp;
      </div>
      <div
        className="cs__swatch"
        style={{ backgroundColor: scheme.base }}
        title={`base: ${scheme.base}`}
      >
        &nbsp;
      </div>
      <div
        className="cs__swatch"
        style={{ backgroundColor: scheme.darkAccent }}
        title={`dark accent: ${scheme.darkAccent}`}
      >
        &nbsp;
      </div>
      <div
        className="cs__swatch"
        style={{ backgroundColor: scheme.dark }}
        title={`dark: ${scheme.dark}`}
      >
        &nbsp;
      </div>
      <div
        className="cs__swatch cs__spaceleft"
        style={{ backgroundColor: scheme.black }}
        title={`black: ${scheme.black}`}
      >
        &nbsp;
      </div>
      <div
        className="cs__swatch"
        style={{ backgroundColor: scheme.white }}
        title={`white: ${scheme.white}`}
      >
        &nbsp;
      </div>
    </div>
  );
}
