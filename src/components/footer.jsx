import "../styles/styles.css"
export function Footer(){
    return(
        <footer>
            <div className="footer-container-wide">
                <div className="footer-left-info">
                    <div className="info-item"><i className="ph-fill ph-map-pin"></i><span>Av. Principal, 123 - Centro</span></div>
                    <div className="info-item"><i className="ph-fill ph-clock"></i><span>Seg a Sáb: 09:00 às 20:00</span></div>
                    <div className="info-item"><i className="ph-fill ph-phone"></i><span>(11) 99999-9999</span></div>
                </div>

                <div className="footer-middle-logo">
                    <div className="logo-area-footer">
                        <i className="ph-fill ph-scissors icon-logo-footer"></i>
                        <h2>Barber<span>Pro</span></h2>
                    </div>
                </div>

                <div className="footer-right-nav">
                    <div className="footer-icons">
                        <a href="#"><i className="ph-fill ph-map-pin"></i></a>
                        <a href="#"><i className="ph-fill ph-instagram-logo"></i></a>
                        <a href="#"><i className="ph-fill ph-whatsapp-logo"></i></a>
                    </div>
                    <p>&copy; 2026 BarberPro. <a href="#" className="admin-link">Admin</a></p>
                </div>
            </div>
        </footer>
    );
}