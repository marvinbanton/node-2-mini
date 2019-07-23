let books = [];
let id = 0;

module.exports = {
    read: function (req, res) {
        res.status(200).json(books);
    },
    create: function (req, res) {
        const { title, author } = req.body;
        books.push({ id, title, author })
        books.push(book);
        id++;
        res.status(200).send(books);
    }
};