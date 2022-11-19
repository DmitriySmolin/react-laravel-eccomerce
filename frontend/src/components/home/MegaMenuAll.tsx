import React, {useEffect, useState} from 'react'
import axios from "axios";
import AppURL from "../../api/AppURL";
import {Link} from "react-router-dom";

const MegaMenuAll = () => {

    const [menuData, setMenuData] = useState([]);
    const [isLoading, setIsLoading] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {
        axios.get(AppURL.allCategoryDetails).then(response => {
            setMenuData(response.data);
            setIsLoading('d-none');
            setMainDiv('')
        }).catch(error => {
        });
    }, [])

    const menuItemClick = (event: any) => {
        event.target.classList.toggle("active");
        const panel = event.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    const catList = menuData;
    const myView = catList.map((catList: any, i: any) => {
        return <div key={i.toString()}>
            <button onClick={menuItemClick} className="accordionAll">
                <img className="accordionMenuIconAll" src={catList.category_image}/>&nbsp; {catList.category_name}
            </button>
            <div className="panelAll">
                <ul>
                    {
                        (catList.subcategory_name).map((subList: any, i: any) => {
                            return <li><Link
                                to={"/productsubcategory/" + catList.category_name + "/" + subList.subcategory_name}
                                className="accordionItem">{subList.subcategory_name} </Link></li>
                        })
                    }
                </ul>
            </div>
        </div>
    });

    return (
        <div className="accordionMenuDivAll">
            <div className="accordionMenuDivInsideAll">
                {myView}
            </div>
        </div>
    )
}

export default MegaMenuAll;
