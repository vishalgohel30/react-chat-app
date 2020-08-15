import React from 'react'

// Component 
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar'
import AddFriends from './AddFriends'
import CreateChat from './CreateChat'
import ChatCall from './ChatCall'

export default function Chat() {
    return (
        <div className="layout">
            {/* <!-- Start of Navigation --!> */}
            <Navigation />
            {/* <!-- End of Navigation --!> */}

            {/* 	<!-- Start of Sidebar --> */}
            <Sidebar />
            {/* <!-- End of Sidebar -->*/}

            {/* <!-- Start of Add Friends --> */}
            <AddFriends />
            {/* <!-- End of Add Friends --> */}


            {/* <!-- Start of Create Chat --> */}
            <CreateChat />
            {/* <!-- End of Create Chat --> */}


            {/* <!-- Start of Chat Call --> */}
            <ChatCall />
            {/* <!-- End of  Chat Call--> */}
        </div>
    )
}



