const coordinatesMachine = (street, number, city, postalCode) => {

    let address = ''

    let streetArr = street.split(' ')

    streetArr.forEach(word => {
        address += `${word}+`
    })

    address += `${number}+`

    address += `${postalCode}`

    address += `-${city}`


    return address


}

export default coordinatesMachine