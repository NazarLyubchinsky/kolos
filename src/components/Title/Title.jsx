import React from 'react'
import s from './index.module.scss'
const Title = ({ title, textColor, fontSize }) => {
	return (
		<h2 className={s.title}>
			{title} <span className={s.title__color}>{textColor}</span>
			<span style={{fontSize:`${fontSize}`}} className={s.subtitle}>	{title} {textColor}</span>
		</h2>
	)
}

export default Title