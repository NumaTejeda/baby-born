const data = {
  "parteras": {
    "Aldana": "221-5486386",
    "Ariana": "2345-506957",
    "Carla": "221-4594207",
    "Karen": "221-5578258",
    "Macarena": "2214-347182",
    "Malena": "221-5917893",
    "Narela": "221-3194930",
    "Pilar": "221-6059921",
    "Rocío": "221-3148089",
    "Sandra": "221-4367986",
    "Sofía": "221-6492181",
    "Valentina": "291-5763225",
    "Vanina": "2345-688045",
    "Verónica": "221-5561941"
  },
  "guardias": {
    "1": {
      "dia": "Sandra",
      "noche": "Rocío"
    },
    "2": {
      "dia": "Ariana",
      "noche": "Malena"
    },
    "3": {
      "dia": "Verónica",
      "noche": "Verónica"
    },
    "4": {
      "dia": "Malena",
      "noche": "Vanina"
    },
    "5": {
      "dia": "Macarena",
      "noche": "Vanina"
    },
    "6": {
      "dia": "Macarena",
      "noche": "Aldana"
    },
    "7": {
      "dia": "Macarena",
      "noche": "Ariana"
    },
    "8": {
      "dia": "Sandra",
      "noche": "Sofía"
    },
    "9": {
      "dia": "Ariana",
      "noche": "Verónica"
    },
    "10": {
      "dia": "Pilar",
      "noche": "Verónica"
    },
    "11": {
      "dia": "Carla",
      "noche": "Ariana"
    },
    "12": {
      "dia": "Rocío",
      "noche": "Malena"
    },
    "13": {
      "dia": "Ariana",
      "noche": "Malena"
    },
    "14": {
      "dia": "Macarena",
      "noche": "Ariana"
    },
    "15": {
      "dia": "Sandra",
      "noche": "Karen"
    },
    "16": {
      "dia": "Malena",
      "noche": "Narela"
    },
    "17": {
      "dia": "Pilar",
      "noche": "Malena"
    },
    "18": {
      "dia": "Narela",
      "noche": "Malena"
    },
    "19": {
      "dia": "Narela",
      "noche": "Rocío"
    },
    "20": {
      "dia": "Sofía",
      "noche": "Vanina"
    },
    "21": {
      "dia": "Macarena",
      "noche": "Vanina"
    },
    "22": {
      "dia": "Sandra",
      "noche": "Karen"
    },
    "23": {
      "dia": "Malena",
      "noche": "Vanina"
    },
    "24": {
      "dia": "Pilar",
      "noche": "Verónica"
    },
    "25": {
      "dia": "Carla",
      "noche": "Verónica"
    },
    "26": {
      "dia": "Narela",
      "noche": "Sofía"
    },
    "27": {
      "dia": "Malena",
      "noche": "Aldana"
    },
    "28": {
      "dia": "Malena",
      "noche": "Vanina"
    },
    "29": {
      "dia": "Sandra",
      "noche": "Karen"
    },
    "30": {
      "dia": "Carla",
      "noche": "Verónica"
    }
  }
}

const btnUpdate = document.getElementById('update');
const parteraSection = document.getElementById('partera');
const title = document.getElementById('title');



const createHtmlInfo = (name, telefono) => {

  let htmlInfo =

    ` <section id="htmlInfo">
    
    <hr>
      <p class="card-text">
        <span id="nombre">${name}</span>
        <span id="telefono">Telefono: ${telefono}</span>
      </p>
      <hr>
  <div class="d-flex p-0" id="btn-actions">
    <a href="tel:${telefono}" class="w-100 me-1">
        <button type="button" class="btn btn-warning w-100">Llamada</button>
    </a>
    <a href="https://wa.me/${telefono}?text=Hola!%20${name}%20estoy%20con%20contraciones%20cada" class="w-100 ms-1">
        <button type="button" class="btn btn-success w-100">Whatsapp</button>
    </a>
  </div>
  
  </section>
  `;
      
  title.insertAdjacentHTML('afterend', htmlInfo);
};

// const fechaISO = ahora.toISOString().split('T')[0]; // YYYY-MM-DD

btnUpdate.addEventListener('click', e => {

  e.preventDefault();

  const htmlInfo = document.getElementById('htmlInfo');
  if(htmlInfo){
    htmlInfo.remove();
  }
  iniciandoApp();

});

const iniciandoApp = () => {
  const ahora = new Date();

  const hora = ahora.getHours();
  const dayNumber = ahora.getDate();

  let dia = data.guardias[dayNumber];

  if (hora < 8) {
    dia = data.guardias[dayNumber - 1];
    createHtmlInfo(dia.noche, data.parteras[dia.noche]);
    console.log(`Guardia de ${dia.noche} TEL:  ${data.parteras[dia.noche]}`);
  }
  else if (hora >= 8 && hora < 20) {
    createHtmlInfo(dia.dia, data.parteras[dia.dia]);
    console.log(`Guardia de ${dia.dia} TEL:  ${data.parteras[dia.dia]}`);
  } else {
    createHtmlInfo(dia.noche, data.parteras[dia.noche]);
    console.log(`Guardia de ${dia.noche} TEL: ${data.parteras[dia.noche]}`);
  }
};
iniciandoApp();


// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('sw.js')
//     .then(() => console.log("Service Worker registrado"))
//     .catch(err => console.error("Error al registrar el SW:", err));
// }