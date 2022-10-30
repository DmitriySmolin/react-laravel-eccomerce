import React, {useEffect} from 'react';

const MegaMenu = () => {

    const megaMenu = () => {
        const acc = document.getElementsByClassName("accordion");
        const accNum = acc.length;
        for (var i = 0; i < accNum; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
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
        <div className="accordionMenuDiv">
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="accordionMenuDivInside">
                <button className="accordion" onClick={ megaMenu }>
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/128/3917/3917317.png "
                         alt="accordionMenu"/>&nbsp;
                    Мужская одежда
                </button>
                <div className="panel">
                    <ul>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItem">
                                Мужские футболки 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;