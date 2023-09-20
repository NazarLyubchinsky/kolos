import React, { useState } from 'react'
import { Menu, MenuButton, MenuList, MenuItem, } from '@chakra-ui/react'
import s from './DropMenu.module.scss'

// img
import arrow from '../../assets/PayDonate/arrow.svg'
import server from '../../assets/PayDonate/imgServer.svg'


const DropMenu = () => {
	const [isRotatedImg, setIsRotatedImg] = useState(false);
	const toggleRotation = () => {
		setIsRotatedImg(!isRotatedImg);
	};
	return (
		<div onClick={toggleRotation} className={s.menu}>
			<Menu>
				<MenuButton className={s.menu__button} >
					<div className={s.menu__button_row}>
						<img src={server} alt="" />
						<p>Оберіть ігровий сервер</p>
						<img src={arrow} alt=""
						// className={isRotatedImg ? `${s.rotate__down}` : `${s.rotate__up}`}
						/>
					</div>
				</MenuButton>
				<MenuList>
					<MenuItem>Download</MenuItem>
					<MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
				</MenuList>
			</Menu>
		</div>
	)
}

export default DropMenu