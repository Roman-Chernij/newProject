/*
 * Custom scripts
 */
(function ($) {

    $('.slider-wrapper').slick({
        infinite: false,
        dots: false,
    });

})(jQuery);



window.addEventListener( "DOMContentLoaded", function() {
    new Menu();
});


function Menu() {
    this.init ();
}

Menu.prototype.init = function () {
    new MobiMenu();
}


    function MobiMenu() {
        this.block = document.querySelector('.mobi-menu_icon');
        this.list = this.block.querySelector('.mobi-list');
        this.childList = this.list.children;
        this.widthBlock = parseInt(getComputedStyle(this.block).width);
        this.style();
        this.list.addEventListener("click", this.clickMenu.bind(this));
    }

    MobiMenu.prototype.style = function(){
    console.log(this.childList.length);
    for(var i=0; i<this.childList.length; i++){
        this.childList[i].style.cssText += "width:"+this.widthBlock+"px;float:left;";

    }
    this.list.style.cssText += "width:"+this.widthList+"px;";
    this.widthList =this. widthBlock * this.childList.length;
    this.list.style.cssText += "width:"+this.widthList+"px;";
};

MobiMenu.prototype.clickMenu = function (e) {
    this.target = e.target || event.target;
    this.iconMenu = document.querySelector('.icon-menu');
    this.iconCancel = document.querySelector('.icon-cancel');
    this.menuAppend = document.querySelector('.mobi-menu_append');

    console.log(this.target);

    if(this.target == this.iconMenu){
        this.list.style.cssText += "transform: translateX(-"+this.widthBlock+"px);";
        this.addMenu = document.querySelector('.menu');
        this.addMenu.cloneNode(true);
        this.menuAppend.appendChild(this.addMenu);
    } else if (this.target == this.iconCancel) {
        this.list.style.cssText += "transform: translateX(0);";
        this.removeMenu = this.menuAppend.querySelector('.menu');
        this.removeMenu.cloneNode(true);
        this.addMenu = document.querySelector('.nav>.conteiner');
        this.addMenu.appendChild(this.removeMenu);
    }
};
