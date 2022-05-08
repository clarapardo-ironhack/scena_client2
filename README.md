# CLIENT


## URLs

| **BASICS**|
| PAGE | URL |
| --- | --- | 
| homepage | / | 
| login-page | /login |  
| signup-page | /register | 
| profile-edit-page | /my-profile |  
| favorites-page | /favorites | 

| **ARTISTS**|
| PAGE | URL |
| --- | --- | 
| artists-page | /artists | 
| artist-details | /artist/:artistId |  
| search-list | /artist/:genre | 

| **VENUES**|
| PAGE | URL |
| --- | --- | 
| venues-page | /venues | 
| venue-details | /venue/:venueID | 

| **LABELS**|
| PAGE | URL |
| --- | --- | 
| labels-page | /labels | 
| label-details | /label/:labelId |  

| **EVENTS**|
| PAGE | URL |
| --- | --- | 
| events-page | /events | 
| event-details | /event/:eventId |  
| event-create-page | /event/create | 



## COMPONENTS

**BASICS**

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
