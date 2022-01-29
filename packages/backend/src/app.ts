import express, { Application, Request, Response } from 'express';
import { cors } from 'cors-ts'
import indexRoutes from './resources/routes'
import methodOverride from 'method-override'
import errorHandlerYup from './middleware/errorHandlerYup';

const cookieParser = require('cookie-parser')
const port = process.env.PORT


class App {
	private readonly application: Application

	constructor() {
		this.application = express()

		// init plugins
		this.plugins()

		// init routes
		this.routes()
	}

	private plugins(): void {
		this.application.use(cors())
		this.application.use(express.json())
		this.application.use(express.urlencoded())
		this.application.use(cookieParser())
	}

	private routes(): void {
		this.application.use(indexRoutes)

		// Catch error 404 endpoint not found
		this.application.use('*', (req: Request, res: Response) => {
			res.status(404).send({ msg: 'Sorry, HTTP resource you are looking for was not found.' })
		})

	}

	public run(): void {
		console.log(`Node environment: ${process.env.NODE_ENV}`);
		this.application.listen(port, () => {
			console.log(`Example app listening at port http://localhost:${port}`)
		})


		// Error handler
		this.application.use(function (err: any, req: Request, res: Response) {
			console.log('errrrr');
		})
		this.application.use(errorHandlerYup);
	}
}

export default App