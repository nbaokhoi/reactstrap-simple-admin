import React from 'react';
// react plugin used to create charts
import { Line } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    PanelHeader
} from 'components';

import {
    dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
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
                    
                </div>
            </div>
        );
    }
}

export default Dashboard;
