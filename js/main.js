document.addEventListener("DOMContentLoaded", () => {
    console.log("JS cargado correctamente");
  
    // Hover para TODOS los dropdowns en navbar
    document.querySelectorAll('.nav-item.dropdown').forEach(dropdownItem => {
      const trigger = dropdownItem.querySelector('.dropdown-toggle');
      const dropdown = new bootstrap.Dropdown(trigger);
  
      dropdownItem.addEventListener('mouseenter', () => dropdown.show());
      dropdownItem.addEventListener('mouseleave', () => dropdown.hide());
    });
  
    // Carrusel de nuevos ingresos
    const contenedor = document.getElementById("nuevos-carrusel");
    if (contenedor) {
      const perfumes = [
        { nombre: "My Way – Armani", descripcion: "Jazmín, vainilla, bergamota.", imagen: "img/perfume1.jpg", fecha: "2024-06-01" },
        { nombre: "La Vie Est Belle – Lancôme", descripcion: "Pera, iris, praliné.", imagen: "img/perfume2.jpg", fecha: "2024-06-02" },
        { nombre: "Light Blue – D&G", descripcion: "Limón, manzana, cedro.", imagen: "img/perfume3.jpg", fecha: "2024-06-04" },
        { nombre: "Fantasy – Britney Spears", descripcion: "Kiwi, chocolate blanco, almizcle.", imagen: "./assets/img/fantasy-bs.png", fecha: "2024-06-05" },
        { nombre: "Burberry Her Elixir", descripcion: "Fresa, ámbar, vainilla.", imagen: "./assets/img/her-elixir-burberry.png", fecha: "2024-06-06" },
        { nombre: "Angel Elixir – Mugler", descripcion: "Pimienta rosa, flor de azahar.", imagen: "./assets/img/my-way-ga.png", fecha: "2024-06-07" }
      ];
  
      const perfumesRecientes = perfumes.sort((a, b) => new Date(b.fecha) - new Date(a.fecha)).slice(0, 5);
  
      perfumesRecientes.forEach(perfume => {
        const div = document.createElement("div");
        div.className = "card-perfume";
        div.innerHTML = `
          <img src="${perfume.imagen}" alt="${perfume.nombre}">
          <div class="nombre">${perfume.nombre}</div>
          <div class="desc">${perfume.descripcion}</div>
        `;
        contenedor.appendChild(div);
      });
    }
  
    // Botón scroll to top
    const scrollBtn = document.getElementById("scrollToTop");
    if (scrollBtn) {
      window.addEventListener("scroll", () => {
        scrollBtn.style.opacity = window.scrollY > 300 ? "1" : "0";
        scrollBtn.style.visibility = window.scrollY > 300 ? "visible" : "hidden";
      });
  
      scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    // Redirección al hacer clic en "Decants"
    const navbarDecants = document.getElementById("navbarDecants");
    if (navbarDecants) {
      navbarDecants.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown-menu")) {
          window.location.href = "/decants.html";
        }
      });
    }
  
    // Redirección al hacer clic en "Inicio"
    const navbarInicio = document.getElementById("navbarInicio");
    if (navbarInicio) {
      navbarInicio.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown-menu")) {
          window.location.href = "/index.html";
        }
      });
    }
  

// Scroll suave con offset global para evitar que la navbar tape las secciones
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();
    const idDestino = this.getAttribute("href").slice(1);
    const seccion = document.getElementById(idDestino);

    if (seccion) {
      const offset = 100; // más espacio (antes era 100)
      const posicion = seccion.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: posicion,
        behavior: "smooth"
      });
    }
  });
});


    
    
  
    // MODALES DE PACKS
    const packsInfo = {
      midnight: {
        title: "Midnight Affair (Night-Out Pack)",
        description: `
          <p>Para tus noches de gala, citas o salidas after-hours, con aromas intensos y seductores:</p>
          <ul>
            <li><strong>Midnight Fantasy</strong> (Britney Spears)</li>
            <li><strong>Angel</strong> (Mugler)</li>
            <li><strong>Burberry Her Elixir</strong></li>
            <li><strong>Bombshell</strong> (Victoria’s Secret)</li>
          </ul>`
      },
      candy: {
        title: "Candylicious (Sweet & Playful Pack)",
        description: `
          <p>Un toque divertido y juvenil, perfecto para el fin de semana o para levantar el ánimo:</p>
          <ul>
            <li><strong>Toy 2 Bubblegum</strong></li>
            <li><strong>Fantasy</strong> (Britney Spears)</li>
            <li><strong>Curious</strong> (Britney Spears)</li>
            <li><strong>Amour</strong> (Aurora Scents)</li>
          </ul>`
      },
      summer: {
        title: "Summer Glow (Fresh & Fruity Pack)",
        description: `
          <p>Ligero y vibrante, ideal para el calor y el día a día:</p>
          <ul>
            <li><strong>Curious</strong> (Britney Spears)</li>
            <li><strong>Amour</strong> (Aurora Scents)</li>
            <li><strong>Burberry Her Elixir</strong></li>
          </ul>`
      },
      musk: {
        title: "Musk Seduction (Sensual Musk Pack)",
        description: `
          <p>Cálido y envolvente, para un perfil más íntimo y sofisticado:</p>
          <ul>
            <li><strong>Angel</strong> (Mugler)</li>
            <li><strong>Bombshell</strong> (Victoria’s Secret)</li>
            <li><strong>Midnight Fantasy</strong></li>
          </ul>`
      },
      floral: {
        title: "Floral & Fruity Twist (Hybrid Bloom Pack)",
        description: `
          <p>Cruce entre florales y frutales para un punch de alegría:</p>
          <ul>
            <li><strong>Fantasy</strong> (Britney Spears)</li>
            <li><strong>Curious</strong> (Britney Spears)</li>
            <li><strong>Amour</strong> (Aurora Scents)</li>
            <li><strong>Burberry Her Elixir</strong></li>
          </ul>`
      }
    };
  
    const modalTitle = document.getElementById("packModalTitle");
    const modalBody = document.getElementById("packModalBody");
  
    document.querySelectorAll(".pack-card").forEach(card => {
      card.addEventListener("click", () => {
        const key = card.dataset.pack;
        const info = packsInfo[key];
        if (info) {
          modalTitle.innerHTML = info.title;
          modalBody.innerHTML = info.description;
          new bootstrap.Modal(document.getElementById("modalPack")).show();
        }
      });
    });

    const perfumesIndividuales = {
        "myway": {
          titulo: "My Way – Armani",
          descripcion: "Notas: jazmín, vainilla, bergamota. Ideal para uso diario elegante."
        },
        "lavie": {
          titulo: "La Vie Est Belle – Lancôme",
          descripcion: "Notas: pera, iris, praliné. Dulce y empoderado."
        },
        "lightblue": {
          titulo: "Light Blue – D&G",
          descripcion: "Notas: limón, manzana, cedro. Cítrico y juvenil."
        },
        "fantasy": {
          titulo: "Fantasy – Britney Spears",
          descripcion: "Notas: kiwi, chocolate blanco, almizcle. Divertido y coqueto."
        },
        "burberry": {
          titulo: "Burberry Her Elixir",
          descripcion: "Notas: fresa, ámbar, vainilla. Sexy e intenso."
        },
        "angel": {
          titulo: "Angel Elixir – Mugler",
          descripcion: "Notas: pimienta rosa, flor de azahar. Misterioso y potente."
        },
        "libre": {
            titulo: "Libre Intense – YSL",
            descripcion: "Notas: lavanda, vainilla, ámbar. Fuerte y sofisticado."
          },
          "idole": {
            titulo: "Idôle – Lancôme",
            descripcion: "Notas: rosa, jazmín, almizcle blanco. Floral limpio y moderno."
          },
          "goodgirl": {
            titulo: "Good Girl – Carolina Herrera",
            descripcion: "Notas: almendra, café, haba tonka. Sexy y misterioso."
          },
          "si": {
            titulo: "Si – Armani",
            descripcion: "Notas: cassis, rosa, vainilla. Elegancia sin esfuerzo."
          },
          "olympea": {
            titulo: "Olympéa – Paco Rabanne",
            descripcion: "Notas: sal, vainilla, jazmín. Dulce, cálido y atrevido."
          },
          "alien": {
            titulo: "Alien – Mugler",
            descripcion: "Notas: jazmín, madera de cachemira. Místico y adictivo."
          },
          "verygoodgirl": {
            titulo: "Very Good Girl – Carolina Herrera",
            descripcion: "Notas: lichi, rosa, vainilla. Frutal y sexy."
          },
          "daisy": {
            titulo: "Daisy – Marc Jacobs",
            descripcion: "Notas: violeta, fresa, gardenia. Joven, alegre, floral."
          },
          "missdior": {
            titulo: "Miss Dior",
            descripcion: "Notas: rosa de Grasse, peonía, almizcle. Romántico y vibrante."
          },
          "monparis": {
            titulo: "Mon Paris – YSL",
            descripcion: "Notas: fresa, pachuli, flor blanca. Chispeante y atrevido."
          },
          "bloom": {
            titulo: "Gucci Bloom",
            descripcion: "Notas: jazmín, nardo, raíz de lirio. Floral blanco opulento."
          },
          "linterdit": {
            titulo: "L’Interdit – Givenchy",
            descripcion: "Notas: azahar, vetiver, pachuli. Contrastes entre claro y oscuro."
          },
          "brightcrystal": {
            titulo: "Bright Crystal – Versace",
            descripcion: "Notas: granada, peonía, yuzu. Alegre y brillante."
          },
          "paradoxe": {
            titulo: "Prada Paradoxe",
            descripcion: "Notas: neroli, ámbar, almizcles. Moderno y femenino."
          },
          "valentino": {
            titulo: "Donna Born In Roma – Valentino",
            descripcion: "Notas: vainilla bourbon, jazmín, grosella negra. Chic y rebelde."
          }
        };
      
      document.querySelectorAll(".card-decant[data-perfume]").forEach(card => {
        card.addEventListener("click", () => {
          const key = card.dataset.perfume;
          const info = perfumesIndividuales[key];
          if (info) {
            document.getElementById("modalPerfumeTitle").innerText = info.titulo;
            document.getElementById("modalPerfumeBody").innerText = info.descripcion;
            new bootstrap.Modal(document.getElementById("modalPerfume")).show();
          }
        });
      });

      // MODALES para nuevos ingresos
document.querySelectorAll(".card-perfume").forEach(card => {
  card.addEventListener("click", () => {
    const nombre = card.querySelector(".nombre").innerText;
    const descripcion = card.querySelector(".desc").innerText;

    document.getElementById("modalPerfumeTitle").innerText = nombre;
    document.getElementById("modalPerfumeBody").innerText = descripcion;

    new bootstrap.Modal(document.getElementById("modalPerfume")).show();
  });
});


      const navbarPerfumes = document.getElementById("navbarPerfumes");
if (navbarPerfumes) {
  navbarPerfumes.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown-menu")) {
      window.location.href = "/perfumes.html";
    }
  });
}

  
  });
  
  const track = document.getElementById("trackTestimonios");
const prev = document.getElementById("prevTestimonio");
const next = document.getElementById("nextTestimonio");

if (track && prev && next) {
  next.addEventListener("click", () => {
    track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -track.clientWidth, behavior: "smooth" });
  });
}

document.querySelectorAll('img.no-interaction').forEach(img => {
  img.addEventListener('contextmenu', e => e.preventDefault());
});