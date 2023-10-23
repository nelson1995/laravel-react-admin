import { Card } from "react-bootstrap";

export default function CardTwo({ props }) {
    return (
        <Card className="shadow mb-4">
            <Card.Body className="pb-3">
                <div className="d-flex align-items-center justify-content-center" style={{backgroundColor:"rgba(203, 220, 249, 0.5)", width:"15%", padding: "3%", borderRadius:"50px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3C50E0" stroke-width="2" stroke-linecap="butt" stroke-linejoin="bevel"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>

                <div className="mt-4 d-flex align-items-end justify-content-between">
                    <div>
                        <h4 className="text-md fw-bold text-black dark:text-white">
                            3,456
                        </h4>
                        <span className="font-small">Total Users</span>
                    </div>

                    <span className="d-flex align-items-center gap-1 font-small text-meta-3" style={{color:"#f30516"}}>
                        0.95%
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f30516" stroke-width="2" stroke-linecap="butt" stroke-linejoin="bevel"><path d="M12 5v13M5 12l7 7 7-7"/></svg>
                    </span>
                </div>
            </Card.Body>
        </Card>
    );
}
