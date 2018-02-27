import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table,
} from 'reactstrap';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    PanelHeader, Stats, CardCategory, Tasks
} from 'components';

import { tasks } from 'variables/general.jsx';
import {
    dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
    dashboardShippedProductsChart, // Chart for Dashboard view - Shipped Products Card
    dashboardAllProductsChart, // Chart for Dashboard view - All products Card
    dashboard24HoursPerformanceChart, // Chart for Dashboard view - 24 Hours Performance Card
} from 'variables/charts.jsx'
class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <PanelHeader
                    size="lg"
                    content={
                        <Line data={dashboardPanelChart.data} options={dashboardPanelChart.options} />
                    }
                />
                <div className="content">
                    <Row>
                        <Col xs={12} md={4}>

                        </Col>
                        <Col xs={12} md={4}>

                        </Col>
                        <Col xs={12} md={4}>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>

                        </Col>
                        <Col xs={12} md={6}>

                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
