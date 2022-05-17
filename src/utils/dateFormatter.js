const getFullTime = date => {

    let date2 = new Date(Date.parse(date))

    let hour = '' + date2.getHours()
    let minutes = '' + date2.getMinutes()

    if (hour.length < 2) hour = '0' + hour;
    if (minutes.length < 2) minutes = '0' + minutes

    return [hour, minutes].join(':')
}

const getFullDate = date => {

    let date2 = new Date(Date.parse(date))

    let month = '' + (date2.getMonth() + 1)
    let day = '' + date2.getDate()
    let year = date2.getFullYear()

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('-')
}


module.exports = { getFullTime, getFullDate }