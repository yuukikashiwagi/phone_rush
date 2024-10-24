let lastGame;
let getPhone;
let isGoal;

document.addEventListener("DOMContentLoaded", () => {
    let text;
    if (localStorage.length > 0) {
        lastGame = document.getElementById("score");
        getPhone = localStorage.getItem('getPhone');
        isGoal = localStorage.getItem('isGoal') // 文字列
        if (isGoal === true){
            text = "おめでとう"
        }else{
            text = "残念"
        }
        lastGame.innerHTML = 
            text + "<br>"+ 
            "獲得したスマホの数は" + getPhone + "です。"
    }
    var sensorBtn = document.getElementById("sensor_permission");
    sensorBtn.addEventListener("click", () => {
        if (window.DeviceOrientationEvent && window.DeviceOrientationEvent.requestPermission) {
            // 権限付与文の追加
            DeviceOrientationEvent.requestPermission()
                .then((state) => {
                    if (state === 'granted') {
                        window.location.href = "./race.html";
                        // alert('Permission granted for DeviceOrientationEvent');
                    } else {

                        alert('Permission not granted for DeviceOrientationEvent');
                    }
                })
                .catch((err) => console.error(err));
        } else {
            window.location.href = "./race.html";
        }
    })
})