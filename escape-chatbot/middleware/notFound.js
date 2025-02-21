  
// catches all 404 and forward to error handler

const notFound = (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
    //should route to the 404 not found page
}

export default notFound;
