import { Menu, Input } from 'antd'

export default ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">Nodebird</Menu.Item>
        <Menu.Item key="profile">프로필</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  )
}
