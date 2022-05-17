const filterMachine = (infoType, input) => {
    const filteredData = infoType.filter((element) => {
        if (input === '') {
            return element;
        } else {
            if (element.username) {
                return element.username.toLowerCase().includes(input)
            } else if (element.title) {
                return element.title.toLowerCase().includes(input)
            } else {
                return element.toLowerCase().includes(input)
            }
        }
    })
    return filteredData
}

export default filterMachine