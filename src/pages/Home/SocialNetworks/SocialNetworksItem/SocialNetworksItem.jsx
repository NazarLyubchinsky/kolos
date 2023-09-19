import React from 'react'
import s from './SocialNetworksItem.module.scss'
import { Link } from 'react-router-dom';


const SocialNetworksItem = ({ icon, title, subtitle, styleTwoItem, styleLastItem }) => {
	return (
		<Link style={{ ...styleTwoItem, ...styleLastItem }} className={s.item}>
			<div>
				<h4 className={s.item__title}>{title}</h4>
				<p className={s.item__subtitle}>{subtitle}</p>
			</div>
			<img className={s.item__img} src={icon} alt="" />
		</Link>
	)
}

export default SocialNetworksItem