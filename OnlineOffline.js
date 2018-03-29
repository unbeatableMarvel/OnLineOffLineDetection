import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
export default class OnlineOffline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onLine: false,
            Offline:false
        }

    }

    componentDidMount() {
        //on browser load call the removeDuplicateFrArray function to show the details
        this.detectOnlineOffline();
    }
    //function to remove duplicate from the array
    detectOnlineOffline = () => {
        
        if (window.navigator.onLine) {
            this.setState({ onLine: true })
        }
        else {
            this.setState({ Offline: true })
        }



    }

    handleClose=()=>
    {
        
        this.setState({ onLine: false,Offline:false })
    }



    render() {
        const actions = [
            <FlatButton
              label="Close"
              primary={true}
              onClick={this.handleClose.bind(this)}
            />
          ];
       console.log("------------",this.state)
        return (
            <MuiThemeProvider>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '25px', marginBottom: '40px' }}>Online Offline Detection :</div>

                    <Dialog
                    actions={actions}
                        title={this.state.onLine ? "You are Online":"You are Offline"}
                        modal={true}
                        open={this.state.onLine || this.state.Offline}
                       
                        
                        />
                        <div style={{ fontWeight: 'bold', fontSize: '27px'}}>Please Refresh the browser to check Online Offline Status</div>
                      
                </div>
            </MuiThemeProvider>
        );
    }
}


