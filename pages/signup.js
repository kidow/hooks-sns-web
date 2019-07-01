import { useState, useCallback } from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
import { useInput } from '../lib/hooks'

export default () => {
  const [id, onChangeId] = useInput('')
  const [nick, onChangeNick] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [term, setTerm] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [termError, setTermError] = useState(false)

  const onSubmit = useCallback(e => {
    e.preventDefault()
    if (!term) return setTermError(true)
  }, [])

  const onChangePasswordCheck = useCallback(e => {
    setPasswordError(e.target.value !== password)
    setPasswordCheck(e.target.value)
  }, [])
  const onChangeTerm = useCallback(e => setTerm(e.target.checked), [])

  return (
    <Form onSubmit={onSubmit} style={{ padding: 10 }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} required onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-nick">닉네임</label>
        <br />
        <Input name="user-nick" value={nick} required onChange={onChangeNick} />
      </div>
      <div>
        <label htmlFor="user-pass">비밀번호</label>
        <br />
        <Input
          name="user-pass"
          type="password"
          value={password}
          required
          onChange={onChangePassword}
        />
      </div>
      <div>
        <label htmlFor="user-check">비밀번호확인</label>
        <br />
        <Input
          name="user-check"
          type="password"
          value={passwordCheck}
          required
          onChange={onChangePasswordCheck}
        />
        {passwordError && (
          <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다</div>
        )}
      </div>
      <div>
        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
          동의합니다.
        </Checkbox>
        {termError && (
          <div style={{ color: 'red' }}>약관에 동의하셔야 합니다</div>
        )}
      </div>
      <div style={{ marginTop: 10 }}>
        <Button type="primary" htmlType="submit">
          가입하기
        </Button>
      </div>
    </Form>
  )
}
