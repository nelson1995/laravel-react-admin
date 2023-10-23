import React from "react";
import { Card, Button } from "react-bootstrap";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function LineChart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Line chart",
            },
        },
    };

    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];
    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: labels.map(() =>
                    faker.number.int({ min: -1000, max: 1000 })
                ),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Dataset 2",
                data: labels.map(() =>
                    faker.number.int({ min: -1000, max: 1000 })
                ),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
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
                <div>
                    <Line data={data} options={options} />
                </div>
            </Card.Body>
        </Card>
    );
}
