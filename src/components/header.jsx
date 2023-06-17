import Logo from "../assest/img/vbn.png";
import Usa from "../assest/img/united-states-of-america.png";
import Ar from "../assest/img/palestine.png";

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo d-flex align-items-center justify-contant-space-between">
                    <span className="fs-1 fw-bolder">MonoSpace</span>
                    <img src={Logo} style={{ height: 'auto', width: '15px' }} className="ms-2 mt-3" loading="lazy" alt="MonoSpace Logo" />
                </div>
                <div className="d-flex ">
                    <nav className="main-nav d-flex">
                        <ul className="main-nav-list">
                            <li>
                                <a className="main-nav-link" href="#services">services</a>
                            </li>
                            <li>
                                <a className="main-nav-link" href="#skills">skills</a>
                            </li>
                            <li>
                                <a className="main-nav-link" href="#testimonial">Testimonial </a>
                            </li>
                            <li>
                                <a className="main-nav-link" href="#portfolio">portfolio </a>
                            </li>
                            <li>
                                <a className="main-nav-link" href="#contact">contact </a>
                            </li>
                        </ul>
                    </nav>
                    <ul className="s m-3">
                        {/*-------home icon--------*/}
                        {/**/}
                        {/**/}
                        {/* ------------------------------- */}
                        <div className="dropdown border p-1 rounded text-light" id="Counted_Auth" style={{ display: 'none', backgroundColor: '#a5a4a4', boxShadow: '#aaaaaa 0px 0px 20px' }}>
                            <div className="hob" id="dropMenu_2">
                                <div className="d-flex justify-content-between flex-rows w-100">
                                    <div>
                                        <img style={{ justifyContent: 'start', borderRadius: '100%', marginLeft: '5px', cursor: 'pointer', width: '40px', height: '40px' }} src="./assest/img/user.jpg" className="bg-light dropdown-toggle drop-menu" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" />
                                        <div id="id_name" className="fw-bold" style={{ display: 'inline' }} />
                                    </div>
                                    <div>
                                        <svg style={{ marginBottom: '4px' }} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <rect data-name="Rectangle 21224" width={24} height={24} fill="none" />
                                            <path data-name="Arrow - Right 2" d="M5.778,4.279c-.034.035-.162.184-.281.306A13.014,13.014,0,0,1,2.02,7a2.77,2.77,0,0,1-.707.2,1.16,1.16,0,0,1-.537-.131A1.124,1.124,0,0,1,.3,6.527a5.9,5.9,0,0,1-.154-.638A14.387,14.387,0,0,1,0,3.6,16.635,16.635,0,0,1,.128,1.391a5.1,5.1,0,0,1,.2-.8A1.071,1.071,0,0,1,1.279,0h.034a2.927,2.927,0,0,1,.793.245,13.014,13.014,0,0,1,3.4,2.38,3.4,3.4,0,0,1,.289.332A1.07,1.07,0,0,1,6,3.6a1.125,1.125,0,0,1-.222.683" transform="translate(15.199 10) rotate(90)" fill="#545F7E" />
                                        </svg>
                                    </div>
                                    <div>
                                        <ul id="dpm_prof" className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                            <li id="profile">
                                                <a className="dropdown-item hide d-flex justify-content-start align-items-center fw-bold" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-person-video" viewBox="0 0 16 16">
                                                        <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z" />
                                                    </svg>
                                                    <span style={{ marginLeft: '15px' }}>Profile</span>
                                                </a>
                                            </li>
                                            <li id="logout">
                                                <a className="dropdown-item d-flex justify-content-start align-items-center fw-bold" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                                    </svg>
                                                    <span style={{ marginLeft: '15px' }}>Logout</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ------------------------------- */}
                        </div></ul>
                </div>
            </header>
        </>

    )
}
export default Header;