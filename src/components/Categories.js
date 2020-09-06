import React, { Component } from 'react'
import CategoriesForm from './CategoriesForm'
import CategoriesList from './CategoriesList'

export default class Categories extends Component {
	render() {
		const { categories, addCategory } = this.props
		return (
			<React.Fragment>
				<CategoriesForm onSubmit={addCategory} />
				<CategoriesList categories={categories} />
			</React.Fragment>
		)
	}
}