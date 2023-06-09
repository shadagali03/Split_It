import React from 'react';
import { GroupComp, SidebarFunc } from '../components';
import { useState, useEffect } from 'react';
import { db, auth } from '../firebase'
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";


const Groups = () => {
  const [createGroup, setCreateGroup] = useState(false)
  const [addEmailNum, setAddEmailNum] = useState(0)
  const [groups, setGroups] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const q = query(collection(db, "groups"), where("users", "array-contains", auth.currentUser.uid))
        const docs = (await getDocs(q)).docs;
        const groups = docs.map(e => e._document.data.value.mapValue.fields)
        const users = {}
        groups.map(e => users[e.name.stringValue] = e.users.arrayValue.values)

        for (const key in users) {
          for (let i = 0; i < users[key].length; i++) {
            const user = users[key][i]
            const q = query(collection(db, "users"), where("uid", "==", user.stringValue));
            const docs = (await getDocs(q)).docs;
            users[key][i] = docs[0]._document.data.value.mapValue.fields
          }
        }
        setGroups(groups)
      } catch (e) {
        console.log(e)
      }
    })()
  }, []);


  const createGroupDB = async () => {
    const emails = [...Array(addEmailNum)].map((e, i) => document.getElementById(`input${i}`).value)
    const q = query(collection(db, "users"), where("email", "in", emails));
    const docs = (await getDocs(q)).docs;
    const uids = docs.map(e => e._document.data.value.mapValue.fields.uid.stringValue)
    uids.push(auth.currentUser.uid)

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

        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCreateGroup(true)}>
          Create Group
        </button>

        {
          createGroup ?
            <div>
              <label for="groupNameInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Group Name</label>
              <input type="text" id='groupNameInput' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Group Name" />
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAddEmailNum(addEmailNum + 1)}>
                Add Email
              </button>
            </div>
            : (null)
        }

        {[...Array(addEmailNum)].map((e, i) => (
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <input type="text" id={`input${i}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="name@flowbite.com" />
          </div>
        ))}

        {
          createGroup ?
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={createGroupDB}>
              Submit
            </button>
            : (null)
        }

        <div className="grid grid-cols-2 gap-16 mt-10">
          {groups.map((group, i) => (
            <GroupComp key={i} group={group} />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Groups;
