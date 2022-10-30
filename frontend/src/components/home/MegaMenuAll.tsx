import React, {useEffect} from 'react'

const MegaMenuAll = () => {

    const megaMenu = () => {
        const acc = document.getElementsByClassName("accordionAll");
        let accNum = acc.length;
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

    return (
        <div className="accordionMenuDivAll">
            <div className="accordionMenuDivInsideAll">
                <button className="accordionAll">
                    <img className="accordionMenuIconAll"
                         src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                </button>
                <div className="panelAll">
                    <ul>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 2</a></li>
                    </ul>
                </div>
                <button className="accordionAll">
                    <img className="accordionMenuIconAll"
                         src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                </button>
                <div className="panelAll">
                    <ul>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 2</a></li>
                    </ul>
                </div>
                <button className="accordionAll">
                    <img className="accordionMenuIconAll"
                         src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                </button>
                <div className="panelAll">
                    <ul>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 2</a></li>
                    </ul>
                </div>
                <button className="accordionAll">
                    <img className="accordionMenuIconAll"
                         src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                </button>
                <div className="panelAll">
                    <ul>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 2</a></li>
                    </ul>
                </div>
                <button className="accordionAll">
                    <img className="accordionMenuIconAll"
                         src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                </button>
                <div className="panelAll">
                    <ul>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 2</a></li>
                    </ul>
                </div>
                <button className="accordionAll">
                    <img className="accordionMenuIconAll"
                         src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                </button>
                <div className="panelAll">
                    <ul>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 2</a></li>
                    </ul>
                </div>
                <button className="accordionAll">
                    <img className="accordionMenuIconAll"
                         src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                </button>
                <div className="panelAll">
                    <ul>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 2</a></li>
                    </ul>
                </div>
                <button className="accordionAll">
                    <img className="accordionMenuIconAll"
                         src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                </button>
                <div className="panelAll">
                    <ul>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 2</a></li>
                    </ul>
                </div>
                <button className="accordionAll">
                    <img className="accordionMenuIconAll"
                         src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                </button>
                <div className="panelAll">
                    <ul>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 2</a></li>
                    </ul>
                </div>
                <button className="accordionAll">
                    <img className="accordionMenuIconAll"
                         src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png"/>&nbsp; Men's Clothing
                </button>
                <div className="panelAll">
                    <ul>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemAll"> Mans Tshirt 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MegaMenuAll;
