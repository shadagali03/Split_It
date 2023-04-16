const GroupComp = (props) => {
    return (
        <div class="box-border h-64 w-64 p-8 rounded-lg shadow-lg bg-pink-300">
            <p class="text-4xl font-bold ">{props.group['name'].stringValue}</p>
            {(props.group['users'].arrayValue.values).map((e, i) => (
                <p>{e.name.stringValue}</p>
            ))}
        </div>
    )
}

export default GroupComp