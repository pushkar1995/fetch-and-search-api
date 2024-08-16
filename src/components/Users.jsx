

const Users = () => {
  return (
    <div className="flex flex-col m-16">
      <h1 className="font-bold flex justify-center mb-4 text-xl">USERS</h1>
      <table className="table-auto border-2">
        <thead className="h-20">
          <tr>
            <th className="border-2 p-8">Name:</th>
            <th className="border-2 p-8">Username:</th>
            <th className="border-2 p-8">Email:</th>
            <th className="border-2 p-8">Address(Street,Suite,City,Zipcode):</th>
            <th className="border-2 p-8">Phone:</th>
            <th className="border-2 p-8">Company Name:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border-2 p-8"></th>
            <th className="border-2 p-8"></th>
            <th className="border-2 p-8"></th>
            <th className="border-2 p-8"></th>
            <th className="border-2 p-8"></th>
            <th className="border-2 p-8"></th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Users