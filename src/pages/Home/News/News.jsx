import React from 'react'
import s from './news.module.scss'
import NewsCard from './NewsCard/NewsCard'

const News = () => {
	return (
		<div className={s.news}>
			<div className="container">
				<h2 className={s.news__title}>НОВИНИ ТА ОНОВЛЕННЯ</h2>
				<div className={s.news__wrapper}>
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</div>
			</div>
		</div>
	)
}

export default News