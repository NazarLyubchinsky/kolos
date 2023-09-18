import React from 'react'
import OurServer from './OurServer/OurServer'
import s from './ourServers.module.scss'

const OurServers = () => {
	return (
		<div className={s.servers}>
			<h2 className={s.servers__title}>НАШІ СЕРВЕРИ</h2>
			<div className={s.servers__wrapper}>
				<OurServer
					number={1}
					circle={"linear-gradient(180deg, rgb(23, 127, 250) 0%, rgb(18.74, 40.91, 67.14) 100%)"}
					border={'linear-gradient(black 0 0) padding-box, linear-gradient(to right, rgb(23, 127, 250), rgba(23, 127, 250, 0)) border-box'}
					headline={'KOLOS ROLEPLAY'}
					name={'BLUE SERVER'}
					online={'Онлайн: 999/1000'}
				/>
				<OurServer
					number={2}
					circle={"linear-gradient(180deg, rgb(255, 215.12, 5.74) 0%, rgb(235.01, 98.7, 0) 100%)"}
					border={'linear-gradient(black 0 0) padding-box, linear-gradient(to right, rgb(250, 186.44, 23), rgba(250, 186.44, 23, 0)) border-box'}
					headline={'KOLOS ROLEPLAY'}
					name={'YELLOW SERVER'}
					online={'Онлайн: 999/1000'} />
				<OurServer
					number={3}
					circle={"linear-gradient(180deg, rgb(27.54, 250, 23) 0%, rgb(4.92, 125.57, 24.22) 100%)"}
					border={'linear-gradient(black 0 0) padding-box, linear-gradient(to right, rgb(26, 243, 23), rgba(13, 171, 24, 0)) border-box'}
					headline={'GREEN SERVER'}
					name={'BLUE SERVER'}
					online={'Онлайн: 999/1000'} />
				<OurServer
					number={4}
					circle={" linear-gradient(180deg, rgb(250, 23, 23) 0%, rgb(67.14, 18.74, 18.74) 100%)"}
					border={'linear-gradient(black 0 0) padding-box, linear-gradient(to right, rgb(26, 243, 23), rgba(13, 171, 24, 0)) border-box'}
					headline={'KOLOS ROLEPLAY'}
					name={'RED SERVER'}
					online={'Онлайн: 999/1000'} />
				<OurServer
					number={5}
					circle={" linear-gradient(180deg, rgb(250, 118.34, 23) 0%, rgb(188.26, 140.91, 19.14) 100%)"}
					border={'linear-gradient(black 0 0) padding-box, linear-gradient(to right, rgb(247, 119, 23), rgba(245, 120, 23, 0)) border-box'}
					headline={'KOLOS ROLEPLAY'}
					name={'ORANGE SERVER'}
					online={'Онлайн: 999/1000'} />
				<OurServer
					number={6}
					circle={"linear-gradient(180deg,rgb(23, 250, 181.9) 0%,rgb(3.22, 104.32, 73.99) 100%,rgb(17.07, 206.35, 149.56) 100%)"}
					border={'linear-gradient(black 0 0) padding-box, linear-gradient(to right, rgb(21, 235, 171), rgba(21, 239, 174, 0)) border-box'}
					headline={'KOLOS ROLEPLAY'}
					name={'TURQUOISE SERVER'}
					online={'Онлайн: 999/1000'} />
			</div>
			<div className={s.servers__bottom}>
				<div>5994 |  Онлайн на всіх серверах</div>
				<div>6000 | Рекордна кількість онлайну</div>
				<div>6 | Кількість серверів</div>
			</div>
		</div>
	)
}

export default OurServers