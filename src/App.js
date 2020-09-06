import React, { Component } from 'react';
import { connect } from 'react-redux'
// we connect with the reducers
import Categories from './components/Categories'
import News from './components/News'
import { addCategory, selectCategory } from './reducers/Categories'
import { reset } from 'redux-form'
import { addNews } from './reducers/News'
// import './App.css';

class App extends Component {
	render() {
		const {
			categories,
			addCategory,
			selectCategory,
			selected,
			news,
			addNews } = this.props
		return (
			<div className="App">
				<Categories
					categories={categories}
					addCategory={addCategory}
					selectCategory={selectCategory}
				/>
				<News
					selectedCategory={selected}
					news={news}
					addNews={addNews}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log('mapStateToProps')
	const { Categories: { data: categories, selected } } = state
	const { News: { data: news } } = state
	console.log(state)
	// when we make a destroctering with more than 1 level Categories is not defined and within Categories we change de name (alias) of data and we can use it
	return {
		categories,
		news: news.filter(x => x.categoryId === selected),
		selected
	}
}

// dispatch actions from reducers and set  them into this.props
const mapDispatchToProps = dispatch => ({
	addCategory: payload => {
		dispatch(addCategory(payload))
		dispatch(reset('category'))
		// import reset from redux-form and we will dispatch both actions
	},
	selectCategory: payload => dispatch(selectCategory(payload)),
	addNews: payload => {
		dispatch(addNews(payload))
		dispatch(reset('news'))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
