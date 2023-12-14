function change(){
    const pramH = document.getElementById('colorInp').value
    document.getElementById('co1').style.background = `hsl(${pramH}, 100%, 50%)`
    document.getElementById('co2').style.background = `hsl(${pramH}, 80%, 50%)`
    document.getElementById('co3').style.background = `hsl(${pramH}, 60%, 50%)`
    document.getElementById('co4').style.background = `hsl(${pramH}, 40%, 50%)`
    document.getElementById('co5').style.background = `hsl(${pramH}, 20%, 50%)`

}