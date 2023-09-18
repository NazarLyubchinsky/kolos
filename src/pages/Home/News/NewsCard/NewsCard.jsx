import React from 'react'
import s from './NewsCard.module.scss'

import image from '../../../../assets/Home/News/OIP.jpeg'
import { Link } from 'react-router-dom'

const NewsCard = () => {
	return (
		<div className={s.card}>
			<div className={s.card__image}>
				<img className={s.card__image_img} src={image} alt="images" />
			</div>
			<div className={s.card__text}>
				<h4 className={s.card__text_title}>ОНОВЛЕННЯ 2.1</h4>
				<p className={s.card__text_info}>ДУЖЕ ВАЖЛИВИЙ ТЕКСТ, ЯКЩО ВИ ЦЕ ПОЧАЛИ ЧИТАТИ, ТО МЕНІ ВЖЕ ВАС ШКОДА, БО ВИ ТРАТИТЕ СВІЙ ЧАС НА ЧИТАННЯ ЦЬОГО ДУРНОГО ТЕКСТУ, МЯУ. ДУЖЕ ВАЖЛИВИЙ ТЕКСТ, ЯКЩО ВИ ЦЕ ПОЧАЛИ ЧИТАТИ, ТО МЕНІ ВЖЕ ВАС ШКОДА, БО ВИ ТРАТИТЕ СВІЙ ЧАС НА ЧИТАННЯ ЦЬОГО ДУРНОГО ТЕКСТУ, МЯУ.ДУЖЕ ВАЖЛИВИЙ ТЕКСТ, ЯКЩО ВИ ЦЕ ПОЧАЛИ ЧИТАТИ, ТО МЕНІ ВЖЕ ВАС ШКОДА, БО ВИ ТРАТИТЕ СВІЙ ЧАС НА ЧИТАННЯ ЦЬОГО ДУРНОГО ТЕКСТУ, МЯУ.</p>
				<div className={s.card__text_btn}>
					<Link className={s.link}>Читати далі</Link>
				</div>
			</div>
		</div>
	)
}

export default NewsCard