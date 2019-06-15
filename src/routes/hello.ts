const hello = (req, res) => {
    res.end(JSON.stringify({ message: "Hello World " }));
}
export default hello;
