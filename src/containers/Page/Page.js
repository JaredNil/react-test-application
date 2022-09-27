import React, { Component } from 'react';
import './Page.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Page extends Component {
	state = {
		activeQuestion: 0,
		answerState: null, // {[id]: 'success' 'error'} 
		page: [
			{
				id: 0,
				question: 'Какого цвета небо?',
				rightAnswerId: 1,
				answers: [
					{ text: 'Вопрос 0', id: 0 },
					{ text: 'Вопрос 1', id: 1 },
					{ text: 'Вопрос 2', id: 2 },
					{ text: 'Вопрос 3', id: 3 },
					{ text: 'Вопрос 4', id: 4 },
					{ text: 'Вопрос 5', id: 5 },
				]
			},
			{
				id: 1,
				question: 'Год основания СПБ?',
				rightAnswerId: 1,
				answers: [
					{ text: '19', id: 0 },
					{ text: 'В8 1', id: 1 },
					{ text: 'Во51рос 2', id: 2 },
					{ text: 'Воп5415ос 3', id: 3 },
					{ text: '541596', id: 4 },
					{ text: '1954', id: 5 },
				]
			}, {
				id: 2,
				question: 'Кто я?',
				rightAnswerId: 1,
				answers: [
					{ text: 'Дебил', id: 0 },
					{ text: 'Не знаю', id: 1 },
					{ text: 'Не хочу знать', id: 2 },
					{ text: 'Никто', id: 3 },
					{ text: 'Самому бы знать', id: 4 },
					{ text: 'Аянами Рей', id: 5 },
				]
			}
		]
	}

	onAnswerClickHandler = (answerId) => {

		const question = this.state.page[this.state.activeQuestion]

		if (question.rightAnswerId === answerId) {

			this.setState({
				answerState: {
					[answerId]: 'success'
				}
			})

			const timeout = window.setTimeout(() => {
				if (this.isQuizFinished()) {
					console.log('finished');
				} else {
					this.setState({
						activeQuestion: this.state.activeQuestion + 1
					})
					this.render()
				}

				window.clearTimeout(timeout)
			}, 50)

		} else {
			this.setState({
				answerState: {
					[answerId]: 'error'
				}
			})

		}
	}

	isQuizFinished() {
		return this.state.activeQuestion + 1 === this.state.page.length
	}


	render() {
		return (
			<div className={'Page'}>
				<div className={'Page-Wrapper'}>
					<h1>Ответьте на вопросы</h1>
					<ActiveQuiz
						answers={this.state.page[this.state.activeQuestion].answers}
						question={this.state.page[this.state.activeQuestion].question}
						onAnswerClick={this.onAnswerClickHandler}
						answerNumber={this.state.activeQuestion + 1}
						quizLength={this.state.page.length}
						state={this.state.answerState}
					/>
				</div>
			</div>
		)
	}
}

export default Page