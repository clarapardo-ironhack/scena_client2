const filterMachine = (artists, query) => {
    if (!query) {
        return artists;
    }

    return artists.filter((artist) => {
        const artistName = artist.username.toLowerCase();
        return artistName.includes(query);
    });
}

export default filterMachine