import { FormControl } from 'react-bootstrap';
import './SearchBar.css'

const SearchBar = ({ handler, task }) => {

const placeholderText = `Búsqueda por ${task}`

    return (
        <div className="search">
            <FormControl
                id="outlined-basic"
                onChange={handler}
                variant="outlined"
                fullWidth
                label="Search"
                placeholder = {placeholderText}
            />
        </div>

    )
};

export default SearchBar;



