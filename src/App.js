import React, { Component } from 'react';
import { connect } from 'react-redux'
// we connect with the reducers
import Categories from './components/Categories'
import News from './components/News'
import './App.css';

class App extends Component {
	render() {
		const { categories } = this.props
		return (
			<div className="App">
				<Categories categories={categories} />
				<News />
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log(state)
	const { Categories: { data: categories } } = state
	// when we make a destroctering with more than 1 level Categories is not defined and within Categories we change de name (alias) of data and we can use it
	return {
		categories
	}
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
