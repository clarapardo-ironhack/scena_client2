# CLIENT

## URLs

 **BASICS**
| PAGE | URL |
| --- | --- |
| HomePage | / |
| LoginPage | /login |  
| SignupPage | /register |
| ProfileEditPage | /my-profile |  
| FavoritesPage | /favorites |

 **ARTISTS**
| PAGE | URL |
| --- | --- |
| ArtistsPage | /artists |
| ArtistDetailsPage | /artist/:artistId |  
| GenreSearchList | /artists/style/:genre |

 **VENUES**
| PAGE | URL |
| --- | --- |
| VenuesPage | /venues |
| VenueDetailsPage | /venue/:venueID |

 **LABELS**
| PAGE | URL |
| --- | --- |
| LabelsPage | /labels |
| LabelDetailsPage | /label/:labelId |  

 **EVENTS**
| PAGE | URL |
| --- | --- |
| EventsPage | /events |
| EventDetailsPage | /event/:eventId |  
| EventCreatePage | /event/create |

## COMPONENTS

**BASICS**

```

├── homepage
│   ├── Section
│   │     └── SearchBar
│   ├──  Section
│   │     ├── TinyCard
│   │     └── LinkCard
│   └── Section
│         ├── TinyCard
│         └── LinkCard
├── login-page
│   ├── Form
│   └── Button
├── signup-page
│   ├── Form
│   └── Button
└── profile-edit-page
    └── Form
```

**ARTISTS**

```

├── artist-details
│   ├── Big artist Card
│   │     ├── Event list
│   │     ├── Links Card
│   │     └── Carousel ---> Music Container
│   └──  Related Artists List
├── artist-page
│   ├── Search Bar
│   └── Artists List
│         └── Tiny Cards
├── search-list-page
    ├── Search Bar
    └── Artists List
          └── Tiny Cards
```

**VENUES**

```

├── venue-details
│   └── Big Venue Card
│         ├── Event list
│         ├── Links Card
│         └── Carousel ---> MAPS Container
└── venues-page
    ├── Search Bar
    └── Venues List
          └── Tiny Cards

```

**LABELS**

```

├── labels-details
│   └── Big Label Card
│         ├── Label list
│         └── Links Card
└── labels-page
    ├── Search Bar
    └── Labels List
          └── Tiny Cards

```

**EVENTS**

```

├── events-page
│   ├── Search Bar
│   └── Events List
│         └── Tiny Cards
├── event-details
│   └── Big Event Card
│         ├── Artist tiny Card
│         ├── Event tiny Card
│         └── Mapa
└── event-create-page
    └── Form
    
```
