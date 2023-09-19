import React from 'react'
import MainSection from './MainSection/MainSection'
import News from './News/News'
import OurServers from './OurServers/OurServers'
import SocialNetworks from './SocialNetworks/SocialNetworks'

const Home = () => {
	return (
		<>
			<MainSection />
			<OurServers />
			<News />
			<SocialNetworks />
		</>
	)
}

export default Home