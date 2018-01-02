/**
    * WARNING: Hide implementation in local scope, 
    * so it won`t mess up with other extensions or variables
    */
    (function ()
    {
        var el = document.querySelector(".page-content > h1.topictitle1");
        if (el) {
            var guids = el.id.split("__");
            alert("Topic ID: " + guids[0] + "\n Other ID: " + guids[0]);
        } else {
            alert("No Title");
        }
}());