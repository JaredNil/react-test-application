import React, { Component } from 'react';
import './Page.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Page extends Component {
	state = {
		activeQuestion: 0,
		page: [
			{
				question: 'Какого цвета небо?',
				rightAnswerId: 2,
				answers: [
					{ text: 'Вопрос 1', id: 1 },
					{ text: 'Вопрос 2', id: 2 },
					{ text: 'Вопрос 3', id: 3 },
					{ text: 'Вопрос 4', id: 4 },
					{ text: 'Вопрос 5', id: 5 },
				]
			}
		]
	}

	onAnswerClickHandler = (answerId) => {
		console.log('AnswerId', answerId);
	}


	render() {
		return (
			<div className={'Page'}>
				<div className={'Page-Wrapper'}>
					<h1>Ответьте на вопросы</h1>
					<ActiveQuiz
						answers={this.state.page[0].answers}
						question={this.state.page[0].question}
						onAnswerClick={this.onAnswerClickHandler}
						answerNumber={this.state.activeQuestion}
						quizLength={this.state.page.length}
					/>
				</div>
			</div>
		)
	}
}

export default Page