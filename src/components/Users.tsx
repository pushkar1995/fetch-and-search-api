import { useState } from "react"
import { User } from "../interface"
import SearchBar from "./SearchBar"

interface UserProps {
    userData: User[]
 }

export default function Users (props: UserProps) {
    const [searchUser, setSearchUser] = useState('')
    console.log(searchUser)
    const { userData } = props


    // Filter users based on search input
    const filteredUsers = userData.filter((user) =>
      user.name.toLowerCase().includes(searchUser.toLowerCase()) ||
      user.username.toLowerCase().includes(searchUser.toLowerCase()) ||
      user.email.toLowerCase().includes(searchUser.toLowerCase())
    );

    return (
      <div className="flex flex-col m-16">
        <h1 className="font-bold flex justify-center mb-4 text-xl">USERS</h1>
        {/* <SearchBar 
          setSearchUser = {setSearchUser}
        /> */}

        <form className='w-[540px] relative'>
          <div className='relative'>
              <input 
                  type='search' 
                  placeholder='Search Users' 
                  className='w-full p-4 text-black rounded-md bg-slate-200 border-0' 
                  onChange={(e) => setSearchUser(e.target.value)}
              />
          </div>
        </form>

        <table className="table-auto mt-5">
          <thead className="h-20">
            <tr className="">
              <th className="border-2 p-8">Id:</th>
              <th className="border-2 p-8">Name:</th>
              <th className="border-2 p-8">Username:</th>
              <th className="border-2 p-8">Email:</th>
              <th className="border-2 p-8">Address(Street,Suite,City,Zipcode):</th>
              <th className="border-2 p-8">Phone:</th>
              <th className="border-2 p-8">Company Name:</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => { 
                return (
                    <tr key={user.id}>
                        <td className="border-2 p-8">{user.id}</td>
                        <td className="border-2 p-8">{user.name}</td>
                        <td className="border-2 p-8">{user.username}</td>
                        <td className="border-2 p-8">{user.email}</td>
                        <td className="border-2 p-8">
                        {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                        </td>
                        <td className="border-2 p-8">{user.phone}</td>
                        <td className="border-2 p-8">{user.company.name}</td>
                    </tr>
                )
            }) }
          </tbody>
        </table>
      </div>
    )
  }
  