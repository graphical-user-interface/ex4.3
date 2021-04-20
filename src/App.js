import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Container,
	Grid,
	Paper,
	Box,
	Button,
	Typography,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	text: {
		border: "1px solid #333",
		padding: "0 10px",
	},
	box: {
		paddingTop: 20,
	},
	button: {
		padding: 0,
		"& .MuiButton-label": {
			padding: 6,
		},
	},
}))

export default function App() {
	const classes = useStyles()
	const [value, setValue] = useState("")
	const [prevString, setPrevString] = useState([])
	const [current, setCurrent] = useState(0)
	const addNumber = (num) => {
		setValue(value + num)
		setPrevString([...prevString, value])
		setCurrent(current + 1)
		console.log(prevString)
	}
	const reset = () => {
		setValue("")
	}
	const undo = () => {
		setValue(prevString[current - 1])

		setCurrent(current - 1)
	}
	const redo = () => {
		setValue(prevString[current + 1])
		setCurrent(current + 1)
	}

	return (
		<div className={classes.root}>
			<Container maxWidth='sm'>
				<Grid container>
					<Grid item xs={2}></Grid>
					<Grid item xs={8}>
						<Paper elevation={2} className={classes.paper}>
							<Typography>{value}</Typography>
							<Box className={classes.box}>
								<Button
									variant='contained'
									onClick={() => addNumber(1)}
									color='primary'
									className={classes.button}>
									1
								</Button>
								<Button
									variant='contained'
									color='primary'
									onClick={() => addNumber(2)}
									className={classes.button}>
									2
								</Button>
								<Button
									variant='contained'
									color='primary'
									onClick={() => addNumber(3)}
									className={classes.button}>
									3
								</Button>
							</Box>
							<Box className={classes.box}>
								{current !== 0 ? (
									<Button
										variant='contained'
										color='secondary'
										onClick={undo}>
										Undo
									</Button>
								) : (
									<Button
										variant='contained'
										color='secondary'
										disabled>
										Undo
									</Button>
								)}
								{current < prevString.length ? (
									<Button
										variant='contained'
										color='primary'
										onClick={redo}>
										Redo
									</Button>
								) : (
									<Button
										variant='contained'
										color='primary'
										disabled>
										Redo
									</Button>
								)}

								<Button
									variant='contained'
									color='primary'
									onClick={reset}>
									Reset
								</Button>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={2}></Grid>
				</Grid>
			</Container>
		</div>
	)
}
