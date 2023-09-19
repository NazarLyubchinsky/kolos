import React from 'react'
import s from './index.module.scss'
const Title = ({ title, textColor }) => {
	return (
		<h2 className={s.title}>
			{title} <span className={s.title__color}>{textColor}</span>
			<span className={s.subtitle}>	{title} {textColor}</span>
		</h2>
	)
}

export default Title