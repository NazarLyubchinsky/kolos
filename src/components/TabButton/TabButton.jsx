import React from 'react'
import { Tab } from '@chakra-ui/react'
import s from './TabButton.module.scss'
// img

const TabButton = ({ name, img }) => {
	return (
		<Tab _selected={{ borderColor: '#318fff' }} className={s.tab}>
			<div className={s.tab__wrapper}>
				<img src={img} alt="info" />
				{name}
			</div>
		</Tab>
	)
}

export default TabButton