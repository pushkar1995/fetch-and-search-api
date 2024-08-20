import { useState } from "react"
import { useQuery } from "react-query"
import { User } from "../../interface"
import UserSearchBar from "./UserSearchBar"
import UsersTable from "./UsersTable"
import { getUsers } from "../../hooks/useUserData"

export default function Users () {
  const { data } = useQuery("user", getUsers())
    const [searchUser, setSearchUser] = useState('')
    
    // Filter users based on search input
    const filteredUsers = (data || []).filter((user: User) => { 
      return user.name.toLowerCase().includes(searchUser.toLowerCase()) ||
        user.username.toLowerCase().includes(searchUser.toLowerCase()) ||
        user.email.toLowerCase().includes(searchUser.toLowerCase())
    });

    return (
      <div className="flex flex-col m-16">
        <h1 className="font-bold flex justify-center mb-8 text-xl">USERS</h1>
        <UserSearchBar 
          setSearchUser = {setSearchUser}
          searchUser = {searchUser}
        />
        <UsersTable
           filteredUsers = {filteredUsers}
        />
      </div>
    )
  }
  