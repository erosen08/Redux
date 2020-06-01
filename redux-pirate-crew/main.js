const { createStore } = Redux;

const initialState = {
  crew: [],
  walkedCrew: []
}

const crewReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CREW:
      const newCrewArray = state.crew.concat(action.newCrew)
      return Object.assign({}, state, {
        crew: newCrewArray
      })
    case DELETE_CREW:
      let newWalkedCrew = ''
      if (state.crew.length > 0) {
        newWalkedCrew = state.walkedCrew.concat(
        state.crew.shift())
      } else {
        newWalkedCrew = state.walkedCrew
      }
      return Object.assign({}, state, {
        crew: state.crew,
        walkedCrew: newWalkedCrew
      })
    default:
      return state;
  }
}

const newCrewForm = document.getElementById('new-pirate-form')

const ADD_CREW = 'ADD_CREW'

const addCrewToList = newCrew => {
  return {
    type: ADD_CREW,
    newCrew: newCrew
  }
}

newCrewForm.addEventListener('submit', () => {
  event.preventDefault();
  const newCrew = document.getElementById('name').value
  document.getElementById('name').value = ''
  store.dispatch(addCrewToList(newCrew))
})

const deleteButton = document.getElementById('walk-the-plank')

const DELETE_CREW = 'DELETE_CREW'

const deleteCrewMember = () => {
  return {
    type: DELETE_CREW,
  }
}

deleteButton.addEventListener('click', () => {
  event.preventDefault();
  store.dispatch(deleteCrewMember())
})

const store = createStore(crewReducer);
const crewList = document.getElementById('current-crew')
const walkedCrewList = document.getElementById('walked-crew')
const walkedCrewCount = document.getElementById('plank-walkers')

const render = () => {
  let newCrewList = ''
  let newWalkedCrewList = ''
  let walkedCount = 0

  console.log(store.getState().crew)
  store.getState().crew.forEach(name => {
    newCrewList += `<li>${name}</li>`
  })
  crewList.innerHTML = newCrewList

  console.log(store.getState().walkedCrew)
  store.getState().walkedCrew.forEach(name => {
    newWalkedCrewList += `<li>${name}</li>`
  })
  walkedCrewList.innerHTML = newWalkedCrewList

  if (newWalkedCrewList != '') {
    walkedCount = store.getState().walkedCrew.length
  }
  walkedCrewCount.innerHTML = walkedCount
}

render();
store.subscribe(render);
