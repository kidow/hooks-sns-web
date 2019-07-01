import { Menu, Input, Button, Row, Col, Card, Avatar } from 'antd'
import Link from 'next/link'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'

const dummy = {
  nickname: 'kidow',
  post: [],
  followings: [],
  followers: [],
  isLoggedIn: false
}

const Layout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">Nodebird</Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={10}>
        <Col xs={12} md={6}>
          {dummy.isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={12} md={12}>
          {children}
        </Col>
        <Col xs={12} md={6}>
          세번째
        </Col>
      </Row>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
