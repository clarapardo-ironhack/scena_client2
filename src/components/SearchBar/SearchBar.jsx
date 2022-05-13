import { Form, Button, FormControl } from 'react-bootstrap';
import artistsService from '../../services/artist.service';
import './SearchBar.css'




const SearchBar = ({ searchQuery, setSearchQuery }) => {

    const handleKeyUp = (e) => {
        setSearchQuery(e.target.value)
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSearchQuery(e.target.value)
    // }

    return (
        <Form className="d-flex">
            <FormControl
                value={searchQuery}
                // onInput={e => setSearchQuery(e.target.value)}
                onChange={handleKeyUp}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name='artist'
            />
            <Button type='submit'>Search</Button>
        </Form>
    )
};

export default SearchBar;


