import { MdHome, MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import HideWidget from '../Widgets/Hide/HideWidget';
import DemoItemWidget from '../Widgets/DemoItem/DemoItemWidget';
import './BeansPage.css';

export default function BeansPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="heading">Beans</div>
        <button
          className="primarybutton headerbutton-left"
          onClick={() => navigate('/Demos')}
        >
          <span>
            <MdArrowBack /> Back
          </span>
        </button>
        <button
          className="secondarybutton headerbutton-right"
          onClick={() => navigate('/')}
        >
          <span>
            <MdHome /> Home
          </span>
        </button>
      </div>
      <div className="content bp__content">
        <div className="bp__intro">
          The <span className="bp__beans">Beans</span> demo is a game which
          models a commodities exchange. There are eight differently colored
          beans that players can trade amongst themselves. Beans can also be
          bought from and sold to The Exchange. It consists of three parts, see
          the sections below.
        </div>
        <HideWidget label="Arch" content="Overall Architecture">
          <img
            src="/images/BeansArchitecture.png"
            alt="Overall Beans Architecture Diagram"
          />
        </HideWidget>
        <HideWidget label="API" content="Back-end API">
          <DemoItemWidget
            name="Beans API"
            repo="https://github.com/vjkrammes/Beans"
            url="https://beansapi.azurewebsites.net"
            authScheme="Bearer Tokens (JWT)"
            cicd="Azure DevOps"
          >
            <p>
              The API layer handles all interactions between the web site, the
              background function, and the database. It also handles
              authentication (via Auth0) and role-based authorization. There are
              two roles: User and Admin.
            </p>
            <p>
              The API is written in C# version 10 using the ASP.Net Core 6
              framework. It is a single Web API project backed by multiple class
              libraries (see the architecture item, above).
            </p>
          </DemoItemWidget>
        </HideWidget>
        <HideWidget label="Web" content="Web Page">
          <DemoItemWidget
            name="Web Front End"
            repo="https://github.com/vjkrammes/beans.ui"
            url="https://beans.azurewebsites.net"
            authScheme="Auth0"
            cicd="Azure Devops"
            colorScheme={{
              name: 'greens',
              light: 'hsl(112.2 73.53% 73.33%)',
              lightAccent: 'hsl(127.87 48.8% 50.98%)',
              base: 'hsl(139.81 70.67% 29.41%)',
              darkAccent: 'hsl(150.41 90.12% 15.88%)',
              dark: 'hsl(164.21 100% 7.45%)',
              black: 'hsl(164 100% 5.88%)',
              white: 'hsl(164.65 100% 94%)',
            }}
          >
            <p>
              The web front end handles all the interaction between the players.
              They can purchase beans from, or sell beans to The Exchange. They
              can offer beans for trade, or can fulfill others&apos; trade
              requests.
            </p>
            <p>
              The web site is written in TrueScript using React functional
              components and hooks. It is responsive down to 375 pixels.
            </p>
          </DemoItemWidget>
        </HideWidget>
        <HideWidget label="BG" content="Background Function">
          <DemoItemWidget
            name="Background Function"
            repo="https://github.com/vjkrammes/Beans.Background"
            authScheme="API Key"
            cicd="Azure Devops"
          >
            <p>
              The background function runs as a serverless Azure Function at
              3:00 every morning. It is responsible for calling an endpoint in
              the API that updates the bean prices each day.
            </p>
            <p>It is written in C# version 10 and .Net 6.</p>
          </DemoItemWidget>
        </HideWidget>
        <HideWidget
          label="EXCH"
          content={<span className="theexchange">The Exchange</span>}
        >
          <div className="bp__spaced">
            <p>
              <span className="theexchange">The Exchange</span> is a shadowy
              cabal about which very little is known.
            </p>
            <p>
              <span className="theexchange">The Exchange</span> holds all beans
              not currently held by players. Players may buy beans from or sell
              beans to <span className="theexchange">The Exchange</span> at the
              current price for each bean. Players may also take out loans from{' '}
              <span className="theexchange">The Exchange</span> up to a
              (configurable) limit. Players may borrow and repay loans as
              desired within these limits.
            </p>
            <p>
              <span className="theexchange">The Exchange</span> appears to have
              unlimited funds, the sources of which are closely-held secrets.
            </p>
          </div>
        </HideWidget>
        <HideWidget label="Ƀ" content="BeanBux">
          <div className="bp__spaced">
            <p>
              The games operates using a fictional currency called
              &quot;BeanBux&quot;, with the currency symbol &apos;
              <span className="bp__currency">Ƀ</span>&apos;. This was done
              deliberately to ensure that there is no chance of any players
              mistaking the in-game currency for any other currency, real or
              imagined.
            </p>
          </div>
        </HideWidget>
      </div>
    </div>
  );
}
