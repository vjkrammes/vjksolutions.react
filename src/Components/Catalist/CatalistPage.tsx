import { MdHome, MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import HideWidget from '../Widgets/Hide/HideWidget';
import './CatalistPage.css';

export default function CatalistPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="heading">Catalist</div>
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
      <div className="content cat__content">
        <div className="cat__intro">
          The Catalist app is a native Android to-do app with a few twists:
          <ul>
            <li>
              Multiple named lists are supported, and each list can (optionally)
              contain its own list of categories.
            </li>
            <li>
              Items can be assigned to a category, or may be uncategorized.
              Categorized and uncategorized items are supported in the same
              list.
            </li>
            <li>
              Items can be assigned to another person. The list of assignees is
              app-wide, not per-list.
            </li>
            <li>
              Items can have a budget attached, and the amount spent so far can
              also be tracked.
            </li>
            <li>Items can have a due date assigned</li>
            <li>
              The first time the app is run, it will create a default app called
              &quot;Groceries&quot; with a pre-set list of categories. The
              categories can be added to, deleted, and renamed as desired. The
              entire list can be deleted, as long as there is a new list - there
              must always be at least one list. The app remembers the last list
              opened and will reopen that list when it is launched.
            </li>
          </ul>
          <div className="cat__operations">
            <p>
              The app menu can be accessed by swiping in from the left side of
              the screen, or by clicking the "hamburger" (three horizontal
              lines) button in the upper right portion of the screen. The
              instructions below assume that you have opened the app menu, then
              choose the options listed for each item.
            </p>
            <div className="cat__o__header">Common Operations:</div>
            <ul className="cat__o__outerlist">
              <li>
                Assignees
                <ul className="cat__o__innerlist">
                  <li>
                    Adding:
                    <span className="cat__o__instructions">
                      Manage Assignees | + button
                    </span>
                  </li>
                  <li>
                    Renaming:
                    <span className="cat__o__instructions">
                      Manage Assignees | long press on assignee
                    </span>
                  </li>
                  <li>
                    Deleting (Assignees with current assignments cannot be
                    deleted):
                    <span className="cat__o__instructions">
                      Manage Assignees | trash-can button next to name
                    </span>
                  </li>
                  <li>
                    See current assignments (if any):
                    <span className="cat__o__instructions">
                      Manage Assignees | click on assignee
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                Categories:
                <ul className="cat__o__innerlist">
                  <li>
                    Adding:
                    <span className="cat__o__instructions">
                      Manage Categories | + button
                    </span>
                  </li>
                  <li>
                    Renaming:
                    <span className="cat__o__instructions">
                      Manage Categories | long press on category
                    </span>
                  </li>
                  <li>
                    Deleting (Categories with assigned items cannot be deleted):
                    <span className="cat__o__instructions">
                      Manage Categories | trash-can button next to name
                    </span>
                  </li>
                  <li>
                    See current items (if any):
                    <span className="cat__o__instructions">
                      Manage Categories | click on category
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                Lists:
                <ul className="cat__o__innerlist">
                  <li>
                    Create:{' '}
                    <span className="cat__o__instructions">New List</span>
                  </li>
                  <li>
                    Open:{' '}
                    <span className="cat__o__instructions">Open List</span>
                  </li>
                  <li>
                    Delete (the currently open list cannot be deleted):{' '}
                    <span className="cat__o__instructions">
                      Open List | trash-can button next to list name
                    </span>
                  </li>
                  <li>
                    Information:
                    <span className="cat__o__instructions">
                      List Information
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                Items:
                <ul className="cat__o__innerlist">
                  <li>
                    Create simple item (just name and optional category):
                    <span className="cat__o__instructions">+ button</span>
                  </li>
                  <li>
                    Create advanced item (all settings available):
                    <span className="cat__o__instructions">
                      + button | three vertical dots button
                    </span>
                  </li>
                  <li>
                    Edit item:
                    <span className="cat__o__instructions">Click on item</span>
                  </li>
                  <li>
                    Complete item:
                    <span className="cat__o__instructions">
                      Click on checkmark next to item
                    </span>
                  </li>
                  <li>
                    Delete item:
                    <ol>
                      <li>
                        <span>
                          Click on item then choose trash-can button at top of
                          screen
                        </span>
                      </li>
                      <li>
                        If the item has been completed, click the trash-can
                        button next to the item name
                      </li>
                    </ol>
                  </li>
                  <li>
                    Auto-delete items on complete:
                    <span className="cat__o__instructions">
                      Settings | Delete on Complete
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <HideWidget label="Installing" content="Installing Catalist">
            <p>
              Catalist is not (yet) available on the Google Play store. To
              install the app, please follow these steps:
            </p>
            <ol className="cat__installing">
              <li>
                Open the Settings app on your phone
                <img
                  className="cat__screenshot"
                  src="/images/catalist/settings.png"
                  alt="Settings Icon"
                />
              </li>
              <li>
                Choose the "Biometrics and security" option:
                <img
                  className="cat__screenshot"
                  src="/images/catalist/bio.png"
                  alt="Biometrics and security"
                />
              </li>
              <li>
                Choose "Install unknown apps":
                <img
                  className="cat__screenshot"
                  src="/images/catalist/installunknown.png"
                  alt="Install unknown apps"
                />
              </li>
              <li>
                Choose the app you will use to download the app file. In this
                example, Chrome will be used. Find that app in the list:
                <img
                  className="cat__screenshot"
                  src="/images/catalist/chrome1.png"
                  alt="Chrome number 1"
                />
              </li>
              <li>
                Click the switch to enable the installation of unknown apps from
                Chrome:
                <img
                  className="cat__screenshot"
                  src="/images/catalist/chrome2.png"
                  alt="Chrome number 2"
                />
              </li>
              <li>
                In the app above (again, in this example Chrome) enter the
                following URL:{' '}
                <a href="https://vjkdemostorage.blob.core.windows.net/applications/catalist.apk">
                  https://vjkdemostorage.blob.core.windows.net/applications/catalist.apk
                </a>
              </li>
              <li>
                Once the file is downloaded (it is approximately 9.26 MB), you
                will be prompted to install the app. Choose Install:
                <img
                  className="cat__screenshot"
                  src="/images/catalist/install.png"
                  alt="Install app"
                />
              </li>
              <li>
                Launch the app. You will be presented with the default list:
                <img
                  className="cat__screenshot"
                  src="/images/catalist/app.png"
                  alt="Catalist App screenshot"
                />
              </li>
              <li>
                (Optional) Go back to "Install unknown apps" (Step 5 above) and
                now disable the option.
              </li>
            </ol>
          </HideWidget>
        </div>
      </div>
    </div>
  );
}
