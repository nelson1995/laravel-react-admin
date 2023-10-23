import { Card } from "react-bootstrap";

export default function CardThree({ props }) {
    return (
        <Card className="shadow mb-4">
            <Card.Body className="pb-3">
                <div className="d-flex align-items-center justify-content-center" style={{backgroundColor:"rgba(203, 220, 249, 0.5)", width:"15%", padding: "3%", borderRadius:"50px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3C50E0" stroke-width="2" stroke-linecap="butt" stroke-linejoin="bevel"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
                </div>

                <div className="mt-4 d-flex align-items-end justify-content-between">
                    <div>
                        <h4 className="text-md fw-bold text-black dark:text-white">
                            8,450
                        </h4>
                        <span className="font-small">Total Product</span>
                    </div>

                    <span className="d-flex align-items-center gap-1 font-small text-meta-3" style={{color:"#10B981"}}>
                        2.59%
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="butt" stroke-linejoin="bevel"><path d="M12 19V6M5 12l7-7 7 7"/></svg>
                    </span>
                </div>
            </Card.Body>
        </Card>
    );
}
