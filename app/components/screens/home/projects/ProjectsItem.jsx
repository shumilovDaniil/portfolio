import React from 'react'
import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const ProjectsItem = ({ title, img }) => {
	return (
		<a
			className={'mr-8'}
			href="https://github.com/shumilovDaniil/dns-clone"
			target="_blank"
		>
			<Card sx={{ maxWidth: 285 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image={`${img}`}
						alt="project"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{title}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</a>
	)
}

export default ProjectsItem
