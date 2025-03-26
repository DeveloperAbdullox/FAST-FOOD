export const ValidationMiddleware = (Schema) => {
    return (req, res, next) => {
        const { error, value } = Schema.validate(req.body)

        if(error) {
            return res.status(400).send({
                message: error.message
            })
        }

        req.body = value

        next()
    }
}