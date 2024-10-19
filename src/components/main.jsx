import "./styles/main.scss";

export default function Main() {
    return (
        <div id="article">
        
        <div className="sections">
            <section>
                <div className="main-frame">
                    <iframe width="752" height="423" src="https://www.youtube.com/embed/Os2tW8nbvxM" title="Super Woman _ Ik Miles Ft Tafa tafe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="frame-grid-container">
                    <svg className="arrow arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-circle-left"><rect width="24" height="24" opacity="0"/><path d="M16 11h-5.66l1.25-1.31a1 1 0 0 0-1.45-1.38l-2.86 3a1 1 0 0 0-.09.13.72.72 0 0 0-.11.19.88.88 0 0 0-.06.28L7 12a1 1 0 0 0 .08.38 1 1 0 0 0 .21.32l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L10.41 13H16a1 1 0 0 0 0-2z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g></svg>
                    <div className="frame-grid">
                        <iframe className="frame" src="https://www.youtube.com/embed/Os2tW8nbvxM" title="Super Woman _ Ik Miles Ft Tafa tafe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe className="frame" src="https://www.youtube.com/embed/Os2tW8nbvxM" title="Super Woman _ Ik Miles Ft Tafa tafe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe className="frame" src="https://www.youtube.com/embed/Os2tW8nbvxM" title="Super Woman _ Ik Miles Ft Tafa tafe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe className="frame" src="https://www.youtube.com/embed/Os2tW8nbvxM" title="Super Woman _ Ik Miles Ft Tafa tafe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe className="frame" src="https://www.youtube.com/embed/Os2tW8nbvxM" title="Super Woman _ Ik Miles Ft Tafa tafe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <svg className="arrow arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-circle-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M17 12v-.09a.88.88 0 0 0-.06-.28.72.72 0 0 0-.11-.19 1 1 0 0 0-.09-.13l-2.86-3a1 1 0 0 0-1.45 1.38L13.66 11H8a1 1 0 0 0 0 2h5.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.32A1 1 0 0 0 17 12z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g></svg>
                </div>
            </section>

            <section>
                <h1 className="title">Popular IK Miles Beats</h1>
                <div className="beat-grid">
                    
                    <Beat />
                    <Beat />
                    <Beat />
                    <Beat />
                    <Beat />
                    <Beat />

                </div>
            </section>
        </div>

        <div>
            
        </div>
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