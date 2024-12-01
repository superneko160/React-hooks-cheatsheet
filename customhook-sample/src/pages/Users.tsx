import useFetchData from './../hooks/useFetchData'

type User = {
  id: string
  name: string
}

const Users = () => {
  const { data } = useFetchData('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <h1>ユーザ一覧</h1>
      <ul>
        {data.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
