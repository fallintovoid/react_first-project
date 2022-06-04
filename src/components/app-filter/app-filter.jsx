import { Component } from 'react';

import './app-filter.scss';

class AppFilter extends Component{
    constructor(props) {
        super(props);
        this.classNameNotActive = "btn btn-outline-light";
        this.classNameActive = "btn btn-light";
        this.state = {
            btns: [
                {
                    value: "All employees",
                    classes: this.classNameActive,
                    filter: 'all'
                },
                {
                    value: "На повышение",
                    classes: this.classNameNotActive,
                    filter: 'rise'
                },
                {
                    value: "З/П больше 1000$",
                    classes: this.classNameNotActive,
                    filter: 'moreThan1000'
                }
            ]
        }
    }

    changeActive = (id) => {
        this.setState(({btns}) => ({
            btns: btns.map(item => {
                if (item.filter === id){
                    this.props.onGetFilterState(item.filter);
                    return {...item, classes: this.classNameActive}
                }
                return {...item, classes: this.classNameNotActive};
            })
        }))

    }

    render() {
        const {btns} = this.state;

        const buttons = btns.map(item => {
            const {filter} = item;
            return (
            <button 
                className={item.classes}
                onClick={() => this.changeActive(filter)}
                key={filter}
                type="button">
                    {item.value}     
            </button>)
        })
        

        return (
            <div className="btn-group">
               {buttons}
            </div>
        )
    }
}

export default AppFilter;