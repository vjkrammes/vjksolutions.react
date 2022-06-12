import { useEffect, useState } from 'react';
import IntegrationDialog from '../../Dialogs/IntegrationDialog';
import AutomationDialog from '../../Dialogs/AutomationDialog';
import InnovationDialog from '../../Dialogs/InnovationDialog';
import './HomePage.css';

export default function HomePage() {
  const [intModal, setIntModal] = useState<HTMLElement | null>(null);
  const [autoModal, setAutomodal] = useState<HTMLElement | null>(null);
  const [innModal, setInnModal] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const m1 = document.getElementById('integrationmodal');
    setIntModal(m1);
    const m2 = document.getElementById('automationmodal');
    setAutomodal(m2);
    const m3 = document.getElementById('innovationmodal');
    setInnModal(m3);
  }, []);
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
        <IntegrationDialog onClose={() => closeModal(intModal)} />
      </dialog>
      <dialog className="modal home__modal" id="automationmodal">
        <AutomationDialog onClose={() => closeModal(autoModal)} />
      </dialog>
      <dialog className="modal home__modal" id="innovationmodal">
        <InnovationDialog onClose={() => closeModal(innModal)} />
      </dialog>
      <div className="banner">
        <div className="bannertext">Integration, Automation, Innovation</div>
      </div>
      <div className="content">
        <div className="narrative">
          <div className="narrativetitle">
            Custom software solutions for your business
          </div>
        </div>
        <div className="services">
          <div className="service" onClick={() => popUp(intModal)}>
            <img src="/images/integration.png" alt="integration" />
            <div className="servicetag">Integration</div>
          </div>
          <div className="service" onClick={() => popUp(autoModal)}>
            <img src="/images/automation.png" alt="automation" />
            <div className="servicetag">Automation</div>
          </div>
          <div className="service" onClick={() => popUp(innModal)}>
            <img src="/images/innovation.png" alt="innovation" />
            <div className="servicetag">Innovation</div>
          </div>
        </div>
      </div>
    </div>
  );
}
