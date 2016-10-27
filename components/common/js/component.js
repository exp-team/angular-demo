window.components = window.components || function() {
    var componentCollection = [];

    Component = function(component) {
        this.component = component;
    }

    Component.prototype = {
        addComponent: function() {
            componentCollection.push(this.component);

        },

        bindDragEvent: function() {
        	var element = this.component.firstElementChild;
            element.draggable = true;
            element.ondragstart = function(ev) {
                ev.dataTransfer.setData("text/plain", ev.target.outerHTML);
                ev.dataTransfer.effectAllowed = "copy";
            };

            element.ondragend = function(ev) {
                return false;
            };
        },

        getComponent: function() {
            return this.component;
        },

        setComponent : function(component) {
        	this.component = component;
        },

        getComponentContent: function() {
            return this.component.outerHTML;
        },

        getComponentStyle: function() {
            return document.defaultView.getComputedStyle(this.component);
        },

        getComponentCollection: function() {
            return componentCollection;
        },

    };
}();
