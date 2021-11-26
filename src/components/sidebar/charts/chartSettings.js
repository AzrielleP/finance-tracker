const incomeColor = ["#023E8A", "#0077B6", "#0096C7", "#00B4D8", "#48CAE4", "#82DDED", "#ADE8F4", "#CAF0F8"];

const expenseColor = ["#800F2F", "#A4133C", "#C9184A", "#FF4D6D", "#FF758F", "#FF8FA3", "#FFB3C1", "#FFF0F3"];

const createData = (data, colorType) => {
    const values = data.map((item) => item.value);
    let total = values.reduce((a, v) => a + v);
    let inPercent = values.map((value) => Math.max((value / total) * 100, 1));

    return {
        labels: data.map((item) => item.categoryName),
        datasets: [
            {
                data: inPercent,
                backgroundColor: colorType === "income" ? incomeColor : expenseColor,
                borderWidth: 1,
            },
        ],
    };
};

const customization = (data) => {
    const dataValue = data.map((item) => item.value);
    const dataLabel = data.map((item) => item.categoryName);
    return {
        plugins: {
            legend: {
                position: "bottom",
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        let value = dataValue[tooltipItem.dataIndex];
                        let label = dataLabel[tooltipItem.dataIndex];
                        return `${label}: ${value}`;
                    },
                },
            },
        },
        layout: {
            padding: 5,
        },
    };
};

export { createData, customization };
