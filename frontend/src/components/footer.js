const Footer = () =>{
    return(
        <div className="footer">
            <div className="container">
                <h1 className="footer_head"> 
                    just scratching the surface
                </h1>
                <div className="row">
                    <div className="width">
                        <h3 className="section_head left_align ">
                            About our company
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                    <div className="footer_flex footer_flex_1000 width">
                        <div>
                            <h3 className="section_head left_align">
                                Getting around
                            </h3>
                            <ul>
                                <li><a href="#" className="nav_link">Home</a></li>
                                <li><a href="#" className="nav_link">About</a></li>
                                <li><a href="#" className="nav_link">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="section_head left_align">
                                Other things
                            </h3>
                            <ul>
                                <li><a href="#" className="nav_link">Lorem ipsum</a></li>
                                <li><a href="#" className="nav_link">dolor</a></li>
                                <li><a href="#" className="nav_link">sit amet</a></li>
                                <li><a href="#" className="nav_link">consectetur</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="section_head left_align">
                                And more
                            </h3>
                            <ul>
                                <li><a href="#" className="nav_link">Lorem ipsum</a></li>
                                <li><a href="#" className="nav_link">dolor</a></li>
                                <li><a href="#" className="nav_link">sit amet</a></li>
                                <li><a href="#" className="nav_link">consectetur</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;