import React from 'react'
import s from './Footer.module.scss'
import { Link } from 'react-router-dom';

// img
import logo from '../../assets/Header/logo.svg'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<Link to=''>
				<img className={s.footer__img} src={logo} alt="logo" />
			</Link>
			<ul className={s.footer__list}>
				<li className={s.footer__item}>Договір оферти</li>
				<li className={s.footer__item}>Політика конфіденційності</li>
			</ul>
		</footer>
	)
}

export default Footer