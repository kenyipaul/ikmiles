import "./style.css";

export default function Main() {
    return (
        <div className="main-page-section">

            <section>
                <div className="top-bar">
                    <h1>Featured Videos</h1>
                </div>
                <div className="content">
                    <div className="main-frame">
                        <video src="" controls></video>
                    </div>
                    <div className="video-frames">
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                    </div>
                </div>
            </section>

            <section>
                <div className="top-bar">
                    <h1>Popular IK Miles Beats</h1>
                </div>
                <div className="beats-grid">
                    <Beat />
                    <Beat />
                    <Beat />
                    <Beat />
                    <Beat />
                    <Beat />
                </div>
                <button>View All Beats <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 12H20M20 12L17 9M20 12L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </svg></button>
            </section>

            <section>
                <div className="top-bar">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <ul>
                    <li>When did IK Miles start making music? <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"/><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/></g></g></svg></li>
                    <li>When did IK Miles start making music? <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"/><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/></g></g></svg></li>
                </ul>
            </section>
        
        </div>
    )
}



function Beat() {
    return (
        <div className="beat">
            <div className="cover"></div>
            <div className="content">
                <h1>Burna Boy TypeBeat 2024</h1>
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="24" height="24" fill="currentColor"><path d="M15.812.017H4.145C1.855.017 0 1.852 0 4.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V4.116c0-2.264-1.856-4.1-4.145-4.1zM13.009 7.28 7.552 9.855a.219.219 0 0 1-.314-.196V4.35a.22.22 0 0 1 .318-.193l5.458 2.735a.216.216 0 0 1-.005.389z"/></svg> Open in Youtube</p>
            </div>
        </div>
    )
}