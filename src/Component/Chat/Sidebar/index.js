import React from 'react'

// component import
import Contacts from './Contacts/Contacts'
import Disussions from './Disussions/Disussions'
import Notifications from './Notifications/Notifications'
import Settings from './Settings/Settings'

export default function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
            <div className="container">
                <div className="col-md-12">
                    <div className="tab-content">
                        {/*  <!-- Start of Contacts --> */}
                        <Contacts />
                        {/*  <!-- End of Contacts -->*/}

                        {/*   <!-- Start of Discussions --> */}
                        <Disussions />
                        {/* <!-- End of Discussions --> */}

                        {/*  <!-- Start of Notifications -->*/}
                        <Notifications />
                        {/*<!-- End of Notifications -->*/}

                        {/*  <!-- Start of Settings -->*/}
                        <Settings />
                        {/*   <!-- End of Settings -->*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
