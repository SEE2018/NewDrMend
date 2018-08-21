var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=6a05af5708dd45c98d3b08e6b2997156';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
