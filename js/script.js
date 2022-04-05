function init(){
    var entry = document.getElementById('entryinput');
    var textout = document.getElementById('textoutput');
    var button = document.getElementById('entrybutton');
    button.addEventListener('click', function() {
            //var entry = document.getElementById('entryinput').value;
            alert("Mofadesewa Atanda: " + entry.value);
            textout.innerHTML = entry.value;
    })
} 
    window.addEventListener('load', init);