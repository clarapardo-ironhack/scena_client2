import { FormControl } from 'react-bootstrap';
import './SearchBar.css'

const SearchBar = ({ handler, task }) => {

    const placeholderText = `Búsqueda de ${task}`

    return (
        <div className="searchBarDiv">
            <input
                onChange={handler}
                label="Search"
                placeholder={placeholderText}
                className="searchBar"
            ></input>

        </div>

    )
};

export default SearchBar;