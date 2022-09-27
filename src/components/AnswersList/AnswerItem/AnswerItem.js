import React from 'react';
import './AnswerItem.css'

const AnswerItem = props => {
	return (
		<li
			className='AnswerItem'
			onClick={() => {
				console.log(props.i);
				props.onAnswerClick(props.i)
			}}
		>
			{props.text}
		</li>
	);
};

export default AnswerItem;