import React from "react";
import { Card } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function PieChart(props) {
    const data = {
        labels: ["NUP", "FDC", "NRM", "UPC", "Independent"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Card className="shadow mb-4">
            <Card.Body>
                <div className="d-flex align-items-start justify-content-between gap-3">
                    <div className="flex w-100 gap-3">
                        <div className="flex" />
                    </div>
                    <div className="flex justify-content-end" />
                </div>
                <Pie data={data} />
            </Card.Body>
        </Card>
    );
}
