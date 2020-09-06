// Ttypes
const ADD_NEWS = 'news/add'

/** 
 * NEW MODEL
 * id
 * name
 * category_id
 */

// action creator
export const addNews = payload => ({
	type: ADD_NEWS,
	payload: {
		...payload,
		id: Math.random().toString(36)
	}
	// the best ways to generate ids are with date algoritms
})

const initialState = {
	data: []
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NEWS:
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