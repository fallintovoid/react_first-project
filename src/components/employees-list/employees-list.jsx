import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.scss';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                {...itemProps} 
                key={id} 
                onDelete = {() => onDelete(id)}
                onToggleIncrease = {() => onToggleIncrease(id)}
                onToggleRise = {() => onToggleRise(id)}
                increase = {item.increase}
                rise = {item.rise}/>
        );
    })
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;