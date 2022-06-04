import { Component } from "react";

import "./search-panel.scss";

class SearchPanel extends Component{
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    connectTerm = (e) => {
        this.setState({term: e.target.value});
        this.props.onGetValue(e.target.value);
    }

    render () {
        const {term} = this.state;
        return (
            <input 
            type="text" 
            className="form-control search-input"
            placeholder="Search the employee"
            onChange={this.connectTerm}
            value={term}/>
        );
    }
}

export default SearchPanel;