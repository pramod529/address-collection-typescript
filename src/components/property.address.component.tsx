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
import submitPropAddress from '../ActionCreators/propertyAddressAction'
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Dropdown } from 'primereact/dropdown';
import { Message } from 'primereact/message';
const PropertyAddress = ({ streetNumber,streetName, city, code,state, employment, dispatch, history }) => {
    console.log('props', streetNumber)
    const [streetNumberValue, setStreetNumberValue] = useState(streetNumber);
    const [streetNameValue, setStreetNameValue] = useState(streetName);
    const [cityValue, setCityValue] = useState(city);
    const [codeValue, setCodeValue] = useState(code);
    const [selectedState, setSelectedState] = useState(state);
    const [selectedEmployment, setSelectedEmployment] = useState(employment);
    const [businessvalidationFlag, setBusinessvalidationFlag] = useState(false);
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
    let employmentTypes = [
        { name: 'Employed', value: 'Employed' },
        { name: 'Student', value: 'Student' },
        { name: 'Retired', value: 'Retired' },
    ];
    const submitPropertyAddress = () => {
        setBusinessvalidationFlag(false);
        if(selectedState.value !== 'Quebec' && selectedEmployment.value === 'Employed') {
            dispatch(submitPropAddress({streetNumber:streetNumberValue,streetName:streetNameValue,city:cityValue,state:selectedState,code:codeValue,employment:selectedEmployment}));
            history.push("/employmentAddress")
        } else {
            setBusinessvalidationFlag(true);
        }

    }
    const back = () => {
        history.push("/")
    }
    const onStateChange = (e) => {
        setSelectedState(e.value);
    }
    const onEmploymentChange = (e) => {
        setSelectedEmployment(e.value);
    }
    const validations = streetNumberValue !== '' && streetNumberValue.length > 2 && streetNameValue !== '' && streetNameValue.length > 2 && cityValue !== '' && cityValue.length > 2 && codeValue !== '' && codeValue.length > 2  && selectedState && selectedState.value !== '' && selectedEmployment && selectedEmployment.value !== '';
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React Application</h2>
            </div>
            <div className="App-intro">
               
                <Card>
                   {businessvalidationFlag === true && <div className="p-col-12 p-md-12">
                        <Message severity="error" text="Employment type other than employee or provience as Quebec are not allowed" />
                    </div>}
                    <Panel header={<b>Property Address</b>}>
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col-12 p-md-2">
                                <label htmlFor="streetNumber">Street Number</label>
                                <InputText id="streetNumber" type="text" value={streetNumberValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setStreetNumberValue(e.target.value)}/>
                                {streetNumberValue && streetNumberValue.length < 3 && <small id="username-help" style={{color:'red'}} >Street Number should have minium 3 charcters.</small>}
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <label htmlFor="streetName">Street Name</label>
                                <InputText id="streetName" type="text" value={streetNameValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setStreetNameValue(e.target.value)}/>
                                {streetNameValue && streetNameValue.length < 3 && <small id="username-help" style={{color:'red'}} >Street Name should have minium 3 charcters.</small>}
                            </div>

                            <div className="p-field p-col-12 p-md-5">
                                <label htmlFor="city">City</label>
                                <InputText id="city" type="text" value={cityValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCityValue(e.target.value)}/>
                                {cityValue && cityValue.length < 3 && <small id="username-help" style={{color:'red'}} >City should have minium 3 charcters.</small>}
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="state">Provience</label>
                                <Dropdown inputId="state" value={selectedState} options={states} onChange={onStateChange} placeholder="Select" optionLabel="name" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="zip">Code</label>
                                <InputText id="zip" type="text" value={codeValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCodeValue(e.target.value)}/>
                                {codeValue && codeValue.length < 3 && <small id="username-help" style={{color:'red'}} >Code should have minium 3 charcters.</small>}
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="employment">Employment Type</label>
                                <Dropdown inputId="employment" value={selectedEmployment} options={employmentTypes} onChange={onEmploymentChange} placeholder="Select" optionLabel="name" />
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
                            <div className="box"><Button label="Next" disabled={validations ? false : true} icon={validations ? "pi pi-check" : ""} onClick={() => submitPropertyAddress()} /></div>
                        </div>
                    </div>
                    
                </Card>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state.propertyAddressReducer)
    return {
        streetNumber: state.propertyAddressReducer.streetNumber,
        streetName: state.propertyAddressReducer.streetName,
        city: state.propertyAddressReducer.city,
        state: state.propertyAddressReducer.state,
        code: state.propertyAddressReducer.code,
        employment: state.propertyAddressReducer.employment
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PropertyAddress);



