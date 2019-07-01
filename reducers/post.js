const initialState = {
  posts: []
}

const ADD_POST = 'ADD_POST'
const ADD_DUMMY = 'ADD_DUMMY'

export const addPost = {
  type: ADD_POST
}

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: 'hello',
    user: {
      id: 1,
      nickname: 'kidow'
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state
      }
    case ADD_DUMMY:
      return {
        ...state,
        posts: [action.data, ...state.posts]
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer
