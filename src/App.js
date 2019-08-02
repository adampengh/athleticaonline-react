import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import './css/styles.scss';

// Components
import CloseIcon from './components/CloseIcon';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';

// Pages
import Dashboard from './pages/Dashboard';
import Athletes from './pages/Athletes';
import Evaluations from './pages/Evaluations';
import Treatments from './pages/Treatments';
import NotFound from './pages/NotFound';

import StyleGuide from './pages/StyleGuide';

class App extends Component {
    state = {
        hasError: false,
        footerText: "Footer Text"
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oh no! Something went wrong</h1>
        } else {
            return (
                <BrowserRouter>
                    <div className="app">
                        <Header title="Application" />
                        <Sidebar />
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/athletes" component={Athletes} />
                            <Route path="/evaluations" component={Evaluations} />
                            <Route path="/treatments" component={Treatments} />
                            <Route path="/styleguide" component={StyleGuide} />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer footerText={this.state.footerText} />
                    </div>
                    <Modal>
                        <div className="modal">
                            This is the modal window.
                            <button className="modal__close">
                                <CloseIcon />
                            </button>
                        </div>
                    </Modal>
                </BrowserRouter>
            );
        }
    }
}

export default App;
