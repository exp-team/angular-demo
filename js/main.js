window.page = window.page || function() {
    var components = [];

    function init() {
        // 设置页面右侧的组件
        var componentsPos = document.querySelectorAll("#componentCollection li");
        componentCollection = getComponents();
        for (var i = 0; i < componentCollection.length; i++) {
            componentsPos[i].appendChild(componentCollection[i]);
        }
        // 设置页面的拖拽事件
        setEvents();
    }

    function getComponents() {
        return new Component().getComponentCollection();
    }

    function setEvents() {
        var dragTarget = document.getElementsByClassName("container")[0];

        dragTarget.ondrop = function(ev) {
            if (ev.preventDefault) {
                ev.preventDefault();
            } else {
                return false;
            }

            ev.target.innerHTML = ev.dataTransfer.getData("text/plain");
            // 去掉目标元素的可拖拽属性和监听事件
            var elem = ev.target.firstElementChild;
            elem.draggable = false;
            elem.ondragstart = null;
            elem.ondragend = null;
            ev.preventDefault();
        };

        dragTarget.ondragover = function(ev) {
            if (ev.preventDefault) {
                ev.preventDefault();
            } else {
                return false;
            }
        };
    }

    return {
        init: init
    }
}();

window.utils.addLoadEvent(window.page.init());
