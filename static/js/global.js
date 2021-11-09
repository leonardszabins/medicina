let slimnicuSaraksts = []; //paredzets prieks doktori un poliklinikas
let arstuSaraksts = []; //Paredzēts prieks arsti.html

let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
  event.target.style.display = "none";
  }
function arstu_ievade()
{
let Input1, Input2, Input3 ;
Input1 = document.getElementById("vards").value;
Input2 = document.getElementById("joma").value;
Input3 = document.getElementById("laiks").value;

let li = document.createElement("li");
let t = document.createTextNode(Input1);

li.appendChild(t);

if (Input1 != '' && Input2 != '' && Input3 != ''){
  document.getElementById("arstuUL").appendChild(li);
}

document.getElementById("Input1").value = "";
document.getElementById("Input2").value = "";
document.getElementById("Input3").value = "";

let span = document.createElement("SPAN");
let txt = document.createTextNode( Input2);
let text = document.createTextNode( Input3);


span.className = "arsti";
span.appendChild(txt);
span.appendChild(text);
li.appendChild(span);

}

/* Šo sūdu aiztikt vēlāk myb
document.getElementById("submit").addEventListener('click', () =>
{


}
*/

function arstuIzdzesana()
{
  arstuSaraksts = [];
}

function slimnicuIzdzesana()
{
  slimnicuSaraksts=[];
}

function slimnicuIzvade()
{
  let visasVizites = document.getElementById('saraksts');
  visasVizites.innerHTML = "";

  for(let x=0; x < arstuSaraksts.length; ++x)
  {
    let arstuVizite=`
      <div class="Vizites">
        <h3>
      
      </div>`;
    
  }

}
