import React from 'react'
import Title from '../../components/Title/Title'
import s from './UserProfile.module.scss'
import TabButton from '../../components/TabButton/TabButton'

// chakra-ui/react
import { Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
// img
import info from '../../assets/TabButton/info.svg'
import home from '../../assets/TabButton/home.svg'
import business from '../../assets/TabButton/business.svg'
import settings from '../../assets/TabButton/settings.svg'
import exit from '../../assets/TabButton/exit.svg'
import PanelTab from '../../components/PanelTab/PanelTab'


const UserProfile = () => {
	return (
		<div className={s.profile}>
			<Title title={'ОСОБИСТИЙ'} textColor={'КАБІНЕТ'} />
			<div className="container">
				<div className={s.profile__wrapper}>
					{/* left */}
					<Tabs className={s.profile__wrapper_list} isLazy>
						<TabList className={s.list__left}>
							<h4 className={s.list__left_title}>Швидка навігація</h4>
							<TabButton name={'Загальна інформація'} img={info} />
							<TabButton name={'Мій дім'} img={home} />
							<TabButton name={'Мій бізнес'} img={business} />
							<TabButton name={'Налаштування'} img={settings} />
							<TabButton name={'Вихід'} img={exit} />
						</TabList>
						{/* center */}
						<TabPanels className={s.list__right}>
							{/* initially mounted */}
							<TabPanel className={s.list__right_item}>
								<p className={s.item__title}>
									Загальна <span className={s.item__title__color}>інформація</span>
								</p>
								<PanelTab />
							</TabPanel>
							{/* initially not mounted */}
							<TabPanel className={s.list__right_item}>
								<p>two!</p>
							</TabPanel>
							<TabPanel className={s.list__right_item}>
								<p>the!</p>
							</TabPanel>
							<TabPanel className={s.list__right_item}>
								<p>lox</p>
							</TabPanel>
						</TabPanels>
					</Tabs>
					{/* right */}
					<div className={s.profile__wrapper_avatar}>
						<div className={s.info}>
							<Avatar className={s.info__avatar} src='https://bit.ly/broken-link' />
							<div className={s.info__level}>
								7
							</div>
						</div>
						<div className={s.bottom}>
							<p className={s.bottom__text}>рівень</p>
							<p className={s.bottom__name}>Andrew_Borisov</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserProfile