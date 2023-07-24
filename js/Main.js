let max;
const chart = document.querySelector(".charts");
const loadChart = async () => {
    let data;
    try {
        data = await fetch('./js/data.json');
        data = await data.json();
        max = Math.max(...data.map(e => e.amount));
    } catch (err) {
        console.error('an error has encoured ' + err);
    }
    data.forEach((e) => {
        let child = createChart(e.amount, e.day);
        chart.innerHTML += child;
    });
}

const createChart = (data, dayName) => {

    return `
    <div class="chart">
        <div class="diagram">
            <div class="fill ${data === max ? 'max' : ''}" style="height : ${data / 70 * 100}%">
                <p class="ammount">$${data}</p>
            </div>
        </div>
        <p class="day-name">${dayName}</p> 
    </div>
    `;
}

loadChart();






