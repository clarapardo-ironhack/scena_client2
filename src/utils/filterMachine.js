const filterMachine = (artists, query) => {
    if (!query) {
        return artists;
    }

    return artists.filter((artist) => {
        const artistName = artist.username.toLowerCase();
        return artistName.includes(query);
    })


    function List(props) {
        //create a new array by filtering the original array
        const filteredData = data.filter((el) => {
            //if no input the return the original
            if (props.input === '') {
                return el;
            }
            //return the item which contains the user input
            else {
                return el.text.toLowerCase().includes(props.input)
            }
        })
        return (
            <ul>
                {filteredData.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

export default filterMachine