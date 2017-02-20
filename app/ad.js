var Ad = (function() {
    function init() {
        console.log("ini AD");
    }

return {
    init: init
};

})();

document.addEventListener("DOMContentLoaded", function(event) {
    Ad.init();
});
