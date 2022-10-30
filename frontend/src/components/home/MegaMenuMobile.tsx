import React, {Component, Fragment, useEffect} from 'react'

const MegaMenuMobile = () => {

    const megaMenu = () => {
        const acc = document.getElementsByClassName("accordionMobile");
        const accNum = acc.length;
        for (var i = 0; i < accNum; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px"
                }
            })
        }
    }
    useEffect(() => {
        megaMenu();
    }, [megaMenu])

    {
        return (
            <div className="accordionMenuDivMobile">
                <div className="accordionMenuDivInsideMobile">
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile">
                        <img className="accordionMenuIconMobile"
                             src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                            <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default MegaMenuMobile;
