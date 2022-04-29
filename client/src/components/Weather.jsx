function getFetch(){
    const url = `http://api.weatherapi.com/v1/current.json?key=a3d8677505f14da480c220303222804&q=Las Vegas&aqi=no`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('.cityDisplay').innerText = `${data.location.name}, ${data.location.region}`
            document.querySelector('.tempDisplay').innerText = `${data.current.temp_f}°F`
            document.getElementById('weathericon').src = `${data.current.condition.icon}`
            let weaDateTime = data.location.localtime.split(' ')
            let weaTime = weaDateTime[1].split(':')
            let weaHour = parseInt(weaTime[0])
            if(weaHour > 12){
                document.querySelector('.timeDisplay').innerText = `${weaHour-12}:${weaTime[1]} p.m.`
            }else{
                document.querySelector('.timeDisplay').innerText = `${weaHour}:${weaTime[1]} a.m.`
            }
            
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

getFetch()

export default function Weather(){
    return(
    <div className="weaBar">
        <span className='cityDisplay'> </span>
        <span className='tempDisplay'> </span>
        <span className='timeDisplay'> </span>
        <img id='weathericon'src=" " alt="current condition" />
    </div>
    )}