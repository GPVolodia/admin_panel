// ------------------------------------
// Constants
// ------------------------------------
export const EDIT_USER = 'EDIT_USER'

// ------------------------------------
// Actions
// ------------------------------------
export function editUser (usersData) {
  return {
    type    : EDIT_USER,
    payload : usersData
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */


export const actions = {
  editUser,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [EDIT_USER]: (state, action) => {
    return action.payload
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
