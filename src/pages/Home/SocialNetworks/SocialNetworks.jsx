import React from 'react'
import Title from '../../../components/Title/Title'
import s from './SocialNetworks.module.scss'

// img
import instagram from '../../../assets/SocialNetworks/instagram.svg'
import discord from '../../../assets/SocialNetworks/discord.svg'
import telegram from '../../../assets/SocialNetworks/telegram.svg'

import SocialNetworksItem from './SocialNetworksItem/SocialNetworksItem'
const SocialNetworks = () => {
	const styleTwoItem = {
		flexDirection: 'row-reverse',
		background: ' linear-gradient(230deg, rgb(8, 51, 120) 0%, rgba(8, 51, 120, 0) 100%)'
	}
	const styleLastItem = {
		flexDirection: "column-reverse",
		gap: '15px',
		textAlign: 'center',
		background: 'linear-gradient(90deg, rgba(8, 51, 120, 0) 0%, rgb(8, 51, 120) 50.19%, rgba(8, 51, 120, 0) 100%)'
	};
	return (
		<div className={s.social}>
			<Title title={'НАШІ СОЦІАЛЬНІ'} textColor={'МЕРЕЖІ'} />
			<div className="container">
				<div className={s.social__wrapper}>
						<SocialNetworksItem icon={instagram} title={'INSTAGRAM'} subtitle={'Офіційна сторінка'} />
					<SocialNetworksItem icon={discord} title={'DISCORD'}
						subtitle={'Офіційний сервер'}
						styleTwoItem={styleTwoItem} />
					<SocialNetworksItem icon={telegram} title={'TELEGRAM'}
						subtitle={'Офіційний канал'}
						styleLastItem={styleLastItem}
					/>
				</div>
			</div>
		</div>
	)
}

export default SocialNetworks