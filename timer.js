const endDate = "23 November 2023 12:00 AM"

document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll('input')

function clock() {
    const end = new Date(endDate); // end Date
    const now = new Date(); // current Date
    const diff =( end - now) / 1000;

    if(diff < 0) return; // after complit countdown value is (0,0,0,0)

    //for Days (1 day  = 24hr , 1hr = 60 mins ,60 min = 3600 sec)
    inputs[0].value = Math.floor(diff / 3600 / 24);   

    //for Hours  
    inputs[1].value = Math.floor(diff / 3600) % 24;

    //for Minutes
    inputs[2].value = Math.floor(diff / 60) % 60;

    //for seconds
    inputs[3].value = Math.floor(diff) % 60;

    
}

setInterval(
    ()=>{
        clock()
    },1000
)