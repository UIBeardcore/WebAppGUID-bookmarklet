#WebAppGUID Bookmarklet
================================================
A helper to get Page GUID to find it in architect further on

## Overview

URLs on the DDWebApp no longer contain GUIDs, but instead contain 2 numerical IDs, one for the publication, and another for the topic in a specific language. For debugging purposes, we`ver added this tool to see the topic GUID in the ddwebapp and find out which topic it is in the CM.
 
## Bookmarklet

```javascript
javascript:(function(UI,B,e,a,r,d,C,O,R,E){try{if(UI.SdlDitaDeliveryRootPath!=undefined){R=UI.document}else{throw""}}catch(ex){alert("Not a SDL Delivery Web APP!");return}alert("Topic ID: "+R.querySelector(".page-content > h1.topictitle1").id.split("__")[0])})(window.top);
```

## How-To use it

  * Add the bookmarklet link from above to your bookmarks
  * Open WebApp Page
  * Click on this bookrmarklet
  * …wait a moment :clock4:
  * See a popup with all page metagata information
  * Have a nice day! :sun_with_face:


## Tested Tridion Versions

*	1.0.0
*	1.1.0
*	1.2.0-SNAPSHOT

## Contributing

Found a bug? Or have a suggestion? Please [report it](http:// "WebAppGUID | bookmarklet") as a comment.
