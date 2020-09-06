import React, { Component } from 'react'

export default class NewsList extends Component {
	render() {
		const { news } = this.props
		console.log(news)
		return (
			<ul>
				{news.map(x => <li key={x.id}>{x.name}</li>)}
			</ul>
		)
	}
}