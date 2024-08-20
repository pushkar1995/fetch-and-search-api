// import { useQuery } from "react-query"
import Navbar from "../components/Navbar"
import Users from "../components/Users"
// import { getUsers } from "../hooks/useUserData"

export default function HomePage() {
    // const { data } = useQuery("user", getUsers())
  return (
    <>
        <Navbar />
        {/* <Users userData = {data} /> */}
        <Users />
    </>
  )
}