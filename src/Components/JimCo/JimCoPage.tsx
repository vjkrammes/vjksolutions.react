import { MdHome, MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import HideWidget from '../Widgets/Hide/HideWidget';
import DemoItemWidget from '../Widgets/DemoItem/DemoItemWidget';
import './JimCoPage.css';

export default function JimCoPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="heading">JimCo</div>
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
      <div className="content jp__content">
        <div className="jp__intro">
          The <span className="jp__jimco">JimCo Retailers</span> demo is a set
          of four web applications, three web sites and a web API back-end. For
          more information, see the sections below.
        </div>
        <HideWidget label="Arch" content="Overall architecture">
          <img
            src="/images/JimCoArchitecture.png"
            alt="JimCo Overall Architecture Diagram"
          />
        </HideWidget>
        <HideWidget label="API" content="Back-end API">
          <DemoItemWidget
            name="JimCo API"
            repo="https://github.com/vjkrammes/JimCo.API"
            url="https://jimcoapi.azurewebsites.net"
            authScheme="Bearer Tokens (JWT)"
            cicd="Azure DevOps"
          >
            <p>
              The API layer handles all interactions between the web pages and
              the JimCo database. It also handles authentication, and role-based
              authorization. There are four roles: Vendor, Employee, Manager and
              Admin.
            </p>
            <p>
              The API is written in C# version 10 using the ASP.Net Core 6
              framework. It is a single web API project backed by a multiple
              class libraries (see the architecture entry above for an overall
              diagram).
            </p>
          </DemoItemWidget>
        </HideWidget>
        <HideWidget label="Retail" content="Retail web site">
          <DemoItemWidget
            name="Retail Web Site"
            repo="https://github.com/vjkrammes/jimco.retailsite"
            url="https://jimcoretailsite.azurewebsites.net"
            authScheme="None"
            cicd="Azure Devops"
            colorScheme={{
              name: 'Greens',
              light: 'hsl(112 73% 73%)',
              lightAccent: 'hsl(140 71% 29%)',
              base: 'hsl(128 49% 51%)',
              darkAccent: 'hsl(140 71% 29%)',
              dark: 'hsl(150 90% 16%)',
              black: 'hsl(164 100% 6%)',
              white: 'hsl(165 100% 94%)',
            }}
          >
            <p>
              The retail web site mimics an online retail application, allowing
              users to select products and add them to their cart, and to check
              out once they have selected the products they want.
            </p>
            <p>
              For simplicity, no authentication is currently used beyond having
              the user select a pin when ordering. Authentication may be added
              in the future.
            </p>
            <p>The retail site is responsive down to 375 pixels.</p>
          </DemoItemWidget>
        </HideWidget>
        <HideWidget label="Portal" content="Employee portal">
          <DemoItemWidget
            name="Employee Portal"
            repo="https://github.com/vjkrammes/jimco.employeeportal"
            url="https://jimoemployeeportal.azurewebsites.net"
            authScheme="Auth0"
            cicd="Azure Devops"
            colorScheme={{
              name: 'Blues',
              light: 'hsl(208 82.2% 72.4%)',
              lightAccent: 'hsl(208 66.7% 55.3%)',
              base: 'hsl(208, 100%, 42.5%)',
              darkAccent: 'hsl(208 100% 27.6%)',
              dark: 'hsl(208 100% 17.6%)',
              black: 'hsl(208, 100%, 2.7%)',
              white: 'hsl(208 100% 96.7%)',
            }}
          >
            <p>
              The employee portal is designed for in-store use on company
              tablets or desktops, so is designed around a minimum 1024x768
              pixel display. Employees can search by product name or
              description, or by SKU. They can also "check out" a customer
              either in store or on the phone.
            </p>
            <p>
              Managers get additional capabilities like the management of
              Categories, Products, Vendors, and Employees. They can send
              notices to employees or groups of employees. They can examine
              pending orders and change order statuses. A Manager can also set
              (or remove) a banner message for the site as a whole.
            </p>
            <p>
              Admin users get all of the above plus the ability to examine logs.
            </p>
          </DemoItemWidget>
        </HideWidget>
        <HideWidget label="Portal" content="Vendor portal">
          <DemoItemWidget
            name="Vendor Portal"
            repo="https://github.com/vjkrammes/jimco.vendorportal"
            url="https://jimcovendorportal.azurewebsites.net"
            authScheme="Auth0"
            cicd="Azure Devops"
            colorScheme={{
              name: 'Golds',
              light: 'hsl(44.06 100% 74.9%)',
              lightAccent: 'hsl(41.32 100% 67.25%)',
              base: 'hsl(36.96 95.73% 54.12%)',
              darkAccent: 'hsl(31.52 93.13% 54.31%)',
              dark: 'hsl(34.39 75.85% 40.59%)',
              black: 'hsl(42.35 100% 6.67%)',
              white: 'hsl(40.8 100% 90.2%)',
            }}
          >
            The Vendor portal allows vendors to edit their contact information,
            set item costs (within limits), and adjust reorder amounts for their
            products (within limits)
          </DemoItemWidget>
        </HideWidget>
      </div>
    </div>
  );
}
