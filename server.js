const app = require('./app');

const port = process.env.PORT || 5200;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})
