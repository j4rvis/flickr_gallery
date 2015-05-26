var photoset ="72157648226325532";
var api_key = '71146e7fb59ba39e895844a33836807d';
var extras = 'owner_name, url_m, url_o, o_dims';
var url = "https://api.flickr.com/services/rest/?"
+ "method=flickr.photosets.getPhotos&api_key="+api_key
+"&photoset_id="+photoset+"&format=json&nojsoncallback=1&extras="+extras;
app.factory('photos', ['$http', function($http) {
  return $http.get(url)
   .success(function(data) {
    console.log(data);
    return data;
   })
   .error(function(data) {
     return data;
   });
}]);