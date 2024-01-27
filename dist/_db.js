let games = [
    { id: 1, title: 'zeldor', platform: ['Xbots'] },
    { id: 2, title: 'zeldor2', platform: ['Xbooos'] },
    { id: 3, title: 'zmarloio', platform: ['Xborsts'] },
    { id: 4, title: 'zelmarl', platform: ['Xbets'] },
    { id: 5, title: 'zeldro', platform: ['sexXbots'] }
];
let authors = [
    //create 3 authors based off the author type
    { id: 1, name: 'man2', verified: true },
    { id: 2, name: 'manny', verified: false },
    { id: 3, name: 'conner', verified: true },
];
let reviews = [
    //create 3 reviews based of the review type
    { id: 1, rating: 5, content: 'good game', author_id: 1, game_id: 1 },
    { id: 2, rating: 10, content: 'best game', author_id: 2, game_id: 2 },
    { id: 3, rating: 1, content: 'worst game', author_id: 3, game_id: 3 },
];
export default { games, authors, reviews };
