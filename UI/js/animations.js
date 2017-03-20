/**
 * Created by Роман on 3/8/2017.
 */



function showLogInPanel() {
    document.getElementById("log-in-button").style.zIndex = "1001";
    document.getElementById("log-in-button").style.marginTop = "120px";
    document.getElementById("log-in-button").style.boxShadow = "rgba(0, 0, 0, 0.74902) 0px 2.5px 1px 1px";
    document.getElementById("log-in-panel-id").style.marginTop = "120px";
    document.getElementById("log-in-panel-id").style.boxShadow = "rgba(0, 0, 0, 0.74902) 0px 2px 1px 1px";

    document.getElementById("bug-report-button").style.zIndex = "999";
    document.getElementById("add-news-button").style.zIndex = "999";
    document.getElementById("sort-menu-id").style.zIndex = "999";
}
function hideLogInPanel() {
    document.getElementById("log-in-button").style.marginTop = "0px";
    document.getElementById("log-in-button").style.boxShadow = "rgba(0, 0, 0, 0.74902) 0px 2px 1px 1px";
    document.getElementById("log-in-panel-id").style.marginTop = "0px";
    document.getElementById("log-in-panel-id").style.boxShadow = "rgba(255, 255, 255, 1) 0px 0px 0px 0px";
}

function showBugReportPanel() {
    document.getElementById("bug-report-button").style.zIndex = "1001";
    document.getElementById("bug-report-button").style.marginTop = "300px";
    document.getElementById("bug-report-button").style.boxShadow = "rgba(0, 0, 0, 0.74902) 0px 2.5px 1px 1px";
    document.getElementById("bug-report-panel-id").style.marginTop = "300px";
    document.getElementById("bug-report-panel-id").style.boxShadow = "rgba(0, 0, 0, 0.74902) 0px 2px 1px 1px";

    document.getElementById("log-in-button").style.zIndex = "999";
    document.getElementById("add-news-button").style.zIndex = "999";
    document.getElementById("sort-menu-id").style.zIndex = "999";
}
function hideBugReportPanel() {
    document.getElementById("bug-report-button").style.marginTop = "0px";
    document.getElementById("bug-report-button").style.boxShadow = "rgba(0, 0, 0, 0.74902) 0px 2px 1px 1px";
    document.getElementById("bug-report-panel-id").style.marginTop = "0px";
    document.getElementById("bug-report-panel-id").style.boxShadow = "rgba(255, 255, 255, 1) 0px 0px 0px 0px";
}

function showAddNewsPanel() {
    document.getElementById("add-news-button").style.zIndex = "1001";
    document.getElementById("add-news-button").style.marginTop = "400px";
    document.getElementById("add-news-button").style.boxShadow = "rgba(0, 0, 0, 0.74902) 0px 2.5px 1px 1px";
    document.getElementById("add-news-panel-id").style.marginTop = "400px";
    document.getElementById("add-news-panel-id").style.boxShadow = "rgba(0, 0, 0, 0.74902) 0px 2px 1px 1px";

    document.getElementById("log-in-button").style.zIndex = "999";
    document.getElementById("bug-report-button").style.zIndex = "999";
    document.getElementById("sort-menu-id").style.zIndex = "999";
}
function hideAddNewsPanel() {
    document.getElementById("add-news-button").style.marginTop = "0px";
    document.getElementById("add-news-button").style.boxShadow = "rgba(0, 0, 0, 0.74902) 0px 2px 1px 1px";
    document.getElementById("add-news-panel-id").style.marginTop = "0px";
    document.getElementById("add-news-panel-id").style.boxShadow = "rgba(255, 255, 255, 1) 0px 0px 0px 0px";
}

function showSortPanel() {
    document.getElementById("sort-button").style.boxShadow = "rgba(0, 0, 0, 0.74902) -2.5px 0px 1px 1px";
    document.getElementById("sort-menu-id").style.right = "0px";
    document.getElementById("sort-panel-id").style.boxShadow = "rgba(0, 0, 0, 0.74902) -2px 0px 1px 1px";

    document.getElementById("add-news-button").style.zIndex = "999";
    document.getElementById("log-in-button").style.zIndex = "999";
    document.getElementById("bug-report-button").style.zIndex = "999";

}
function hideSortPanel() {
    document.getElementById("sort-button").style.boxShadow = "rgba(0, 0, 0, 0.74902) -2px 0px 1px 1px";
    document.getElementById("sort-menu-id").style.right = "-200px";
    document.getElementById("sort-panel-id").style.boxShadow = "rgba(0, 0, 0, 0.74902) 0px 0px 0px 0px";
}

function lightenArticle() {
    this.style.boxShadow = "-3px 0px 2px 2px rgba(0, 0, 0, 0.750)";
    this.style.borderRight = "none";
    this.style.backgroundColor = "#ffffff";
    this.style.zIndex = "60";
    var children = document.getElementById("news-list-id").childNodes;
    for (var i = 1; i < children.length; i++) {
        if (children[i] != this) {
            children[i].style.boxShadow = "0px 0px 0px 0px";
            children[i].style.borderRight = "1.5px solid black";
            children[i].style.backgroundColor = "#fafafa"
            children[i].style.zIndex = "52";
        }
    }
    expandArticle(this);
}
function expandArticle(param) {
    var node = document.getElementById("news-expansion-id");
    if (node.childNodes[1])
        node.childNodes[1].remove();
    var article = database.getArticle(param.id);
    node.innerHTML = "<h1>" + article.title + "</h1>";
    node.innerHTML += "<p class=\"author-info-text\">written by " + article.author + "</p>";
    node.innerHTML += "<p class=\"content-text\">" + article.content + "</p>";
    node.innerHTML += "<p class=\"time-info-text\">Created: " + article.createdAt + "</p>";
    for (var i = 0; i < node.getElementsByTagName("p").length; i++)
        node.getElementsByTagName("p")[i].style.width = $("#news-expansion-id").width() / 1.05 + "px";
}