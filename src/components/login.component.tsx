import React, { useState } from 'react';

import logo from '../logo.png'
import '../App.scss';

import { connect } from 'react-redux'
import submitLogin from '../ActionCreators/loginActionCreator';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import { TextField, Grid, Container, Button } from '@material-ui/core';


const Login = ({ userName, password, dispatch, history }) => {
    console.log('props', userName)
    const [userNameValue, setUserNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    /*useEffect(()=>{
        setFirstNameValue(firstName)
    },[])*/


    const login = () => {
        dispatch(submitLogin({ userName: userNameValue, password: passwordValue }))
        //history.push("/propertyAddress")
    }

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React Application</h2>
            </div>
            <div className="App-intro">
                <Container fixed style={{ maxWidth: 300 + 'px' }}>
                    <Grid container spacing={2}>
                        <Grid container item xs={12} spacing={3}>

                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                            <Card>
                                <CardHeader title={<b>Login</b>} />

                                <CardContent>
                                    <TextField id="userName" label="User Name" value={userNameValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserNameValue(e.target.value)} />  <br />
                                    <TextField id="password" label="Password" type="password" value={passwordValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)} />

                                </CardContent>
                                <CardActions>

                                    <Button variant="contained" color="primary" onClick={() => login()}>
                                        Login
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid container item xs={12} spacing={3}>

                        </Grid>
                    </Grid>
                </Container>
                <Grid container spacing={3}>
                    <Grid item xs>

                    </Grid>
                    <Grid item xs>

                    </Grid>
                    <Grid item xs>

                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>

                    </Grid>
                    <Grid item xs={6}>
                        {userName}
                    </Grid>
                    <Grid item xs>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state.loginReducer)
    return {
        userName: state.loginReducer.userName,
        password: state.loginReducer.password
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);



