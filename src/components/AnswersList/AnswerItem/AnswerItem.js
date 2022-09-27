import React from 'react';
import './AnswerItem.css'

const AnswerItem = props => {
	const cls = ['AnswerItem']
	if (props.state) {
		console.log('add');
		cls.push(props.state)
	}

	return (
		<li
			className={cls.join(' ')}
			onClick={() => {
				props.onAnswerClick(props.i)
			}}
		>
			{props.text}
		</li>
	);
};

export default AnswerItem;