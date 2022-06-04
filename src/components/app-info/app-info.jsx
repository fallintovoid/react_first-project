import './app-info.scss';

const AppInfo = ({employAmount, employRise}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании</h1>
            <h2>Общее число сотрудников: {employAmount}</h2>
            <h2>Премию получат: {employRise}</h2>
        </div>
    );
}
export default AppInfo;