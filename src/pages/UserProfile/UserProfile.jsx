import React from 'react'
import Title from '../../components/Title/Title'
import s from './UserProfile.module.scss'
import TabButton from '../../components/TabButton/TabButton'

// chakra-ui/react
import { Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
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
					<Tabs className={s.profile__wrapper_list} isLazy>
						<TabList className={s.list__left}>
							<TabButton name={'Загальна інформація'} img={info} />
							<TabButton name={'Мій дім'} img={home} />
							<TabButton name={'Мій бізнес'} img={business} />
							<TabButton name={'Налаштування'} img={settings} />
							<TabButton name={'Вихід'} img={exit} />
						</TabList>
						<TabPanels className={s.list__right}>
							{/* initially mounted */}
							<TabPanel className={s.list__right_item}>
							Загальна інформація
								<PanelTab />
							</TabPanel>
							{/* initially not mounted */}
							<TabPanel className={s.list__right_item}>
								<p>two!</p>
							</TabPanel>
							<TabPanel className={s.list__right_item}>
								<p>the!</p>
							</TabPanel>
						</TabPanels>
					</Tabs>
					<div>wdwd</div>
				</div>
			</div>
		</div>
	)
}

export default UserProfile