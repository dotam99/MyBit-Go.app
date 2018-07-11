import React from 'react';
import { Modal, Button } from 'carbon-components-react';
import '../styles/MetamaskAudit.css';
import MetamaskLogo from '../images/metamask.svg';

class MetamaskAudit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return(
          <Modal className="MetamaskAudit" open passiveModal>
            <p className="MetamaskAudit__title">
            To start investing, please <br/> connect your wallet.
            </p>
            <img className="MetamaskAudit__metamaskfox-image" src={MetamaskLogo} alt="Metamask" />
            <Button className="MetamaskAudit__metamaskinstall-button">
              Install Metamask and refresh
            </Button>
            <br/>
            <Button kind="secondary" className="MetamaskAudit__metamaskmanual-button">
              What is Metamask?
            </Button>
            <br/>
            <Button kind="ghost" className="MetamaskAudit__metamaskfriendlyguide-link">
              Try our handy step-by-step guide
            </Button>
          </Modal>
        )
    }

}

export default MetamaskAudit;