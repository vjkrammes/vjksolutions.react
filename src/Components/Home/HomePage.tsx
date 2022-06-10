import IntegrationDialog from '../../Dialogs/IntegrationDialog';
import AutomationDialog from '../../Dialogs/AutomationDialog';
import InnovationDialog from '../../Dialogs/InnovationDialog';
import './HomePage.css';

export default function HomePage() {
  const intmodal = document.getElementById('integrationmodal');
  const automodal = document.getElementById('automationmodal');
  const innmodal = document.getElementById('innovationmodal');
  function popUp(modal: HTMLElement | null) {
    if (modal) {
      // @ts-ignore
      modal.showModal();
    }
  }
  function closeModal(modal: HTMLElement | null) {
    if (modal) {
      // @ts-ignore
      modal.close();
    }
  }
  return (
    <div className="container">
      <dialog className="modal home__modal" id="integrationmodal">
        <IntegrationDialog onClose={() => closeModal(intmodal)} />
      </dialog>
      <dialog className="modal home__modal" id="automationmodal">
        <AutomationDialog onClose={() => closeModal(automodal)} />
      </dialog>
      <dialog className="modal home__modal" id="innovationmodal">
        <InnovationDialog onClose={() => closeModal(innmodal)} />
      </dialog>
      <div className="banner">
        <div className="bannertext">Integration, Automation, Innovation</div>
      </div>
      <div className="content">
        <div className="narrative">
          <div className="narrativetitle">
            Affordable software solutions for your business
          </div>
        </div>
        <div className="services">
          <div className="service" onClick={() => popUp(intmodal)}>
            <img src="/images/integration.png" alt="integration" />
            <div className="servicetag">Integration</div>
          </div>
          <div className="service" onClick={() => popUp(automodal)}>
            <img src="/images/automation.png" alt="automation" />
            <div className="servicetag">Automation</div>
          </div>
          <div className="service" onClick={() => popUp(innmodal)}>
            <img src="/images/innovation.png" alt="innovation" />
            <div className="servicetag">Innovation</div>
          </div>
        </div>
      </div>
    </div>
  );
}
