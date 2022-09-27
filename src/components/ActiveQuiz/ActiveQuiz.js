import React from 'react';
import './ActiveQuiz.css'
import AnswersList from '../AnswersList/AnswersList';

const ActiveQuiz = props => {

	return (
		<div className={'ActiveQuiz'}>
			<p className={'Question'}>
				<span>
					<strong>2.</strong> &nbsp;
					{props.question}
				</span>
				<small>4 из {props.quizLength}</small>
			</p>
			<AnswersList
				answers={props.answers}
				onAnswerClick={props.onAnswerClick}

			/>
		</div>
	);
};

export default ActiveQuiz;