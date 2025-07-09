// Este script se encarga de cargar los datos de las batallas desde Google Sheets y mostrarlos en la página web.
  document.addEventListener('DOMContentLoaded', function () {
    Tabletop.init({
      key: '2PACX-1vQICp-dcHQ0QW1toxwiflQsui59J4UnwkQMMHJ--9zWYxavdCnZ4i5KBunEBYAiNvPGgTvk56erVBu-', // Reemplaza esto
      callback: mostrarBatallas,
      simpleSheet: true
    });
  });

  function mostrarBatallas(data) {
    const contenedor = document.getElementById('batallas');

    data.forEach(batalla => {
      const div = document.createElement('div');
      div.className = 'battle-entry';
      div.innerHTML = `
        <h2>Combate #${batalla.ID}</h2>
        <p><strong>Resultado:</strong> ${batalla.Resultado}</p>
        <p><strong>Rival:</strong> ${batalla.Rival}</p>
        <p><strong>Personajes usados:</strong> ${batalla.TusPersonajes}</p>
        <p><strong>Personajes del rival:</strong> ${batalla.PersonajesRival}</p>
        <p><strong>Razón del resultado:</strong> ${batalla.Razon}</p>
        <p><strong>Reglamento:</strong> ${batalla.Reglamento}</p>
        <p><strong>Juez:</strong> ${batalla.Juez} (${batalla.TipoJuez})</p>
        <p><strong>Temporalidad:</strong> ${batalla.Temporalidad}</p>
        <p><strong>Campo de batalla:</strong> ${batalla.Campo}</p>
        <p><strong>Acuerdo especial:</strong> ${batalla.Acuerdo}</p>
        <p><strong>Comenzó el combate:</strong> ${batalla.Comenzo}</p>
        <p><strong>Retador:</strong> ${batalla.Retador}</p>
        <hr>
      `;
      contenedor.appendChild(div);
    });
  }