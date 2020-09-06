// Ttypes
const ADD_CATEGORY = 'categories/add'
const SELECT_CATEGORY = 'categories/select'

/** 
 * CATEGORY MODEL
 * id
 * name
 */

// action creator
export const addCategory = payload => ({
	type: ADD_CATEGORY,
	payload: {
		...payload,
		id: Math.random().toString(36)
	}
	// the best ways to generate ids are with date algoritms
})

export const selectCategory = payload => ({
	type: SELECT_CATEGORY,
	payload
})

const initialState = {
	data: [{
		id: 1,
		name: 'Default'
		// the best ways to generate identifiers are with date algorithms, different hashes, or the auto-increment of relational databases like msql
	}],
	selected: 1
}

// REDUCER
export default function reducer(state = initialState, action) {
	console.log('dispatch reducer')
	console.log(action)
	switch (action.type) {
		case ADD_CATEGORY:
			// we will return a copy fo the current state
			// also we are going to replace the data property concatenating the payload with data
			return {
				...state,
				// data: state.data.concat(action.payload)
				data: [...state.data, action.payload]
				// destroctering
			}
		case SELECT_CATEGORY:
			return {
				...state,
				selected: action.payload
			}
		default:
			return state
	}
}
