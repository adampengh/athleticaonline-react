import React, { Component } from 'react';
import {
    Redirect,
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

// CSS
import './css/styles.scss';

// Components
import CloseIcon from './components/icons/CloseIcon';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';

// Pages
import Dashboard from './pages/Dashboard';
import Athletes from './pages/Athletes';
import Athlete from './pages/Athlete';
import Evaluations from './pages/Evaluations';
import Treatments from './pages/Treatments';
import NotFound from './pages/NotFound';

import StyleGuide from './pages/StyleGuide';


const formatDate = (date, opt_separator) => {
    let formattedDate = new Date(date);
    let month = ('0' + (formattedDate.getMonth()+1)).slice(-2);
    let day = ('0' + (formattedDate.getDate()+1)).slice(-2);
    let year = formattedDate.getFullYear();
    if (opt_separator) {
        return `${month}${opt_separator}${day}${opt_separator}${year}`;
    }
    return `${month}-${day}-${year}`;
};

class App extends Component {
    state = {
        hasError: false,
        filters: {
            athletes: {
                active: true,
                archived: false
            }
        }
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    handleFilterChange = () => {

    }

    render() {
        if (this.state.hasError) {
            return <h1>Oh no! Something went wrong</h1>
        } else {
            return (
                <Router>
                    <div className="app">
                        <Sidebar title="Athletica" />
                        <Switch>
                            <Redirect exact from="/" to="dashboard" />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/athletes/athlete/:id" component={Athlete} />
                            <Route
                                path="/athletes"
                                render={() => <Athletes filters={this.state.filters.athletes}/>}  />
                            <Route
                                path="/evaluations"
                                render={() => <Evaluations formatDate={formatDate} />}
                            />
                            <Route
                                path="/treatments"
                                render={() => <Treatments formatDate={formatDate} />}
                            />
                            <Route path="/styleguide" component={StyleGuide} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    <Modal>
                        <div className="modal">
                            This is the modal window.
                            <button className="modal__close">
                                <CloseIcon />
                            </button>
                        </div>
                    </Modal>
                </Router>
            );
        }
    }
}

export default App;
