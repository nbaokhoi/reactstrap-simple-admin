import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table,
} from 'reactstrap';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    PanelHeader
} from 'components';

import { tasks } from 'variables/general.jsx';

class Blank extends React.Component {
    render() {
        return (
            <div>
                <PanelHeader
                    size="sm"
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

export default Blank;
