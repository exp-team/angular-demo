window.verticalComponent = window.verticalComponent || function() {

    function createComponent() {
        var fragment = document.createDocumentFragment();
        var component = document.createElement("div");
        component.className = "vertical-component";
        component.classList.add("component");

        var divLeft = document.createElement("div");
        var divRight = document.createElement("div");
        component.appendChild(divLeft);
        component.appendChild(divRight);
        fragment.appendChild(component);
        return fragment;

    }

    function verticalComponent() {
    	this.component = createComponent();
    	Component.call(this, this.component);

    }

    verticalComponent.prototype = Object.create(Component.prototype);

    var verComponent = new verticalComponent();
    verComponent.addComponent();
    verComponent.bindDragEvent();
}();
