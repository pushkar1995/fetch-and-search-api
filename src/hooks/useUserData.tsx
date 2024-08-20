import { BASE_URL } from '../utils'

export const getUsers = () => () =>
    fetch (BASE_URL).then((res) => res.json())