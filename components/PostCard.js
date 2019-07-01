import { Card, Icon, Button, Avatar } from 'antd'
import PropTypes from 'prop-types'

const PostCard = ({ post }) => {
  return (
    <Card
      key={post.createdAt}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
      cover={post.img && <img alt="post-image" src={post.img} />}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        description={post.content}
        title={post.user.nickname}
        avatar={<Avatar>{post.user.nickname[0]}</Avatar>}
      />
    </Card>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object
  })
}

export default PostCard
