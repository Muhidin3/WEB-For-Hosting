mycancas = document.getElementById('canvas')
c = mycancas.getContext('2d')

mycancas.width = window.innerWidth
mycancas.height = window.innerHeight


inwid = window.innerWidth
inhei = window.innerHeight



Amplitude = 100
wavelength = 0.01
add = 0
function loop() {
    requestAnimationFrame(loop)
    c.moveTo(0,inhei/2)

    c.clearRect(0,0,1000,1000)

    c.beginPath()
    for( let i = 0 ; i< inwid ; i++){

        c.lineTo(i,inhei/2 + Math.sin(i*wavelength+add)*Amplitude)
    }
    add+=0.04
    c.stroke()
}
loop()
       








console.log(mycancas.height/2)