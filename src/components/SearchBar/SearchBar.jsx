import artistsService from '../../services/artist.service';
import './SearchBar.css'


const SearchBar = ({ searchQuery, setSearchQuery }) => {

    const handleKeyUp = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search...</span>
            </label>
            <input
                value={searchQuery}
                // onInput={e => setSearchQuery(e.target.value)}
                onInput={handleKeyUp}
                type="text"
                id="header-search"
                placeholder="Search..."
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    )
};

export default SearchBar;