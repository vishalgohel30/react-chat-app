import React from 'react'

export default function Notifications() {
    return (
        <div>
            <div id="notifications" className="tab-pane fade">
                <div className="search">
                    <form className="form-inline position-relative">
                        <input type="search" className="form-control" id="notice" placeholder="Filter notifications..." />
                        <button type="button" className="btn btn-link loop"><i className="material-icons filter-list">filter_list</i></button>
                    </form>
                </div>
                <div className="list-group sort">
                    <button className="btn filterNotificationsBtn active show" data-toggle="list" data-filter="all">All</button>
                    <button className="btn filterNotificationsBtn" data-toggle="list" data-filter="latest">Latest</button>
                    <button className="btn filterNotificationsBtn" data-toggle="list" data-filter="oldest">Oldest</button>
                </div>
                <div className="notifications">
                    <h1>Notifications</h1>
                    <div className="list-group" id="alerts" role="tablist">
                        <a href="/#" className="filterNotifications all latest notification" data-toggle="list">
                            <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                            <div className="status">
                                <i className="material-icons online">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <p>Janette has accepted your friend request on Swipe.</p>
                                <span>Oct 17, 2018</span>
                            </div>
                        </a>
                        <a href="/#" className="filterNotifications all latest notification" data-toggle="list">
                            <img className="avatar-md" src="dist/img/avatars/avatar-male-1.jpg" data-toggle="tooltip" data-placement="top" title="Michael" alt="avatar" />
                            <div className="status">
                                <i className="material-icons online">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <p>Michael, you have a new friend suggestion today.</p>
                                <span>Jun 21, 2018</span>
                            </div>
                        </a>
                        <a href="/#" className="filterNotifications all latest notification" data-toggle="list">
                            <img className="avatar-md" src="dist/img/avatars/avatar-male-2.jpg" data-toggle="tooltip" data-placement="top" title="Mariette" alt="avatar" />
                            <div className="status">
                                <i className="material-icons online">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <p>Mariette have just sent you a new message.</p>
                                <span>Feb 15, 2018</span>
                            </div>
                        </a>
                        <a href="/#" className="filterNotifications all latest notification" data-toggle="list">
                            <img className="avatar-md" src="dist/img/avatars/avatar-female-6.jpg" data-toggle="tooltip" data-placement="top" title="Louis" alt="avatar" />
                            <div className="status">
                                <i className="material-icons online">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <p>Louis has a birthday today. Wish her all the best.</p>
                                <span>Mar 23, 2018</span>
                            </div>
                        </a>
                        <a href="/#" className="filterNotifications all latest notification" data-toggle="list">
                            <img className="avatar-md" src="dist/img/avatars/avatar-female-3.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                            <div className="status">
                                <i className="material-icons online">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <p>Harmony has accepted your friend request on Swipe.</p>
                                <span>Jan 5, 2018</span>
                            </div>
                        </a>
                        <a href="/#" className="filterNotifications all oldest notification" data-toggle="list">
                            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                            <div className="status">
                                <i className="material-icons offline">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <p>Keith have just sent you a new message.</p>
                                <span>Dec 22, 2017</span>
                            </div>
                        </a>
                        <a href="/#" className="filterNotifications all oldest notification" data-toggle="list">
                            <img className="avatar-md" src="dist/img/avatars/avatar-female-2.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                            <div className="status">
                                <i className="material-icons offline">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <p>Michael, you have a new friend suggestion today.</p>
                                <span>Nov 29, 2017</span>
                            </div>
                        </a>
                        <a href="/#" className="filterNotifications all oldest notification" data-toggle="list">
                            <img className="avatar-md" src="dist/img/avatars/avatar-male-3.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                            <div className="status">
                                <i className="material-icons offline">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <p>Ryan have just sent you a new message.</p>
                                <span>Sep 31, 2017</span>
                            </div>
                        </a>
                        <a href="/#" className="filterNotifications all oldest notification" data-toggle="list">
                            <img className="avatar-md" src="dist/img/avatars/avatar-male-4.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                            <div className="status">
                                <i className="material-icons offline">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <p>Mildred has a birthday today. Wish him all the best.</p>
                                <span>Jul 19, 2017</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
