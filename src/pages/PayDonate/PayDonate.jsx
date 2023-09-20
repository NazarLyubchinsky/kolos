import React from 'react'
import DropMenu from '../../components/DropMenu/DropMenu'
import Title from '../../components/Title/Title'
import s from './PayDonate.module.scss'
import PayDonateInput from './PayDonateInput/PayDonateInput'

import user from '../../assets/PayDonate/imgUser.svg'
import pay from '../../assets/PayDonate/imgPay.svg'
import message from '../../assets/PayDonate/message.svg'

const PayDonate = () => {
	return (
		<div className={s.donate}>
			<Title fontSize={'64px'} title={'ПОПОВНЕННЯ'} textColor={'ДОНАТ РАХУНКУ'} />
			<div className="container">
				<div className={s.donate__wrapper}>
					<div className={s.donate__wrapper_left}>
						<span className={s.text}>
							За поповнення особистого рахунку, <br />
						</span>
						<span>Ви зможете{" "}</span>
						<span className={s.textColor}>придбати</span>
						<span>
							:<br />
							<br />
						</span>
						<ul className={s.list}>
							<li className={s.list__item}>Різноманітні скіни;</li>
							<li className={s.list__item}>Ексклюзивні машини;</li>
							<li className={s.list__item}>Круті аксесуари:</li>
							<li className={s.list__item}>Цікаві прівелеї;</li>
							<li className={s.list__item}>Ігрову валюту</li>
						</ul>
						<br />
						<span className={s.bottom}>Та багато іншого.</span>
					</div>
					<div className={s.donate__wrapper_center} >
						<DropMenu />
						<PayDonateInput img={user} />
						<PayDonateInput img={pay} />
						<PayDonateInput img={message} />

						<button className={s.button}>Поповнити баланс</button>
						<p className={s.agree}>Продовжуючи, ви погоджуєтесь із <span className={s.agree__color}>договором оферти</span></p>
					</div>
					<div className={s.donate__wrapper_right}>sdd</div>
				</div>
			</div>
		</div>
	)
}

export default PayDonate