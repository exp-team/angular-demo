window.ajax = window.ajax || function() {

    function createXHR() {
        if (typeof XMLHttpRequest != "undefined") {
            return new XMLHttpRequest();
        } else if (typeof arguments.callee.ActiveXObject != "undefined") {
            var versions = ["MSXML2.XMLHttp6.0", "MSXML2.XMLHttp3.0", "MSXML2.XMLHttp"],
                i, len = versions.length;
            for (i = 0; i < len; i++) {
                try {
                    new ActiveXObject(versons[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                }
                catch(e) {

                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        } else {
            throw new Error("No XHR Object avaiable");
        }

    }

    function get(url, success, error) {
        var xhr = createXHR();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    console.log('success');
                    success(xhr.responseText);
                } else {
                	console.log('fail');
                	error(xhr.responseText);
                }
            }
        }
        xhr.open("GET", url, true);
        xhr.send();
    }

    return {
    	get : get
    }
}();
