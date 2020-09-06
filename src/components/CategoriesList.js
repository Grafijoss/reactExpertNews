import React, { Component } from 'react'

export default class CategoriesList extends Component {

	// currier function
	handleClick = id => () => {
		console.log('selectCategory 1')
		console.log(id)
		const { selectCategory } = this.props
		selectCategory(id)
	}

	render() {
		const { categories } = this.props
		return (
			<ul>
				{categories.map(x => <li
					onClick={this.handleClick(x.id)}
					key={x.id}>{x.name}
				</li>)}
			</ul>
		)
	}
}