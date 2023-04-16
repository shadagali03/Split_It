import React from 'react';
import SidebarFunc from '../components/SidebarFunc';
import { useState } from 'react';
import { db } from '../firebase'
import { query, getDocs, collection, where, addDoc} from "firebase/firestore";


const Groups = () => {
  const [createGroup, setCreateGroup] = useState(false)
  const [addEmailNum, setAddEmailNum] = useState(0)

  const createGroupDB = async () => {
    const emails = [...Array(addEmailNum)].map((e, i) => document.getElementById(`input${i}`).value)
    const q = query(collection(db, "users"), where("email", "in", emails));
    const docs = (await getDocs(q)).docs;
    const uids = docs.map(e => e._document.data.value.mapValue.fields.uid.stringValue)

    await addDoc(collection(db, "groups"), {
      name: document.getElementById('groupNameInput').value,
      users: uids,
      total: 0,
    });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-pink-200">
      <SidebarFunc />
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCreateGroup(true)}>
          Create Group
        </button>

        {
          createGroup ?
            <div>
              <input type="text" id='groupNameInput' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAddEmailNum(addEmailNum + 1)}>
                Add Email
              </button>
            </div>
          : (null)
        }

        {[...Array(addEmailNum)].map((e, i) => (
          <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <input type="text" id={`input${i}`} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
          </div>
        ))}

        {
          createGroup ?
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={createGroupDB}>
              Submit
            </button>
            : (null)
        }


      </div>
    </div>
  );
}

export default Groups;
