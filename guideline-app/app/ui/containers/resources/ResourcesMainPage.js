import React from 'react';
import SubRoutesWrapper from '../../../utils/routing/subroutesWrapper.component';

import LeftNavigation from '../../components/left-navigation/LeftNavigation';

// import './styles.less';

class ResoucesMainPage extends React.Component {
    renderMainContent = () => {
        return (
            <article className="mainContent">
                Ressurser
            </article>
        );
    }

    renderSubRoute = () => {
        return (
            <article className="mainContent">
                <SubRoutesWrapper routes={this.props.routes} />
            </article>
        );
    }

    render(){
        return (
            <React.Fragment>
                <LeftNavigation />
                {
                    (window.location.hash !== '#/components') ? 
                    this.renderSubRoute() : 
                    this.renderMainContent()
                }
            </React.Fragment>
        );
    }
}

export default ResoucesMainPage;
