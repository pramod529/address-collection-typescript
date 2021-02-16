import React from 'react';
import logo from '../logo.png';
import '../App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { connect } from 'react-redux'
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';
import ReactHtmlParser from 'react-html-parser';
const DisplayAllAddress = ({ resdentAddress, propertyAddress, employeeAddress,history }) => {
    const back = () => {
        history.push("/employmentAddress")
    }
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React Application</h2>
            </div>
            <div className="App-intro">

                <Card>
                    <Panel header="Resident Address">
                        <p>{ReactHtmlParser(`<table><tr><td><b>Street Number</b></td><td>${resdentAddress.streetNumber} </td></tr><tr><td><b>Street Name</b></td><td> ${resdentAddress.streetName}</td></tr><tr><td> <b>City</b></td><td> ${resdentAddress.city}</td></tr><tr><td> <b>Province</b></td><td> ${resdentAddress.state.name}</td></tr><tr><td> <b>Code</b></td><td> ${resdentAddress.code}</td></tr></table>`)}</p>
                    </Panel>
                    <Panel header="Property Address">                
                        <p>{ReactHtmlParser(`<table><tr><td><b>Employement Type</b></td><td> ${propertyAddress.employment.name}</td></tr><tr><td><b>Street Number</b></td><td>${propertyAddress.streetNumber} </td></tr><tr><td><b>Street Name</b></td><td> ${propertyAddress.streetName}</td></tr><tr><td> <b>City</b></td><td> ${propertyAddress.city}</td></tr><tr><td> <b>Province</b></td><td> ${propertyAddress.state.name}</td></tr><tr><td> <b>Code</b></td><td> ${propertyAddress.code}</td></tr></table>`)}</p>
                    </Panel>
                    <Panel header="Employment Address">               
                        <p>{ReactHtmlParser(`<table><tr><td><b>Current Employment</b></td><td> ${employeeAddress.currentEmployment} </td></tr><tr><td> <b>Previous Employment</b></td><td> ${employeeAddress.previousEmploment} </td></tr><tr><td><b>Street Number</b></td><td>${employeeAddress.streetNumber} </td></tr><tr><td><b>Street Name</b></td><td> ${employeeAddress.streetName}</td></tr><tr><td> <b>City</b></td><td> ${employeeAddress.city}</td></tr><tr><td> <b>Province</b></td><td> ${employeeAddress.state.name}</td></tr><tr><td> <b>Code</b></td><td> ${employeeAddress.code}</td></tr></table>`)}</p>
                    </Panel>
                </Card>
                <Card>
                    <div className="p-grid p-align-end vertical-container">
                        <div className="p-col">
                            <div className="box"><Button label="Back" icon="" onClick={() => back()} /></div>
                        </div>
                        <div className="p-col">
                            <div className="box"></div>
                        </div>
                        <div className="p-col">
                            <div className="box"></div>
                        </div>
                    </div>

                </Card>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        resdentAddress: state.addressReducer,
        propertyAddress: state.propertyAddressReducer,
        employeeAddress: state.employmentAddressReducer,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayAllAddress);



