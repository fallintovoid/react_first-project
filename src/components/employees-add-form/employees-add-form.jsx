import './employees-add-form.scss';
import { Component } from 'react';

class EmployeesAddForm extends Component{
    constructor (props){
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onInputValue = e => {
        this.setState(({
            [e.target.name]: e.target.value
        }))
    }

    takeData = (e) => {
        e.preventDefault();
        if (this.state.name.length > 2 && this.state.salary > 0){
            this.props.onAdd(this.state.name, this.state.salary)
            this.setState({
                name: '',
                salary: ''
            })
        } else {
            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    render() {
        const {name, salary} = this.state;
        

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.takeData}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name='name'
                        onChange={this.onInputValue}
                        value={name}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name='salary'
                        onChange={this.onInputValue}
                        value={salary}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            >Добавить</button>
                </form>
            </div>
        );
    }
}
export default EmployeesAddForm;