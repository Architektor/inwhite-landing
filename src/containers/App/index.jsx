import React, { Component } from 'react';
import { parse as parseURL } from 'url';
import { parse as parseQueryString } from 'querystring';

import Home from '../Home';
import Portfolio from '../Portfolio';
import Services from '../Services';
import Contacts from '../Contacts';
import BriefModal from '../BriefModal';

import { AppContainer } from './styled';

class App extends Component {
  state = {
    briefModalOpen: false,
  };

  openBriefModal = () => {
    this.setState({ briefModalOpen: true })
    document.querySelector('body')
      .style.overflow = 'hidden';
  };

  closeBriefModal = () => {
    this.setState({ briefModalOpen: false });
    document.querySelector('body')
      .style.overflow = 'scroll';
  }

  handleBriefModalSubmit = (ev) => {
    ev.preventDefault();
    const uri = ev.target.baseURI;
    const parsed = parseURL(uri)
    const values = parseQueryString(parsed.query);
    console.log(values) // eslint-disable-line
    this.closeBriefModal();
  }

  render() {
    const { briefModalOpen } = this.state;

    return (
      <AppContainer>
        <Home />
        <Portfolio />
        <Services
          onCTAClick={this.openBriefModal}
        />
        <Contacts />
        <BriefModal
          isOpen={briefModalOpen}
          onClose={this.closeBriefModal}
          onSubmit={this.handleBriefModalSubmit}
        />
      </AppContainer>
    );
  }
}

export default App;
