/**
 * Created by Роман on 3/18/2017.
 */

var node;
var data = database.getArticles(10);
data.forEach(function(article) {
    node = document.createElement("div");
    node.className = "news-preview";
    node.id = article.id;
    node.style.height = $("#main-id").height() / 6 + "px";
    node.innerHTML = "<h1>" + article.title + "</h1>";
    node.innerHTML += "<p>" + article.summary + "</p>";
    node.innerHTML += "<h7>Author: " + article.author + "</h7>";
    document.getElementById("news-list-id").appendChild(node);
    node.addEventListener("mouseover", lightenArticle);
});


document.getElementById("log-in-panel-submit-button-id").addEventListener("click", controlPanelButtonEvent);
document.getElementById("bug-report-panel-submit-button-id").addEventListener("click", controlPanelButtonEvent);
document.getElementById("add-news-panel-submit-button-id").addEventListener("click", controlPanelButtonEvent);
