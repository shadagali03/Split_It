import { Link } from 'react-router-dom';

const GroupComp = (props) => {
    return (
        <div className="box-border h-64 w-64 p-8 rounded-lg shadow-lg bg-pink-300">
            <p className="text-4xl font-bold text-purple-500">{props.group['name'].stringValue}</p>
            {(props.group['users'].arrayValue.values).map((e, i) => (
                <p>{e.name.stringValue}</p>
            ))}
            <Link className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" to="/addExpense" state={{ groupName: props.group['name'].stringValue }}>
                Add Expense
            </Link>
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAddEmailNum(addEmailNum + 1)}>
                Add Reciept
            </button> */}
        </div>
    )
}

export default GroupComp