import { Component } from "react";

import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component{
    constructor (props){
        super(props);
        this.state = {
            data: [
                {
                    name: 'Babi',
                    salary: 1000,
                    increase: false,
                    rise: false,
                    id: 1
                },
                {
                    name: 'Bobby',
                    salary: 300,
                    increase: false,
                    rise: false,
                    id: 2
                },
                {
                    name: 'Gabbi',
                    salary: 500,
                    increase: true,
                    rise: false,
                    id: 3
                }
            ]
        }
        this.maxId = 4;
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (name, salary) => {
        const newObj = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => ({
            data: [...data, newObj]
        }))
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))

    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }

    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={data}
                    onDelete = {this.deleteItem}
                    onToggleIncrease = {this.onToggleIncrease}
                    onToggleRise = {this.onToggleRise}/>
                <EmployeesAddForm
                    onAdd = {this.addItem}/>
            </div>
        );
    }
}

export default App;