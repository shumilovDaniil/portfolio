import React from 'react'

const About = ({ links }) => {
	const { name, avatar, gmail, cv, telegram } = links
	return (
		<div className="flex justify-center  pt-32 mb-12">
			<div className="profile  flex flex-wrap justify-center  items-center">
				<img
					className={'rounded-full mr-8 h-56 w-56 object-cover'}
					src={avatar}
					alt=""
				/>
				<div className="">
					<h2 className={'text-4xl font-bold mb-6' + ''}>{name}</h2>
					<ul className="profileContacts">
						<li>
							<a
								className={
									'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex mb-2.5'
								}
								href={telegram}
							>
								telegram
							</a>
						</li>
						<li>
							<a
								className={
									'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex mb-2.5'
								}
								href={`mailto:${gmail}`}
							>
								{gmail}
							</a>
						</li>
						<li>
							<a
								className={
									'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex mb-2.5'
								}
								href=""
							>
								CV
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default About
