Project proposal: 
Creating a website that pulls a random animal and gives you information and an image about that animal. 

Interactivity: 
Users can click the button to recieve a random animal. Users can also hover over the animal image and recieve the scientific name for that specific animal, leaving the image will then make that same information disappear.

Current addEventListener() count: 3

Improvements to be done: 
-Currently animals are only able to be randomized, an immediate improvement to the website could include the ability to search for specific animals. One possible way to do this is by fetching from the public API and then posting into my own json folder so that I could then use that as the fetch for a search bar.

-Currently fetched animals disappear when you click the randomize button, this is done so on purpose, however, being able to fetch multiple animals and then adding a clear button would increase interactivity and would allow users to compare or atleast be able to see multiple animals at once.
    ^This can be done two ways. Add a button to each individual card which would allow you to remove that specific card(would be done with adding a unique ID to each card; would need my own API) or add a button to the top of the page which clears all animal cards(this option is less favorable but I would be able to integrate it without my own API).
    
To start the application, open index.html in your browser. Since this application uses a public API wihtout a key, you will not have to host a server for the backend.
