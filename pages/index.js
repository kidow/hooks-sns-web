import PropTypes from 'prop-types'
import { Form, Input, Button, Card, Icon, Avatar } from 'antd'

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
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
  return (
    <div>
      {dummy.isLoggedIn && (
        <Form encType="multipart/form-data" style={{ marginBottom: 20 }}>
          <Input.TextArea maxLength={140} placeholder="어떤 일이 있었나요?" />
          <div>
            <input type="file" multiple hidden />
            <Button>이미지 업로드</Button>
            <Button type="primary" style={{ float: 'right' }} htmlType="submit">
              짹짹
            </Button>
          </div>
          <div>
            {dummy.imagePaths.map((v, i) => (
              <div key={i} style={{ display: 'inline-block' }}>
                <img
                  src={'http://localhost:3065/' + v}
                  style={{ width: '200px' }}
                  alt={v}
                />
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            ))}
          </div>
        </Form>
      )}
      {dummy.posts.map((v, i) => (
        <Card
          key={i}
          actions={[
            <Icon type="retweet" key="retweet" />,
            <Icon type="heart" key="heart" />,
            <Icon type="message" key="message" />,
            <Icon type="ellipsis" key="ellipsis" />
          ]}
          cover={v.img && <img alt="post-image" src={v.img} />}
          extra={<Button>팔로우</Button>}
        >
          <Card.Meta
            description={v.content}
            title={v.user.nickname}
            avatar={<Avatar>{v.user.nickname[0]}</Avatar>}
          />
        </Card>
      ))}
    </div>
  )
}

Index.propTypes = {}

export default Index
