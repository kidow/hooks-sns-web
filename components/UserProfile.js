import { Card, Avatar } from 'antd'

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">
          짹쨱
          <br />
          {dummy.post.length}
        </div>,
        <div key="twit">
          팔로잉
          <br />
          {dummy.followings.length}
        </div>,
        <div key="twit">
          팔로워
          <br />
          {dummy.followers.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
    </Card>
  )
}

export default UserProfile
