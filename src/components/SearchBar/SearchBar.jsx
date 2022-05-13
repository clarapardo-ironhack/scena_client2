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




//  <Form className="d-flex">
//             <FormControl
//                 value={searchQuery}
//                 // onInput={e => setSearchQuery(e.target.value)}
//                 onChange={handleOnChange}
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//                 name='artist'
//             />
//             <Button type='submit'>Search</Button>
//         </Form>


