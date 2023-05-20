// 200
const successCode = (res, data, message) => {

    res.status(200).json({
        message,
        EC: 0,
        content: data
    })
}

// 400
const failCode = (res, data, message) => {
    res.status(400).json({
        message,
        EC: -1,
        // content: data
    })
}

//500
const errorCode = (res, message) => {
    res.status(500).json({
        EC: 1,
        message
    })
}

module.exports = {
    successCode,
    failCode,
    errorCode
}