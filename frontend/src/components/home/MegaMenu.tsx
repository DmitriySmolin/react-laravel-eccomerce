import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const MegaMenu = (props: any) => {

    const menuItemClick = (event: any) => {
        event.target.classList.toggle("active");
        const panel = event.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    }

    const catList = props.data;
    const myView = catList.map((catList: any, i: any) => {
        return <div key={i.toString()}>
            <button onClick={menuItemClick} className="accordion">
                <img className="accordionMenuIcon" src={catList.category_image}/>&nbsp; {catList.category_name}
            </button>
            <div className="panel">
                <ul>
                    {
                        (catList.subcategory_name).map((subList: any, i: any) => {
                            return <li><Link
                                to={"productsubcategory/" + catList.category_name + "/" + subList.subcategory_name}
                                className="accordionItem">{subList.subcategory_name} </Link></li>
                        })
                    }
                </ul>
            </div>
        </div>
    });

    return (
        <div className="accordionMenuDiv">
            <div className="accordionMenuDivInside">
                {myView}
            </div>

        </div>
    );
};

export default MegaMenu;