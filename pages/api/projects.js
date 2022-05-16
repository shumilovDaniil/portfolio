const projects = [
	{
		_id: 1,
		title: 'DNS clone',
		img: 'https://apksshare.com/wp-content/uploads/2021/06/DNS-Shop-APK-MOD-Download-2.1.png'
	},
	{
		_id: 2,
		title: 'DNS clone 2 ',
		img: 'https://apksshare.com/wp-content/uploads/2021/06/DNS-Shop-APK-MOD-Download-2.1.png'
	},
	{
		_id: 3,
		title: 'DNS clone 3',
		img: 'https://apksshare.com/wp-content/uploads/2021/06/DNS-Shop-APK-MOD-Download-2.1.png'
	}
]

export default function handler(req, res) {
	res.status(200).json(projects)
}
