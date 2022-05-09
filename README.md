# CLIENT

## URLs

 **BASICS**
| PAGE | URL |
| --- | --- |
| homepage | / |
| login-page | /login |  
| signup-page | /register |
| profile-edit-page | /my-profile |  
| favorites-page | /favorites |

 **ARTISTS**
| PAGE | URL |
| --- | --- |
| artists-page | /artists |
| artist-details | /artist/:artistId |  
| search-list | /artist/:genre |

 **VENUES**
| PAGE | URL |
| --- | --- |
| venues-page | /venues |
| venue-details | /venue/:venueID |

 **LABELS**
| PAGE | URL |
| --- | --- |
| labels-page | /labels |
| label-details | /label/:labelId |  

 **EVENTS**
| PAGE | URL |
| --- | --- |
| events-page | /events |
| event-details | /event/:eventId |  
| event-create-page | /event/create |

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
