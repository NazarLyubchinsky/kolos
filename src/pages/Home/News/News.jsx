import React from 'react'
import Title from '../../../components/Title/Title'
import s from './news.module.scss'
import NewsCard from './NewsCard/NewsCard'

const News = () => {
	return (
		<div className={s.news}>
			<div className="container">
				<Title title={'НОВИНИ ТА ОНОВЛЕННЯ'}/>
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