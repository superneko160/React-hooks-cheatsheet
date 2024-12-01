import useFetchData from './../hooks/useFetchData'

type Post = {
  id: string
  title: string
}

const Posts = () => {
  const { data } = useFetchData('https://jsonplaceholder.typicode.com/posts')
  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {data.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
