Meteor.startup(() => {
  if (Periquis.find().count() === 0) {
    const periquis =
    [
      {
        'name': 'Milorad',
        'color': 'green',
        'favoriteFruit': 'apple'
      }
    ];

    periquis.forEach((periqui) => {
      Periquis.insert(periqui)
    });  
  }
});
