/**
 * Created by Роман on 3/8/2017.
 */
$(document).ready(function(){
    $(".news-preview").click(function(){
        console.log("rofl");
        this.hide();
    });
});

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