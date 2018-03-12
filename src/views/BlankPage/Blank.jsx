import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {
    PanelHeader
} from 'components';

class Blank extends React.Component {
    render() {
        return (
            <div>
                <PanelHeader
                    size="sm"
                />
                <div className="content">
                    
                </div>
            </div>
        );
    }
}

export default Blank;
