import React from 'react';
import { Container } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';

class Footer extends React.Component {
    render() {
        return (
            <footer className={"footer"
                + (this.props.default ? " footer-default" : "")
            }>
                <Container fluid={this.props.fluid ? true : false}>
                    <nav>
                        <ul>
                            <li>
                                <a href="###">
                                    Simple Admin
                                </a>
                            </li>
                            <li>
                                <a href="###">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="###">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright">
                        Copyright &copy; {1900 + (new Date()).getYear()} Simple. All rights reserved.
                    </div>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    default: PropTypes.bool,
    fluid: PropTypes.bool
}

export default Footer;
