import React, { useState, useEffect } from 'react';
import { SidebarFunc } from '../components';
import {parseFile, calculate, Group, Person } from '../api/logic';
import AddItem from '../components/AddItem';

const Addexpense = () => {
  const [newData, setNewData] = useState([[], 1]);
  const [finalData, setFinalData] = useState([]);
  const [finalBreakdown, setFinalBreakdown] = useState([]);
  const [hasSubmit, setSubmit] = useState(false);

  function handleSubmit() {
    const group = new Group([
      new Person('Sarang', 'Sarang'),
      new Person('Arnov', 'Arnov'),
      new Person('Dev', 'Dev'),
      new Person('Sagar', 'Sagar'),
      new Person('Sahil', 'Sahil'),
  ]);
  setSubmit(true);
    const breakdown = parseFile(finalData);
    console.log(finalData)
    console.log(breakdown)
    const totals = calculate(group, breakdown);
    setFinalBreakdown(totals);
    console.log(totals);
  }
  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    setFinalData(finalData => [...finalData, newData[0]])
  },[newData]);
 
  // const [showGroupTotal, setGroupTotal] = useState(false);
  // const [selectedCities, setSelectedCities] = useState(null);
    const my_group = [
        { name: 'Sarang', code: 'NY', item: "here"},
        { name: 'Arnov', code: 'RM' , item: "here"},
        { name: 'Dev', code: 'LDN', item: "here" },
        { name: 'Sahil', code: 'IST' , item: "here"},
        { name: 'Sagar', code: 'PRS' , item: "here"},
    ];
  return (
    <div className="flex h-screen bg-pink-200 overflow-auto">
      <SidebarFunc />
      <div className="max-w-md mx-auto rounded-lg md:max-w-xl pt-8">
          <h1 className='pb-4'>Group Name</h1>
          {[...Array(newData[1])].map((e, i) => (
            <>
              <AddItem group={my_group} passChildData={setNewData} numItems={newData[1]}/>
              <br />
            </>
          ))}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
      {hasSubmit ?
         <div className='bg-gray-200 text-black font-bold py-2 px-4 mt-4 rounded resize-none overflow-auto h-64 mb-8'>
          {finalBreakdown.groupBreakdown.map((e,i) => (
              <div className=''>
                {i===0 ? <div className='flex justify-center flex-row gap-8'>
                          <p>User</p>
                          <p>Total Spent ($)</p>
                        </div> : (null)}
                <div className='flex justify-center flex-row gap-16'>
                  <div>
                    {my_group[i].name}
                  </div>
                  <div>
                    {e.totalSpent}
                  </div>
                </div>
                {e.itemsPurchases.map((e1,j) => (
                  <div className='flex justify-center flex-row gap-4'>
                    <div>
                      {e1[0]}
                    </div>
                    <div>
                      {e1[1].toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
          ))}
          Total =
          {finalBreakdown.groupTotal.toFixed(2)}
        </div> 
        : (null)}
    </div>
      </div>
  );
}

export default Addexpense;
