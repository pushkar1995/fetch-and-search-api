

interface UserSearchBarProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSearchUser: any,
    searchUser: string
}

const UserSearchBar = (props: UserSearchBarProps) => {
    const { searchUser, setSearchUser } = props
    
  return (
    <form className='w-[540px] relative'>
          <div className='flex'>
              <input 
                  type='search' 
                  placeholder='Search Users' 
                  className='w-full p-4 text-black rounded-md bg-slate-200 border-0' 
                  onChange={(e) => setSearchUser(e.target.value)}
                  value={searchUser}
                />
          </div>
    </form>
  )
}

export default UserSearchBar