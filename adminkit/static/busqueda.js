
/* 1. Hacer la solicitud fetch al API de Pokemon
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json()) // 2. Convertir la respuesta a formato JSON
  .then(data => {
    console.log(data);
    const listaPokemon = document.getElementById('listapokemon');
    const pokemon = data.results;
    const listaPokemonHTML = pokemon.map(p => `<li>${p.name}</li>`).join(''); // 3. Crear una lista de elementos HTML
    listaPokemon.innerHTML = listaPokemonHTML; // 4. Agregar la lista de elementos HTML al div
  })
  .catch(error => console.error(error));
*/

/*const listaPokemon = document.getElementById('listapokemon');
let URL= "http://[2800:200:e800:3b67::1]:6969/api/employees/get";

  fetch('http://bore.pub:43804/api/employees/get', {method: "GET"})
    .then(response => response.json())
    .then(data => console.log(data)).catch(error => console.log(error));
  */

    
function mostrarpokemon(data){
  const div= document.createElement('div');
  div.classList.add('pokemon');
  div.innerHTML= `
  <div class="pokemon">
						<div class="col-12 col-lg-6">
							<div class="Rectangle10" style="margin-left: 50%;" action="registro.php" method="post">
								<div style="display: flex;" class="card-header">
									<h5 class="textotitulo">DATOS DEL DONANTE</h5>
									
								</div>
								<h1  class= "textonormal" style="margin-left: 50px; margin-top: 50px;">Nombres</h1>
								<div style="margin-left: 50px">
									<div name="nombres" type="text" class="Rectangle21" placeholder="" required>${data.name}</div>
								</div>
								<h1 class= "textonormal" style="margin-left: 50px;margin-top: 50px;">Apellidos</h1>
								<div style="margin-left: 50px">
									<div name="apellidos" type="text" class="Rectangle21" placeholder="">${data.id}</div>
								</div>
								<div>
									<div style="display: flex;">
										<h1 class= "textonormal" style="margin-left: 50px;margin-top: 50px;">Documento</h1>
										<h1 class= "textonormal" style="margin-left: 100px;margin-top: 50px;">Tipo de Sangre</h1>
									</div>
									<div style="display: flex;">
										<div style="margin-left: 50px">
											<div name="documento" type="text" class="Rectangle21" placeholder="" style="width: 200px;"><?php echo $Documento?></div>
										</div>
										<div style="margin-left: 30px">
											<div name="tipo_sangre" type="text" class="Rectangle21" placeholder="" style="width: 230px;"><?php echo $Tipo_de_sangre?></div>
										</div>
									</div>
									<h1 class= "textonormal" style="margin-left: 50px;margin-top: 50px;">Fecha de Nacimiento</h1>
									<div style="margin-left: 50px">
										<div name="fecha_nacimiento" type="text" class="Rectangle21" placeholder=""><?php echo $Fecha_de_nacimiento?></div>
									</div>
							</div>
						</div>
						</div>

					</div>
  `;
  listaPokemon.append(div);
}