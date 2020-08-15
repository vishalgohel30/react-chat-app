import React from 'react'

export default function Disussions() {
    return (
        <div>
            <div id="discussions" className="tab-pane fade active show">
                <div className="search">
                    <form className="form-inline position-relative">
                        <input type="search" className="form-control" id="conversations" placeholder="Search for conversations..." />
                        <button type="button" className="btn btn-link loop"><i className="material-icons">search</i></button>
                    </form>
                    <button className="btn create" data-toggle="modal" data-target="#startnewchat"><i className="material-icons">create</i></button>
                </div>
                <div className="list-group sort">
                    <button className="btn filterDiscussionsBtn active show" data-toggle="list" data-filter="all">All</button>
                    <button className="btn filterDiscussionsBtn" data-toggle="list" data-filter="read">Read</button>
                    <button className="btn filterDiscussionsBtn" data-toggle="list" data-filter="unread">Unread</button>
                </div>
                <div className="discussions">
                    <h1>Discussions</h1>
                    <div className="list-group" id="chats" role="tablist">
                        <a href="#list-chat" className="filterDiscussions all unread single active" id="list-chat-list" data-toggle="list" role="tab">
                            <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                            <div className="status">
                                <i className="material-icons online">fiber_manual_record</i>
                            </div>
                            <div className="new bg-yellow">
                                <span>+7</span>
                            </div>
                            <div className="data">
                                <h5>Janette Dalton</h5>
                                <span>Mon</span>
                                <p>A new feature has been updated to your account. Check it out...</p>
                            </div>
                        </a>
                        <a href="#list-empty" className="filterDiscussions all unread single" id="list-empty-list" data-toggle="list" role="tab">
                            <img className="avatar-md" src="dist/img/avatars/avatar-male-1.jpg" data-toggle="tooltip" data-placement="top" title="Michael" alt="avatar" />
                            <div className="status">
                                <i className="material-icons offline">fiber_manual_record</i>
                            </div>
                            <div className="new bg-pink">
                                <span>+10</span>
                            </div>
                            <div className="data">
                                <h5>Michael Knudsen</h5>
                                <span>Sun</span>
                                <p>How can i improve my chances of getting a deposit?</p>
                            </div>
                        </a>
                        <a href="#list-chat" className="filterDiscussions all read single" id="list-chat-list2" data-toggle="list" role="tab">
                            <img className="avatar-md" src="dist/img/avatars/avatar-female-2.jpg" data-toggle="tooltip" data-placement="top" title="Lean" alt="avatar" />
                            <div className="status">
                                <i className="material-icons offline">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <h5>Lean Avent</h5>
                                <span>Tus</span>
                                <p>Hey Chris, could i ask you to help me out with variation...</p>
                            </div>
                        </a>
                        <a href="#list-empty" className="filterDiscussions all read single" id="list-empty-list2" data-toggle="list" role="tab">
                            <img className="avatar-md" src="dist/img/avatars/avatar-male-2.jpg" data-toggle="tooltip" data-placement="top" title="Mariette" alt="avatar" />
                            <div className="status">
                                <i className="material-icons offline">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <h5>Mariette Toles</h5>
                                <span>5 mins</span>
                                <p>By injected humour, or randomised words which...</p>
                            </div>
                        </a>
                        <a href="#list-chat" className="filterDiscussions all read single" id="list-chat-list3" data-toggle="list" role="tab">
                            <img className="avatar-md" src="dist/img/avatars/avatar-female-3.jpg" data-toggle="tooltip" data-placement="top" title="Harmony" alt="avatar" />
                            <div className="status">
                                <i className="material-icons online">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <h5>Harmony Otero</h5>
                                <span>Mon</span>
                                <p>No more running out of the office at 4pm on Fridays!</p>
                            </div>
                        </a>
                        <a href="#list-empty" className="filterDiscussions all read single" id="list-empty-list3" data-toggle="list" role="tab">
                            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar" />
                            <div className="status">
                                <i className="material-icons offline">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <h5>Keith Morris</h5>
                                <span>Fri</span>
                                <p>All your favourite books at your reach! We are now mobile.</p>
                            </div>
                        </a>
                        <a href="#list-request" className="filterDiscussions all unread single" id="list-request-list" data-toggle="list" role="tab">
                            <img className="avatar-md" src="dist/img/avatars/avatar-female-6.jpg" data-toggle="tooltip" data-placement="top" title="Louis" alt="avatar" />
                            <div className="status">
                                <i className="material-icons offline">fiber_manual_record</i>
                            </div>
                            <div className="new bg-gray">
                                <span>?</span>
                            </div>
                            <div className="data">
                                <h5>Louis Martinez</h5>
                                <span>Feb 10</span>
                                <p>Hi Keith, I'd like to add you as a contact.</p>
                            </div>
                        </a>
                        <a href="#list-empty" className="filterDiscussions all read single" id="list-empty-list4" data-toggle="list" role="tab">
                            <img className="avatar-md" src="dist/img/avatars/avatar-male-3.jpg" data-toggle="tooltip" data-placement="top" title="Ryan" alt="avatar" />
                            <div className="status">
                                <i className="material-icons offline">fiber_manual_record</i>
                            </div>
                            <div className="data">
                                <h5>Ryan Foster</h5>
                                <span>Feb 9</span>
                                <p>Dear Deborah, your Thai massage is today at 5pm.</p>
                            </div>
                        </a>
                        <a href="#list-chat" className="filterDiscussions all unread single" id="list-chat-list5" data-toggle="list" role="tab">
                            <img className="avatar-md" src="dist/img/avatars/avatar-male-4.jpg" data-toggle="tooltip" data-placement="top" title="Mildred" alt="avatar" />
                            <div className="status">
                                <i className="material-icons offline">fiber_manual_record</i>
                            </div>
                            <div className="new bg-green">
                                <span>+9</span>
                            </div>
                            <div className="data">
                                <h5>Mildred Bennett</h5>
                                <span>Thu</span>
                                <p>Unfortunately your session today has been cancelled!</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
