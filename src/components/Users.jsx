
export default function Users (props) {
    const { userData } = props


    // console.log(userData)

    return (
      <div className="flex flex-col m-16">
        <h1 className="font-bold flex justify-center mb-4 text-xl">USERS</h1>
        <table className="table-auto">
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
            {userData?.map((user) => { 
                console.log(userData)
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
  