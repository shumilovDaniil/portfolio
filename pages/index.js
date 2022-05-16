import axios from 'axios'
import Home from '../app/components/screens/home/Home'
import { API_URL } from '../app/constants'

export default function HomePage(props) {
	return <Home {...props} />
}

export const getStaticProps = async () => {
	const links = await axios.get(`${API_URL}/links`).then(({ data }) => data)
	const projects = await axios
		.get(`${API_URL}/projects`)
		.then(({ data }) => data)

	return {
		props: {
			links,
			projects
		},
		revalidate: 60 // через сколько сек инфа на беке будет обновляться
	}
}
