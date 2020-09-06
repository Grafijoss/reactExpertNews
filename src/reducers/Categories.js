// Ttypes
const ADD_CATEGORY = 'categorys/add'

/** 
 * CATEGORY MODEL
 * id
 * name
 */

// action creator
const addCategory = payload => ({
	type: ADD_CATEGORY,
	payload,
	id: Math.random().toString(36)
	// the best ways to generate ids are with date algoritms
})

const initialState = {
	data: [{
		id: 1,
		name: 'Default'
		// the best ways to generate identifiers are with date algorithms, different hashes, or the auto-increment of relational databases like msql
	}]
}

export default function reducer(state = initialState, action) {
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
		default:
			return state
	}
}
