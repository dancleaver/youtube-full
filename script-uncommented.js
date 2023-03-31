javascript: (function(){
    var targetNode = document.getElementById("movie_player");
    var config = { attributes: true, childList: true };

    var targetChildren = targetNode.children;
    var elementsToKeep = new Array("html5-video-container", "ytp-cued-thumbnail-overlay");

    var callback = function(){
        for(var i = 0; i < targetChildren.length; i++){
            if(!elementsToKeep.includes(targetChildren[i].className)){
                targetChildren[i].remove();
            }
        }
    };

    var observer = new MutationObserver(callback);

    observer.observe(targetNode, config);

    const para = document.createElement("p");
    targetNode.appendChild(para);
})();
