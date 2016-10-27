window.horizontalComponent = window.horizontalComponent || function() {

    function createComponent() {
        var fragment = document.createDocumentFragment();
        var component = document.createElement("div");
        component.className = "horizontal-component";
        component.classList.add("component");
        var divTop = document.createElement("div");
        var divBottom = document.createElement("div");
        component.appendChild(divTop);
        component.appendChild(divBottom);
        fragment.appendChild(component);
        return fragment;
    }

    function HorizontalComponent() {
        this.component = createComponent();   
        Component.call(this, this.component);  
    }

    HorizontalComponent.prototype = Object.create(Component.prototype);

    var horiComponent = new HorizontalComponent();
    horiComponent.addComponent();
    horiComponent.bindDragEvent();

}();
