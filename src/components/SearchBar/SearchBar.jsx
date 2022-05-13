import { FormControl } from 'react-bootstrap';
import './SearchBar.css'

const SearchBar = ({ handler }) => {

    return (
        <div className="search">
            <FormControl
                id="outlined-basic"
                onChange={handler}
                variant="outlined"
                fullWidth
                label="Search"
            />
        </div>

    )
};

export default SearchBar;



