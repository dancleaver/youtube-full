javascript: (function(){
    // Select the note that will be observed for mutations
    var targetNode = document.getElementById("movie_player");

    // Options for the observer (which mutations to observe)
    var config = { attributes: true, childList: true };

    // Live HTMLCollection containing all the child elements of the target
    var targetChildren = targetNode.children;

    var elementsToKeep = new Array("html5-video-container", "ytp-cued-thumbnail-overlay");

    // Executes whenever mutations are observed
    var callback = function(){
        // Remove all child elements except those listed in elementsToKeep
        for(var i = 0; i < targetChildren.length; i++){
            if(!elementsToKeep.includes(targetChildren[i].className)){
                targetChildren[i].remove();
            }
        }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target
    observer.observe(targetNode, config);

    // Manually trigger the observer once by adding a dummy element
    const para = document.createElement("p");
    targetNode.appendChild(para);
})();
