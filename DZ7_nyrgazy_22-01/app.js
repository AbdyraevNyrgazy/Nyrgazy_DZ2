
function animation(args, elem){
    let i = {
        radius:250,
        speed:20
    }
    let f = 0;
    let s = 2 * Math.PI / 180;
    setInterval(function() {
        f += s;
        elem.style.left =  235 + i.radius * Math.sin(f)  + 'px';
        elem.style.top =   235 + i.radius * Math.cos(f) + 'px';
    }, i.speed)
}


////////2//////////////

const button = document.querySelector('.click')
const second = document.querySelector('.second')

let i = 0


const sub = () => {
    const count = setInterval(()=>{
        i++
        second.innerText = i

    } , 1000)
    setTimeout(()=>{
        clearInterval(count)
    } , 60000)
}

button.onclick = ()=> sub()

