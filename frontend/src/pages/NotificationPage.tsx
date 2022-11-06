import React, {Component, Fragment, useEffect} from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Notification from '../components/notification/Notification'

const NotificationPage = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <Fragment>
            <div className="Desktop">
                <NavMenuDesktop/>
            </div>
            <div className="Mobile">
                <NavMenuMobile/>
            </div>
            <Notification/>
            <div className="Desktop">
                <FooterDesktop/>
            </div>
            <div className="Mobile">
                <FooterMobile/>
            </div>
        </Fragment>
    )
}

export default NotificationPage
