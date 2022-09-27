import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => {
	return (
		<div className='AnswersList' >
			{props.answers.map((answer, i) => {
				return <AnswerItem
					text={answer.text}
					key={i}
					i={i}
					onAnswerClick={props.onAnswerClick}
				/>
			})
			}
		</div >
	)
};

export default AnswersList;