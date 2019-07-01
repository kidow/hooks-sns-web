import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import { useInput } from '../lib/hooks'
import { useCallback } from 'react'

const LoginForm = () => {
  const [id, onChangeId] = useInput('')
  const [password, onChangePassword] = useInput('')
  const onSubmit = useCallback(
    e => {
      e.preventDefault()
    },
    [id, password]
  )
  return (
    <Form onSubmit={onSubmit} style={{ padding: '10px' }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} required onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          type="password"
          required
          onChange={onChangePassword}
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
    </Form>
  )
}

export default LoginForm
