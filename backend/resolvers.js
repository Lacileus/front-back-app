export const getData = async(req, res) => {
    const name = req.params.name
    try {
        const data = Math.floor(Math.random() * 100)
        res.json(data);
    } catch(error) {
        console.error('Ошибка подключения к базе данных:', error);
    }
}