import React from 'react'
import s from './MainSection.module.scss'

const MainSection = () => {
	return (
		<div className={s.main}>
			<div className="container">
				<div className={s.main__wrapper}>
					<div className={s.main__left}>
						<h2 className={s.main__left_title}>KOLOS ROLEPLAY</h2>
						<p className={s.main__left_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						<button className={s.main__left_btn}>Завантажити гру</button>
					</div>
					<div className={s.main__right }>
					
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainSection