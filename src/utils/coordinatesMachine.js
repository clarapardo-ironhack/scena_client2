const coordinatesMachine = (street, number, city) => {

    // street.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    // city.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    let address = ''

    let streetArr = street.split(' ')

    streetArr.forEach(word => {
        address += `${word}$20`
    })

    address += `${number}$20`

    address += `-${city}`

    console.log (address)

    return address


}

export default coordinatesMachine