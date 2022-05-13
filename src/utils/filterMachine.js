const filterMachine = (infoType, input) => {
    const filteredData = infoType.filter((element) => {
        if (input === '') {
            return element;
        } else {
            return element.username.toLowerCase().includes(input)
        }})
        
    return filteredData
}

export default filterMachine