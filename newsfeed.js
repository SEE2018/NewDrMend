var url = 'https://newsapi.org/v2/everything?' +
          'q=Medicine&' +
          'from=2018-08-21&' +
          'sortBy=popularity&' +
          'apiKey=6a05af5708dd45c98d3b08e6b2997156';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
      populateArticles(json.articles);
    });

function populateArticles(articles) {
  var news = document.getElementById("newsfeed");
    news.className = 'article';


  //add each article to your html
  for(i=0;i<10;i++){
    var title = articles[i]["title"];
    var url = articles[i]["url"];
    var description = articles[i]["description"]
  

    var article = document.createElement('a');
    article.setAttribute('href', url);
    article.className = 'aaa';
    article.innerHTML = title;
    news.appendChild(article);
    news.appendChild(document.createElement('br'));

    var article1 = document.createElement('b');
    article1.className = 'bbb';
    article1.innerHTML = description;
    news.appendChild(article1);
    news.appendChild(document.createElement('br'));


  }
}
