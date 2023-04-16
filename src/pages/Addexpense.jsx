import React, { useState, useRef } from 'react';
import SidebarFunc from '../components/SidebarFunc';
import {parseFile, calculate, Group, Person, Item} from '../api/logic';
import AddItem from '../components/AddItem';




function handleSubmit(e) {
  e.preventDefault();
  console.log("here");

  const form = e.target;
  const formData = new FormData(form);

  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson.postContent);
  const breakdown = parseFile(formJson.postContent);
  const group = new Group([
    new Person('Sarang', 'S'),
    new Person('Arnov', 'A'),
    new Person('Dev', 'D'),
    new Person('Sagar', 'P'),
    new Person('Sahil', 'G')
]);
  const totals = calculate(group, breakdown);
  console.log(totals);
  console.log("after");
}

const Addexpense = () => {
 
  // const [showGroupTotal, setGroupTotal] = useState(false);
  // const [selectedCities, setSelectedCities] = useState(null);
    const my_group = [
        { name: 'Sarang', code: 'NY', item: "here"},
        { name: 'Joy', code: 'RM' , item: "here"},
        { name: 'Dev', code: 'LDN', item: "here" },
        { name: 'Madhav', code: 'IST' , item: "here"},
        { name: 'ved', code: 'PRS' , item: "here"}
    ];
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <SidebarFunc />
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <h1 className=''>Group Name</h1>
          {/* <p>Enter text</p>
          <form method='post' onSubmit={handleSubmit}>
            <textarea name="postContent" rows={20} cols={40}/>
            <br />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form> */}
        <AddItem group={my_group} />
      </div>
    </div>
  );
}

export default Addexpense;
