import React from 'react'
import s from './header.module.scss'
import { Link } from 'react-router-dom';


// img
import logo from '../../assets/Header/logo.svg'

const Header = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<nav className={s.header__nav}>
					<Link to=''>
						<img className={s.img} src={logo} alt="Kolos Role Play" />
					</Link>
					<div className={s.header__nav_rigth}>
						<ul className={s.list}>
							<li className={s.item}>Головна</li>
							<li className={s.item}>Форум</li>
							<Link to='donate'>	<li className={s.item}>Донат</li></Link>
						</ul>
						<Link to='/profile' className={s.btn}>Особистий кабінет</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header