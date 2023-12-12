
    setInterval(()=>{
        let d=new Date();

        let hour=document.getElementById("hour");
        let minute=document.getElementById("minutes");
        let second=document.getElementById("seconds");

        hour.innerHTML = (d.getHours() < 10 ? "0" : "") + d.getHours();
        minute.innerHTML=(d.getMinutes()<10?"0":"")+d.getMinutes();
        second.innerHTML=(d.getSeconds()<10?"0":"")+d.getSeconds();
    },1000)