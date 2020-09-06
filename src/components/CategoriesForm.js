import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class CategoriesForm extends Component {
	render() {
		const { handleSubmit } = this.props
		return (
			<form onSubmit={handleSubmit}>
				<Field name="name" component="input" placeholder="Category name" />
			</form>
		)
	}
}

export default reduxForm({
	form: 'category',
})(CategoriesForm)