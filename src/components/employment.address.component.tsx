import React, { useState } from 'react';
import { Button } from 'primereact/button';
import logo from '../logo.png';
import '../App.scss';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { connect } from 'react-redux'
import submitEmpAddress from '../ActionCreators/employmentAddressAction'
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Dropdown } from 'primereact/dropdown';
const EmploymentAddress = ({ streetNumber, streetName, city, code, state, currentEmployment, previousEmploment, dispatch, history }) => {
    console.log('props', streetNumber)
    const [streetNumberValue, setStreetNumberValue] = useState(streetNumber);
    const [streetNameValue, setStreetNameValue] = useState(streetName);
    const [cityValue, setCityValue] = useState(city);
    const [codeValue, setCodeValue] = useState(code);
    const [selectedState, setSelectedState] = useState(state);
    const [currentEmploymentValue, setCurrentEmploymentValue] = useState(currentEmployment);
    const [previousEmplomentValue, setPreviousEmplomentValue] = useState(previousEmploment);

    /*useEffect(()=>{
        setFirstNameValue(firstName)
    },[])*/
    console.log('state', streetNumberValue);
    let states = [
        { name: 'Arizona', value: 'Arizona' },
        { name: 'California', value: 'California' },
        { name: 'Quebec', value: 'Quebec' },
        { name: 'Ohio', value: 'Ohio' },
        { name: 'Washington', value: 'Washington' }
    ];

    const submit = () => {
        dispatch(submitEmpAddress({ streetNumber: streetNumberValue, streetName: streetNameValue, city: cityValue, state: selectedState, code: codeValue, currentEmployment: currentEmploymentValue, previousEmploment: previousEmplomentValue }))
        history.push("/displayAllAddress")

    }
    const back = () => {
        history.push("/propertyAddress")
    }
    const onStateChange = (e) => {
        setSelectedState(e.value);
    }

    const validations = streetNumberValue !== '' && streetNumberValue.length > 2 && streetNameValue !== '' && streetNameValue.length > 2 && cityValue !== '' && cityValue.length > 2 && codeValue !== '' && codeValue.length > 2 && selectedState && selectedState.value !== '' && currentEmploymentValue !== '' && currentEmploymentValue.length > 2 && previousEmplomentValue !== '' && previousEmplomentValue.length > 2;
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React Application</h2>
            </div>
            <div className="App-intro">

                <Card>
                    <Panel header={<b>Employment Address</b>}>
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col-12 p-md-2">
                                <label htmlFor="streetNumber">Street Number</label>
                                <InputText id="streetNumber" type="text" value={streetNumberValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setStreetNumberValue(e.target.value)} />
                                {streetNumberValue && streetNumberValue.length < 3 && <small id="username-help" style={{ color: 'red' }} >Street Number should have minium 3 charcters.</small>}
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <label htmlFor="streetName">Street Name</label>
                                <InputText id="streetName" type="text" value={streetNameValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setStreetNameValue(e.target.value)} />
                                {streetNameValue && streetNameValue.length < 3 && <small id="username-help" style={{ color: 'red' }} >Street Name should have minium 3 charcters.</small>}
                            </div>

                            <div className="p-field p-col-12 p-md-5">
                                <label htmlFor="city">City</label>
                                <InputText id="city" type="text" value={cityValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCityValue(e.target.value)} />
                                {cityValue && cityValue.length < 3 && <small id="username-help" style={{ color: 'red' }} >City should have minium 3 charcters.</small>}
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="state">Provience</label>
                                <Dropdown inputId="state" value={selectedState} options={states} onChange={onStateChange} placeholder="Select" optionLabel="name" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="zip">Code</label>
                                <InputText id="zip" type="text" value={codeValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCodeValue(e.target.value)} />
                                {codeValue && codeValue.length < 3 && <small id="username-help" style={{ color: 'red' }} >Code should have minium 3 charcters.</small>}
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="currentEployment">Current Employment</label>
                                <InputText id="currentEployment" type="text" value={currentEmploymentValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCurrentEmploymentValue(e.target.value)} />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="previousEmploment">Previous Employment Type</label>
                                <InputText id="previousEmploment" type="text" value={previousEmplomentValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPreviousEmplomentValue(e.target.value)} />
                            </div>
                        </div>
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
                            <div className="box"><Button label="Next" disabled={validations ? false : true} icon={validations ? "pi pi-check" : ""} onClick={() => submit()} /></div>
                        </div>
                    </div>

                </Card>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state.employmentAddressReducer)
    return {
        streetNumber: state.employmentAddressReducer.streetNumber,
        streetName: state.employmentAddressReducer.streetName,
        city: state.employmentAddressReducer.city,
        state: state.employmentAddressReducer.state,
        code: state.employmentAddressReducer.code,
        currentEmployment: state.employmentAddressReducer.currentEmployment,
        previousEmploment: state.employmentAddressReducer.previousEmploment
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmploymentAddress);



