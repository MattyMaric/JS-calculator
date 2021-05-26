var izvrseno = false;

function dodajRezultat(dogadjaj)
{
    var rezultat= document.getElementById("rezultat");
    if (izvrseno == true)
    {
        rezultat.value="";
        izvrseno = false;
    }
    dogadjaj=dogadjaj || window.event;
    var kliknutiElement=dogadjaj.target;
    var vrijednost = kliknutiElement.value;
    var rezultat = document.getElementById("rezultat");
    rezultat.value+=vrijednost;
}

function izvrsiIzraz(dogadjaj)
{
    var rezultat= document.getElementById("rezultat");
    rezultat.value=eval(rezultat.value);
    izvrseno = true;
}
function izbrisi(dogadjaj)
{
    var rezultat = document.getElementById("rezultat");
    rezultat.value="";
}