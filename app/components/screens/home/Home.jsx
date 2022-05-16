import React from 'react'
import About from './about/About'
import Projects from './projects/Projects'

const Home = ({ links, projects }) => {
	return (
		<div>
			<main className={'container m-auto px-4'}>
				<About links={links} />
				<Projects projects={projects} />
			</main>
		</div>
	)
}

export default Home
