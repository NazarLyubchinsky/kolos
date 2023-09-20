import React from 'react'
import s from './PanelTab.module.scss'

const PanelTab = () => {
	return (
		<div className={s.panel}>
			<div className={s.panel__grid}>
				<div className={s.item0}>
					<p className={s.item__text_color}>Номер акаунта</p>
					<p className={s.item__subtitle}>
						1
					</p>
				</div>
				<div className={s.item1}>	<p className={s.item__text_color}>Номер акаунта</p>
					<p className={s.item__subtitle}>
						**-**-*****
					</p></div>
				<div className={s.item2}>	<p className={s.item__text_color}>Номер акаунта</p>
					<p className={s.item__subtitle}>
						**-**-*****
					</p></div>
				<div className={s.item3}>	<p className={s.item__text_color}>Номер акаунта</p>
					<p className={s.item__subtitle}>
						**-**-*****
					</p></div>
				<div className={s.item4}>	<p className={s.item__text_color}>Номер акаунта</p>
					<p className={s.item__subtitle}>
						**-**-*****
					</p></div>
				<div className={s.item5}>	<p className={s.item__text_color}>Номер акаунта</p>
					<p className={s.item__subtitle}>
						**-**-*****
					</p></div>
				<div className={s.item6}>	<p className={s.item__text_color}>Номер акаунта</p>
					<p className={s.item__subtitle}>
						**-**-*****
					</p></div>
			</div>
		</div>
	)
}

export default PanelTab