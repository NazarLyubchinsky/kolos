import React from 'react'
import s from './OurServer.module.scss'

const OurServer = ({ number, circle, border, headline, name, online }) => {
	return (
		<div className={s.server}>
			<div className={s.server__wrapper} style={{ background: `${border}` }}>
				<div className={s.server__number} style={{ background: `${circle}` }}>
					{number}
				</div>
				<div className={s.server__text}>
					<p className={s.server__text_headline}>{headline}</p>
					<p className={s.server__text_name}>{name}</p>
					<p className={s.server__text_online}>{online}</p>
				</div>
			</div>
		</div>
	)
}

export default OurServer