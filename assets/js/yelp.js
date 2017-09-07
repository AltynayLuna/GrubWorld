// get_data($url = "https://api.yelp.com/v3/businesses/search?limit=10&location=Berkeley%2C%20CA&term=tacos")
document.ready(function(){

  var limit = '10';
  var term = '<can be the actual food type>';
  var categories ='<food, restaurant, "bars,french">';
  var location = '<address>';

  // var url = 'https://api.yelp.com/v3/businesses/search?limit=10&location=Berkeley%2C%20CA&term=tacos'

  $.ajax({
    url: 'https://api.yelp.com/v3/businesses/search',
    method: 'GET',
    headers: {
      authorization : 'Bearer xwrOxjUn-_KP4E2AjbQIe7wua04bS9iRAbJtdXkAdYI7jRH9FYm_AL_PAPzesquTYJHfT7Wg9vBovudbc6UKNYJjZfSHseE1eQWNW4D5GQ5Z4vPSuWgBaETKEo-nWXYx'
    },
    dataType: 'json',
    cache: false,
    data:{
      limit:limit,
      location: location,
      term: term,
      categories: categories
    }
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    throw err;
  });

});
