export default function ProfileModal() {
    return (
        <div className="modal-overlay" id="profile-modal">
            <div className="profile-card-modal">
                <span className="modal-close" id="modal-close">&times;</span>
                <div className="modal-bg-pattern"></div>
                <div className="modal-content">
                    <img
                        src="https://ui-avatars.com/api/?name=Ashutosh+Dhanawade&background=9b4d6d&color=fff&size=200"
                        alt="Ashutosh Dhanawade"
                        className="modal-profile-img"
                    />
                    <h2 className="modal-name">Ashutosh Dhanawade</h2>
                    <p className="modal-handle">@ashutosh . India</p>

                    <h3 className="modal-section-title">About</h3>
                    <p className="modal-about">
                        Welcome to Ashutosh's World, where creativity meets innovation. Dive into a realm of design
                        discoveries waiting to be explored. My expertise in design offers a unique perspective that
                        transforms ideas into reality. Explore the possibilities and bring your visions to life with my
                        exceptional design skills.
                    </p>

                    <h3 className="modal-exp-title">Less Than 3 Years Experience Includes:</h3>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg"
                        alt="Google"
                        className="modal-google-icon"
                    />
                </div>
            </div>
        </div>
    );
}