/* eslint-disable @typescript-eslint/no-explicit-any */
interface UserTableProps {
    filteredUsers: any
}

const UsersTable = (props: UserTableProps) => {
    const { filteredUsers } = props

  return (
    <>
        <table className="table-auto mt-5">
          <thead className="h-20">
            <tr className="">
              <th className="border-2">Id:</th>
              <th className="border-2">Name:</th>
              <th className="border-2">Username:</th>
              <th className="border-2">Email:</th>
              <th className="border-2">Address(Street,Suite,City,Zipcode):</th>
              <th className="border-2">Phone:</th>
              <th className="border-2">Company Name:</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user:any) => { 
                  return (
                      <tr key={user.id}>
                          <td className="border-2 p-4">{user.id}</td>
                          <td className="border-2 p-4">{user.name}</td>
                          <td className="border-2 p-4">{user.username}</td>
                          <td className="border-2 p-4">{user.email}</td>
                          <td className="border-2 p-4">
                          {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                          </td>
                          <td className="border-2 p-4">{user.phone}</td>
                          <td className="border-2 p-4">{user.company.name}</td>
                      </tr>
                )
            }) }
          </tbody>
        </table>
    </>
  )
}

export default UsersTable