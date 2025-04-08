const data = {
  "parteras": {
    "Aldana": "2215486386",
    "Ariana": "2345506957",
    "Carla": "2214594207",
    "Karen": "2215578258",
    "Macarena": "2214347182",
    "Malena": "2215917893",
    "Narela": "2213194930",
    "Pilar": "2216059921",
    "Rocío": "2213148089",
    "Sandra": "2214367986",
    "Sofía": "2216492181",
    "Valentina": "2915763225",
    "Vanina": "2345688045",
    "Verónica": "2215561941"
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

const title = document.querySelector('#title')
const btnUpdate = document.querySelector('#update');

const createSectionGuardia = (name, phone) => {
  
  let guardia = `
  <section id='htmlInfo'>
      <p id='info' class="info">${name} Teléfono: ${phone}</p>
      <div class="buttons">
          <a href="tel:${phone}" class="btn call">📞 Llamar</a>
          <a href="https://wa.me/${phone}?text=Hola!%20${name}%20estoy%20con%20contraciones%20cada" class="btn whatsapp">💬 WhatsApp</a>
      </div>
  </section> `
  
  title.insertAdjacentHTML('afterend', guardia);
}

const animateUpadate = () => {

  const htmlInfo = document.querySelector('#info');
  if (htmlInfo) {
      htmlInfo.remove(); // Elimina la información actual
  }

  // Crea un mensaje de "Actualizando..."
  const loadingMessage = document.createElement('p');
  loadingMessage.classList = 'info'
  loadingMessage.id = 'loading';
  loadingMessage.textContent = 'Actualizando...';
  loadingMessage.style.textAlign = 'center';
  loadingMessage.style.fontSize = '1.2rem';
  loadingMessage.style.color = '#007bff'; // Azul para indicar acción
  title.insertAdjacentElement('afterend', loadingMessage);

  // Simula retraso 
  setTimeout(() => {
      loadingMessage.remove(); 
      appInit();
  }, 1000); // 
}

const appInit = () => {
  
  let ahora = new Date();
  let hora = ahora.getHours();
  let dia = ahora.getDate();
  let dataPartera = data.guardias[dia];
  
  const htmlInfo = document.querySelector('#htmlInfo')
  
  
  if(htmlInfo){
      htmlInfo.remove()
  }
  
  if(hora >= 8 && hora < 20){
      createSectionGuardia(dataPartera.dia, data.parteras[dataPartera.dia] )
  }
  else if( hora >= 20){
      createSectionGuardia(dataPartera.noche, data.parteras[dataPartera.noche])
  }
  else{
      dataPartera = data.guardias[dia - 1];
      createSectionGuardia(dataPartera.noche, data.parteras[dataPartera.noche])
  }

}

btnUpdate.addEventListener('click', e =>{
  e.preventDefault();
  animateUpadate()
})

appInit();


// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('sw.js')
//     .then(() => console.log("Service Worker registrado"))
//     .catch(err => console.error("Error al registrar el SW:", err));
// }