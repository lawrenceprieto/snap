function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home" style={{fontSize: "40px", color: "hsl(0, 0%, 8%)", fontWeight: "800"}}>snap</a>
                    <button className="navbar-toggler focus" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                        style={{border: "none",boxShadow: "none", background: "transparent", fontSize: "30px"}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle hov" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    style={{paddingLeft: "45px", fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>
                                    Features
                                </a>
                                <ul className="dropdown-menu py-3 px-1" style={{backgroundColor: "hsl(0, 0%, 98%)", border: "none", boxShadow: "-1px 5px 10px 5px rgba(0,0,0,0.34)"}}>
                                    <li>
                                        <div className="dropdown-item d-flex gap-2 align-items-center mb-1">
                                            <svg width="20" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z" fill="#726CEE"/></svg>
                                            <div style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Todo List</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-item d-flex gap-2 align-items-center mb-1">
                                            <svg width="20" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z" fill="#4BB1DA"/></svg>                                            
                                            <div style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Calendar</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-item d-flex gap-2 align-items-center mb-1">
                                            <svg width="20" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z" fill="#EDD556"/></svg>
                                            <div style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Reminder</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-item d-flex gap-2 align-items-center">
                                            <svg width="20" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z" fill="#8E4CB6"/></svg>
                                            <div style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Planning</div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle hov" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    style={{paddingLeft: "25px", fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>
                                    Company
                                </a>
                                <ul className="dropdown-menu pt-4 px-4" style={{backgroundColor: "hsl(0, 0%, 98%)", border: "none", boxShadow: "-1px 5px 10px 5px rgba(0,0,0,0.34)"}}>
                                    <li>
                                        <div className="mb-3" style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>History</div>
                                    </li>
                                    <li>
                                        <div className="mb-3" style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Our Team</div>
                                    </li>
                                    <li>
                                        <div className="mb-3" style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Blog</div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hov" aria-current="page" href="#" style={{paddingLeft: "25px", fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Carrers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link hov" href="#" style={{paddingLeft: "25px", fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>About</a>
                            </li>
                        </ul>
                        <div className="d-flex gap-3">
                            <button className="btn btn-light px-4" style={{color: "hsl(0, 0%, 41%)"}}>Login</button>
                            <button className="btn btn-outline-dark px-4">Register</button>
                        </div>
                    </div>
                </div>

                <div style={{width: "300px"}}className="offcanvas offcanvas-end mob" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header d-flex justify-content-end px-4 pt-4">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{fontSize: "28px"}}></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"
                                        style={{paddingRight: "135px", fontSize: "18px", color: "hsl(0, 0%, 41%)", background: "transparent"}} >Features
                                    </div>
                                </div>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body px-5">
                                        <div className="d-flex gap-2 align-items-center mb-3">
                                            <svg width="20" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z" fill="#726CEE"/></svg>
                                            <div style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Todo List</div>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center mb-3">
                                            <svg width="20" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z" fill="#4BB1DA"/></svg>                                            
                                            <div style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Calendar</div>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center mb-3">
                                            <svg width="20" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z" fill="#EDD556"/></svg>
                                            <div style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Reminder</div>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center mb-3">
                                            <svg width="20" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z" fill="#8E4CB6"/></svg>
                                            <div style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Planning</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion accordion-flush" id="accordionFlushExampleTwo">
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"
                                        style={{paddingRight: "134px", fontSize: "18px", color: "hsl(0, 0%, 41%)", background: "transparent"}} > Company
                                    </div>
                                </div>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTwo">
                                    <div className="accordion-body px-5">
                                        <div className="mb-3" style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>History</div>
                                        <div className="mb-3" style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Our Team</div>
                                        <div className="mb-3" style={{fontSize: "18px", color: "hsl(0, 0%, 41%)"}}>Blog</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-4" style={{fontSize: "18px", color: "hsl(0, 0%, 41%)", paddingLeft: "20px"}}>Carrers</div>
                        <div className="my-4" style={{fontSize: "18px", color: "hsl(0, 0%, 41%)", paddingLeft: "20px"}}>About</div>
                        <div className="d-flex flex-column gap-2 px-3 mt-1">
                            <button className="btn btn-light" style={{color: "hsl(0, 0%, 41%)"}}>Login</button>
                            <button className="btn btn-outline-dark" style={{color: "hsl(0, 0%, 41%)"}}>Register</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar