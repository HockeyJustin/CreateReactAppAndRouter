import React from 'react';


export default class ApiCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            valueToSend: 1
        };

        this.callApi = this.callApi.bind(this)
    }

    callApi = () => {

        fetch('https://jsonplaceholder.typicode.com/posts/' + this.state.valueToSend).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            this.setState({
                message: 'Post Title ' + data.id + ': ' + data.title
            });
        }).catch(err => {
            console.log("ERROR: " + err);
        })
    };

    handleChange(e) {
        this.setState({
            valueToSend: e.target.value 
        });
        console.log('handle change called')
    };
   

    render() {

        

        var inputStyle = {
            width: '100px'
        };

        return (
            <div>
                <label>Get Sample Data</label>
                <br/>
                <input type="number" style={inputStyle} value={this.state.valueToSend}
                    onChange={(e) => { this.handleChange(e) }} />
                <button onClick={this.callApi}>Call API</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}