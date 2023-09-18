import React from 'react'
import s from './header.module.scss'

// img
import logo from '../../assets/Header/logo.svg'

const Header = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<nav className={s.header__nav}>
					<img className={s.img} src={logo} alt="Kolos Role Play" />
					<div className={s.header__nav_rigth}>
						<ul className={s.list}>
							<li className={s.item}>Головна</li>
							<li className={s.item}>Форум</li>
							<li className={s.item}>Донат</li>
						</ul>
						<button className={s.btn}>Особистий кабінет</button>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header