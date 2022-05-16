const links = {
	name: 'Daniil Shumilov',
	avatar: 'https://i.servimg.com/u/f34/12/84/84/83/tm/avatar10.jpg',
	gmail: 'shumilov.daniil.s@gmail.com',
	cv: '',
	telegram: 'https://t.projects/daniil_shum'
}

export default function handler(req, res) {
	res.status(200).json(links)
}
