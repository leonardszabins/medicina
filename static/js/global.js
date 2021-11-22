let slimnicuSaraksts = []; //paredzets prieks doktori un poliklinikas
let arstuSaraksts = []; //Paredzēts prieks arsti.html



function arstu_ievade()
{
  let Input1, Input2, Input3 ;
  Input1 = document.getElementById("arstaVards").value;
  Input2 = document.getElementById("arstaJoma").value;
  Input3 = document.getElementById("laiks").value;
 
  let lietina2 = {arstaVards : arstaVards.value, arstaJoma : arstaJoma.value, laiks : laiks.value }

  arstuSaraksts.push(lietina2)
 
  localStorage.setItem("Arstu Saraksts",JSON.stringify(arstuSaraksts))
 
  let li = document.createElement("li");
  let t = document.createTextNode(Input1);

  li.appendChild(t);

  document.getElementById("arstuUL").appendChild(li);
  

  document.getElementById("arstaVards").value = "";
  document.getElementById("arstaJoma").value = "";
  document.getElementById("laiks").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode(" " + Input2 + " ");
  let text = document.createTextNode(Input3);


  span.className = "arsti";
  span.appendChild(txt);
  span.appendChild(text);
  li.appendChild(span);

}

function slimnicu_ievade()
{
  let Input47, Input5 ;
  Input47 = document.getElementById("slimnica").value;
  Input5 = document.getElementById("slimnicaAdrese").value;

 let li = document.createElement("li");
 let r = document.createTextNode(Input47);
 
 li.appendChild(r);
 
 document.getElementById("slimnicuUl").appendChild(li);

  document.getElementById("slimnica").value = "";
  document.getElementById("slimnicaAdrese").value = "";

  let span = document.createElement("SPAN");
  let tekst = document.createTextNode(" " + Input5 + " ");

  span.className = "slimnicas";
  span.appendChild(tekst);
  li.appendChild(span);

}

function arstuSarakstuIzvade()
{
  
  let arstuSarakstsHTML = document.getElementById("arstuSaraksts");
  arstuSarakstsHTML.innerHTML = "";

  for(let x=0; x < arstuSaraksts.length; ++x)
  {
    let sarakstsKuruIzvadis= `
    <div class="ArstuSarakstsPrieksIzvades">
      <li>
      ${arstuSaraksts[x].arstaVards}  ${arstuSaraksts[x].arstaJoma}  
      ${arstuSaraksts[x].laiks}
      </li>
    </div>
    `;
    arstuSarakstsHTML.innerHTML += sarakstsKuruIzvadis;
  }
  localStorage.setItem("Darbi", JSON.stringify(arstuSaraksts));
  
}

function arstuIzdzesana()
{
  arstuSaraksts = [];

  location.reload();
}

function slimnicuIzdzesana()
{
  slimnicuSaraksts = [];

  location.reload();
}
/* 
document.getElementById("pievienotSlimnicas").addEventListener('click', () =>
{
  var lietina1 = {slimnica: slimnica.value, slimnicaAdrese: slimnicaAdrese.value};

  slimnica.value = "";
  slimnicaAdrese.value = "";

  slimnicuSaraksts.push(lietina1);

  paradiSlimnicas();
})


function arstuIzdzesana()
{
  arstuSaraksts = [];

  paradiArstus();
}


function slimnicuIzdzesana()
{
  slimnicuSaraksts = [];
  
  
  paradiSlimnicas();
}




function paradiSlimnicas()
{
  var visasVizites = document.getElementById('slimnicuSaraksts');
  visasVizites.innerHTML = "";

  for(let x=0; x < slimnicuSaraksts.length; ++x)
  {
    var slimnicuVizite=`
      <div class="Vizites">
        <li>
        Slimnīca: ${slimnicuSaraksts[x].slimnica}
        // Adrese: ${slimnicuSaraksts[x].slimnicaAdrese}
        </li>
      </div>`;
    
    visasVizites.innerHTML += slimnicuVizite;
  }
  


document.getElementById("pievienotArstus").addEventListener('click', () =>
{
  var lietina = {arstaVards: arstaVards.value, arstaJoma: arstaJoma.value, laiks: laiks.value};

  arstaVards.value = "";
  arstaJoma.value = "";
  laiks.value = "";
  
  arstuSaraksts.push(lietina);

  paradiArstus();
})

function paradiArstus()
{
var visiArsti = document.getElementById('arstuSaraksts');
  visiArsti.innerHTML = "";

  for(var x=0; x < arstuSaraksts.length; ++x)
  {
    var arstuVizite=`
      <div class="arstuVizites">
        <li>
        Vārds uzvārds: ${arstuSaraksts[x].arstaVards}
        // Darba joma: ${arstuSaraksts[x].arstaJoma}
        //// Laiks: ${arstuSaraksts[x].laiks}
        </li>
      </div>`;
  }
    visiArsti.innerHTML += arstuVizite;
}

*/

document.getElementById('arstiDrop').onclick = function() {
  var values = [Input1, Input2, Input3, Input47, Input5];
  
  var select = document.createElement("select");
  select.name = "dakteri";
  select.id = "dakteri";

  for (const val of values)
  {
      var option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option);
  }
  
  var label = document.createElement("label");
  label.innerHTML = "Izvēlies ārstu: "
  label.htmlFor = "dakteri";

  document.getElementById("container").appendChild(label).appendChild(select);
}
