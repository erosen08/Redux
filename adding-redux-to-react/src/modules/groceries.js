const initialState = {
  groceryList: [],
  name: ''
}

const groceries = (state = initialState, action) => {
  switch(action.type) {
    case ADD_GROCERY:
      const newGroceries = state.groceryList.concat(action.grocery)
      return {...state, groceryList: newGroceries }
    default:
      return state
  }
}

const ADD_GROCERY = 'ADD_GROCERY'

const addNewGrocery = grocery => {
  return {
    type: ADD_GROCERY,
    grocery
  }
}

export {
  addNewGrocery,
  groceries
}
