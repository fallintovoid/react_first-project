import { Component } from "react";

import "./app.scss";
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
            ],
            term: '',
            filter: ''
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

    onSearch = (items, term) => {
        if (term.length === 0){
            return items;
        }
        return items.filter(item => {return item.name.includes(term)})
    }

    onGetValue = (term) => {
        this.setState({term})
    }
    
    onGetFilter = (items, filter) => {
        switch(filter){
            case 'rise': return items.filter(item=>item.rise)
            case 'moreThan1000': return items.filter(item=>item.salary > 1000)
            default: return items
        }
    }


    onGetFilterState = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const riseAmount = data.filter(item => item.increase).length;
        const visibleData = this.onGetFilter(this.onSearch(data, term), filter)

        return (
            <div className="app">
                <AppInfo
                employAmount = {data.length}
                employRise = {riseAmount}/>
                <div className="search-panel">
                    <SearchPanel
                    onGetValue={this.onGetValue}/>
                    <AppFilter
                    onGetFilterState={this.onGetFilterState}/>
                </div>
                <EmployeesList 
                    data={visibleData}
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