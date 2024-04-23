import express from 'express';
	const app = express();
	app.use(express.json());
	const PORT = 8080;
	app.get('/', (req,res) => {
		console.log('Buenos días');
		res.send('Conexión establecida');
	});
	app.listen(PORT, () => {
		console.log(`El servidor está corriendo en el puerto: ${PORT}`);
	});