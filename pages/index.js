import PropTypes from 'prop-types'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../reducers/user'

const dummy = {
  isLoggedIn: true,
  posts: [
    {
      user: {
        id: 1,
        nickname: 'kidow'
      },
      content: '이집잘하네',
      img:
        'https://biskit-admin.s3.ap-northeast-2.amazonaws.com/1558271426463%EC%86%90%EC%88%98%EC%A7%91%20%EB%A9%94%EC%9D%B8%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg'
    }
  ]
}

const Index = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  console.log('user', user)
  useEffect(_ => {
    dispatch(loginAction)
  }, [])
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.posts.map((v, i) => (
        <PostCard key={i} post={v} />
      ))}
    </div>
  )
}

Index.propTypes = {}

export default Index
