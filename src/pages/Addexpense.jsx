import React, { useState, useEffect } from 'react';
import { SidebarFunc } from '../components';
import { parseFile, calculate, Group, Person } from '../api/logic';
import AddItem from '../components/AddItem';
import { db, auth } from '../firebase'
import { query, getDocs, collection, where } from "firebase/firestore";
import { Dropdown } from 'primereact/dropdown';
import { useLocation } from 'react-router-dom'
        

const Addexpense = (props) => {
  const location = useLocation()
  // const { groupName } = location.state
  const [newData, setNewData] = useState([[], 1]);
  const [finalData, setFinalData] = useState([]);
  const [finalBreakdown, setFinalBreakdown] = useState([]);
  const [hasSubmit, setSubmit] = useState(false);
  const [groupNames, setGroupNames] = useState([])
  let [myGroup, setMyGroup] = useState({})
  const [temp, setTemp] = useState(null)
  const [users, setUsers] = useState([])
  let [myGroupUserNames, setMyGroupUserNames] = useState([])

  function handleSubmit() {
    // const group = new Group([
    //   new Person('Sarang', 'Sarang'),
    //   new Person('Arnov', 'Arnov'),
    //   new Person('Dev', 'Dev'),
    //   new Person('Sagar', 'Sagar'),
    //   new Person('Sahil', 'Sahil'),
    // ]);
    console.log(users)
    console.log(users[0].name)
    console.log(users[0].uid)
    const group = new Group(users.map(e => new Person(e.name.stringValue, e.name.stringValue, e.uid.stringValue)));
    setSubmit(true);
    const breakdown = parseFile(finalData);
    // console.log(finalData)
    // console.log(breakdown)
    const totals = calculate(group, breakdown);
    setFinalBreakdown(totals);
    console.log(totals);
  }
  useEffect(() => {
    (async () => {
      try {
        const q = query(collection(db, "groups"), where("users", "array-contains", auth.currentUser.uid))
        const docs = (await getDocs(q)).docs;
        const groups = docs.map(e => e._document.data.value.mapValue.fields)
        setGroupNames(groups.map(e => ({'name': e.name.stringValue, 'code': e.name.stringValue})))
      } catch (e) {
        console.log(e)
      }
    })()
    setFinalData(finalData => [...finalData, newData[0]])
  }, [newData, myGroup]);

  const handleDropdownChange = async (selectedOption) => {
    setTemp(selectedOption)

    const q = query(collection(db, "groups"), where("name", "==", selectedOption.name))
    const docs = (await getDocs(q)).docs
    setMyGroup(docs['0']._document.data.value.mapValue.fields)
    myGroup = docs['0']._document.data.value.mapValue.fields
    console.log(myGroup)
    const myGroupUids = myGroup.users.arrayValue.values.map(e => e.stringValue)
    console.log(myGroupUids)
    console.log(collection(db, "users"))
    console.log(collection(db, "groups"))
    const q1 = query(collection(db, "users"), where("uid", "in", myGroupUids));
    const docs1 = (await getDocs(q1)).docs;
    setUsers(docs1.map(e => e._document.data.value.mapValue.fields))
    setMyGroupUserNames(users.map(e => e.name.stringValue))
  };

  return (
    <div className="flex h-screen bg-pink-200">
      <SidebarFunc />
      <div className="max-w-md mx-auto rounded-lg md:max-w-xl pt-16">
        <Dropdown 
          value={temp}
          // value={myGroup? (myGroup.name ? {name: myGroup.name.stringValue, code: ''}: groupNames.length ? groupNames[0]: { name: '', code: '' }) : (groupNames.length ? groupNames[0]: { name: '', code: '' })} 
          onChange={(e) => handleDropdownChange(e.value)} 
          options={groupNames} 
          optionLabel="name" 
          placeholder="Select a Group" 
          className="w-full md:w-14rem" 
        />
        {[...Array(newData[1])].map((e, i) => (
          <>
            <AddItem group={myGroupUserNames} passChildData={setNewData} numItems={newData[1]} />
            <br />
          </>
        ))}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
        {hasSubmit ?
          <div>
            {Object.keys(finalBreakdown.groupBreakdown).map((e, i) => (
              <div className='flex items-center flex-row gap-4'>

              </div>
            ))}
          </div>
          : (null)}
      </div>
    </div>
  );
}

export default Addexpense;
