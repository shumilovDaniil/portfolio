import React from 'react'
import ProjectsItem from './ProjectsItem'

const Projects = ({ projects }) => {
	return (
		<>
			<h2 className={'text-center text-4xl font-bold mb-6'}>Projects</h2>

			<div className={'alert max-w-xl m-auto mb-10'} role="">
				<div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
					Внимание!
				</div>
				<div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
					<p>Очень крутые работы, впечатлительным просьба уйти от экрана.</p>
				</div>
			</div>
			<div className="cards flex justify-center">
				{projects.map(project => {
					return (
						<ProjectsItem
							key={project._id}
							title={[project.title]}
							img={[project.img]}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Projects
