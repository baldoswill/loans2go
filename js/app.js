const UICtrl = (function(){
    const UISelectors = {
        burgerMenu : '#nav-bar .nav-container .burger-menu',
        dropdownMenu: "#nav-bar .nav-container ul:last-child"
    };
    
    return  {
        getUISelectors : function () {
            return UISelectors;
        },
        toggleDropDownMenu : function(){

            const dropDownMenu = document.querySelector(UISelectors.dropdownMenu);

            const toggle = dropDownMenu.classList.toggle('hide');

            if(toggle){
                dropDownMenu.style.display = 'none';
            }else{
                dropDownMenu.style.display = 'inline-block';
                dropDownMenu.style.transform = 'scale(1)';
            }
            //
            // setTimeout(() => {
            //     dropDownMenu.style.display = 'none';
            // }, 10000);
        },
        windowResize: function(){
            window.onresize = function(e){
                const dropDownMenu = document.querySelector(UISelectors.dropdownMenu);
                dropDownMenu.style.display = 'none';
            }
        }
    }
})();

const AppCtrl = (function(uiCTRL){

    function loadEventHandlers(){
        const selectors = uiCTRL.getUISelectors();
        document.querySelector(selectors.burgerMenu).addEventListener('click',  toggleDropDownMenuClick);
    }

    function toggleDropDownMenuClick(){
        uiCTRL.toggleDropDownMenu();
    }

    function onWindowResize(){
        uiCTRL.windowResize();
    }

    return {
        init : function () {
            loadEventHandlers();
            onWindowResize();
        }
    }

})(UICtrl);

AppCtrl.init();