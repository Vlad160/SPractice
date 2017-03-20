/**
 * Created by Роман on 3/19/2017.
 */

function controlPanelButtonEvent(event) {
    if (event.target == document.getElementById("log-in-panel-submit-button-id")) {
        document.getElementById("log-in-button").textContent = document.forms[0].elements[0].value;
        if ((document.forms[0].elements[0].value == "admin") && (document.forms[0].elements[1].value == "admin")) {
            document.getElementById("add-news-button").style.visibility = "visible";
            document.getElementById("add-news-panel-id").style.visibility = "visible";
        }
        var panel = document.getElementById("log-in-panel-id");
        var user = document.createElement("div");
        user.innerHTML = "<h3>Logged as " + document.forms[0].elements[0].value + "</h3>";
        user.style.alignSelf = "center";
        user.style.color = "#bababa";
        user.style.fontSize = "4vh";
        user.style.fontStyle = "normal";
        user.style.marginRight = "auto";
        user.style.marginLeft = "auto";

        while (panel.hasChildNodes())
            panel.removeChild(panel.lastChild);
        panel.appendChild(user);
    } else if(event.target == document.getElementById("bug-report-panel-submit-button-id")) {
        var titleNode = document.getElementById("bug-report-title-id");
        var contentNode = document.getElementById("bug-report-content-id");
        bugReports.addReport({title: titleNode.value, content: contentNode.value});
        titleNode.value = "";
        contentNode.value = "";
    } else {

    }
}