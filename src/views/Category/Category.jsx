import React from 'react';
import { Link } from 'react-router-dom';
import {
    Row, Col,
    Card, CardHeader, CardTitle, CardBody, CardFooter,
    Table,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    ButtonGroup, Button,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

import {
    PanelHeader, CardCategory, Stats, Regular
} from 'components';

import { thead, tbody } from 'variables/general';

class Category extends React.Component {
    render() {
        return (
            <div>
                <PanelHeader
                    size="sm"
                />
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle>Category List</CardTitle>
                                    <div className="dropdown button">
                                        <Button className="btn-icon" color="success">
                                            <i className="now-ui-icons ui-1_simple-add"></i>
                                        </Button> {' '}
                                        <Button className="btn-simple btn-icon" color="default">
                                            <i className="now-ui-icons ui-1_settings-gear-63"></i>
                                        </Button> {' '}
                                        <Button className="btn-icon" color="danger">
                                            <i className="now-ui-icons ui-1_simple-remove"></i>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                {
                                                    thead.map((prop, key) => {
                                                        return (
                                                            <th key={key} className='h6'>{prop}</th>
                                                        );
                                                    })
                                                }
                                                <th className="text-right">
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tbody.map((prop, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            {
                                                                prop.data.map((prop, key) => {
                                                                    return (
                                                                        <td key={key}>{prop}</td>
                                                                    );
                                                                })
                                                            }
                                                            <td className="text-right">
                                                                <Button className="btn-simple btn-icon" color="info">
                                                                    <i className="now-ui-icons travel_info"></i>
                                                                </Button> {' '}
                                                                <Button className="btn-simple btn-icon" color="warning">
                                                                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                                                                </Button> {' '}
                                                                <Button className="btn-simple btn-icon" color="danger">
                                                                    <i className="now-ui-icons ui-1_simple-remove"></i>
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </Table>
                                </CardBody>
                                <CardFooter>
                                    <Stats>
                                        {[
                                            { i: "now-ui-icons arrows-1_refresh-69", t: "Updated yesterday at 11:59 PM" }
                                        ]}
                                    </Stats>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Category;
