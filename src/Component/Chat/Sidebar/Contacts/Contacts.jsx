import React from 'react'

export default function Contacts() {
    return (
        <div className="tab-pane fade" id="members">
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="people" placeholder="Search for people..." />
                    <button type="button" className="btn btn-link loop"><i className="material-icons">search</i></button>
                </form>
                <button className="btn create" data-toggle="modal" data-target="#exampleModalCenter"><i className="material-icons">person_add</i></button>
            </div>
            <div className="list-group sort">
                <button className="btn filterMembersBtn active show" data-toggle="list" data-filter="all">All</button>
                <button className="btn filterMembersBtn" data-toggle="list" data-filter="online">Online</button>
                <button className="btn filterMembersBtn" data-toggle="list" data-filter="offline">Offline</button>
            </div>
            <div className="contacts">
                <h1>Contacts</h1>
                <div className="list-group" id="contacts" role="tablist">
                    <a href="/#" className="filterMembers all online contact" data-toggle="list">
                        <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                        <div className="status">
                            <i className="material-icons online">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5>Janette Dalton</h5>
                            <p>Sofia, Bulgaria</p>
                        </div>
                        <div className="person-add">
                            <i className="material-icons">person</i>
                        </div>
                    </a>
                    <a href="/#" className="filterMembers all online contact" data-toggle="list">
                        <img className="avatar-md" src="dist/img/avatars/avatar-male-1.jpg" data-toggle="tooltip" data-placement="top" title="Michael" alt="avatar" />
                        <div className="status">
                            <i className="material-icons online">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5>Michael Knudsen</h5>
                            <p>Washington, USA</p>
                        </div>
                        <div className="person-add">
                            <i className="material-icons">person</i>
                        </div>
                    </a>
                    <a href="/#" className="filterMembers all online contact" data-toggle="list">
                        <img className="avatar-md" src="dist/img/avatars/avatar-female-2.jpg" data-toggle="tooltip" data-placement="top" title="Lean" alt="avatar" />
                        <div className="status">
                            <i className="material-icons online">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5>Lean Avent</h5>
                            <p>Shanghai, China</p>
                        </div>
                        <div className="person-add">
                            <i className="material-icons">person</i>
                        </div>
                    </a>
                    <a href="/#" className="filterMembers all online contact" data-toggle="list">
                        <img className="avatar-md" src="dist/img/avatars/avatar-male-2.jpg" data-toggle="tooltip" data-placement="top" title="Mariette" alt="avatar" />
                        <div className="status">
                            <i className="material-icons online">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5>Mariette Toles</h5>
                            <p>Helena, Montana</p>
                        </div>
                        <div className="person-add">
                            <i className="material-icons">person</i>
                        </div>
                    </a>
                    <a href="/#" className="filterMembers all online contact" data-toggle="list">
                        <img className="avatar-md" src="dist/img/avatars/avatar-female-3.jpg" data-toggle="tooltip" data-placement="top" title="Harmony" alt="avatar" />
                        <div className="status">
                            <i className="material-icons online">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5>Harmony Otero</h5>
                            <p>Indore, India</p>
                        </div>
                        <div className="person-add">
                            <i className="material-icons">person</i>
                        </div>
                    </a>
                    <a href="/#" className="filterMembers all offline contact" data-toggle="list">
                        <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar" />
                        <div className="status">
                            <i className="material-icons offline">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5>Keith Morris</h5>
                            <p>Chisinau, Moldova</p>
                        </div>
                        <div className="person-add">
                            <i className="material-icons">person</i>
                        </div>
                    </a>
                    <a href="/#" className="filterMembers all offline contact" data-toggle="list">
                        <img className="avatar-md" src="dist/img/avatars/avatar-female-6.jpg" data-toggle="tooltip" data-placement="top" title="Louis" alt="avatar" />
                        <div className="status">
                            <i className="material-icons offline">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5>Louis Martinez</h5>
                            <p>Vienna, Austria</p>
                        </div>
                        <div className="person-add">
                            <i className="material-icons">person</i>
                        </div>
                    </a>
                    <a href="/#" className="filterMembers all offline contact" data-toggle="list">
                        <img className="avatar-md" src="dist/img/avatars/avatar-male-3.jpg" data-toggle="tooltip" data-placement="top" title="Ryan" alt="avatar" />
                        <div className="status">
                            <i className="material-icons offline">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5>Ryan Foster</h5>
                            <p>Oslo, Norway</p>
                        </div>
                        <div className="person-add">
                            <i className="material-icons">person</i>
                        </div>
                    </a>
                    <a href="/#" className="filterMembers all offline contact" data-toggle="list">
                        <img className="avatar-md" src="dist/img/avatars/avatar-male-4.jpg" data-toggle="tooltip" data-placement="top" title="Mildred" alt="avatar" />
                        <div className="status">
                            <i className="material-icons offline">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5>Mildred Bennett</h5>
                            <p>London, United Kingdom</p>
                        </div>
                        <div className="person-add">
                            <i className="material-icons">person</i>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}
