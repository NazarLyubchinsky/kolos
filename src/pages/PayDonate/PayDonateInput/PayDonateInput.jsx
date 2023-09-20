import React, { useState } from 'react'
import s from './PayDonateInput.module.scss'


const PayDonateInput = ({img}) => {
	const [isActive, setIsActive] = useState(false);

	const handleFocus = () => {
		setIsActive(true);
	};

	const handleBlur = () => {
		setIsActive(false);
	};

	return (
		<div  className={`${s.input}`} style={{ borderColor: isActive ? '#318fff' : '' }}>
			<img src={img} alt="" />
			<input type="text" placeholder='Введіть ваш Nick_Name '
				onFocus={handleFocus}
				onBlur={handleBlur} />
		</div>
	)
}

export default PayDonateInput