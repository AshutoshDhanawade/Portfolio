export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h2>The world isn't waiting for trends.<br />Why are you?</h2>
            </div>
            <div className="footer-links">
                <div className="footer-group">
                    <h4>Social</h4>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/ashutosh-dhanawade-574258210/" target="_blank">LinkedIn</a></li>
                        {/* <li><a href="#">Github</a></li>
                        <li><a href="#">Behance</a></li> */}
                    </ul>
                </div>
                <div className="footer-group">
                    <h4>Work</h4>
                    <ul>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Case Studies</a></li>

                    </ul>
                </div>
                <div className="footer-group">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="mailto:ajdhanawade2001@gmail.com">Email Me</a></li>

                    </ul>
                </div>
            </div>
        </footer>
    );
}