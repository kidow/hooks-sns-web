import { Form, Input, Button } from 'antd'

const dummy = {
  imagePaths: []
}

const PostForm = () => {
  return (
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
  )
}

export default PostForm
