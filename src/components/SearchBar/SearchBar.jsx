import { Form, Button, FormControl } from 'react-bootstrap';
import artistsService from '../../services/artist.service';
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



