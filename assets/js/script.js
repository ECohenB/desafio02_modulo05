const Module = (() => {
    const setVideo = (url, id) => {
      const iframe = document.getElementById(id);
      if (iframe) {
        iframe.setAttribute("src", url);
      } else {
        console.error(`Elemento con id "${id}" no encontrado.`);
      }
    };
  
    return {
      setVideoUrl: (url, id) => {
        setVideo(url, id);
      },
    };
  })();
  
  class Multimedia {
    #url;
  
    constructor(url) {
      this.#url = url;
    }
  
    get url() {
      return this.#url;
    }
  
    setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
    }
  }
  
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this.id = id;
    }
  
    playMultimedia() {
      Module.setVideoUrl(this.url, this.id);
    }
  
    setInicio(tiempo) {
      const iframe = document.getElementById(this.id);
      if (iframe) {
        iframe.setAttribute("src", `${this.url}?start=${tiempo}`);
      } else {
        console.error(`Elemento con id "${this.id}" no encontrado.`);
      }
    }
  }
  
  // Instancias
  const musicPlayer = new Reproductor(
    "https://www.youtube.com/embed/M4d20Tyzlv0&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&index=3", // URL de música
    "musica"
  );
  const moviePlayer = new Reproductor(
    "https://www.youtube.com/embed/5PSNL1qE6VY", // URL de la película Avatar
    "peliculas"
  );
  const seriesPlayer = new Reproductor(
    "https://www.youtube.com/embed/odM92ap8_c0", // URL de series
    "series"
  );
  
  //  Métodos
  musicPlayer.playMultimedia();
  moviePlayer.playMultimedia();
  seriesPlayer.playMultimedia();
  
  // Modificar el tiempo de inicio del video de música
  musicPlayer.setInicio(30);
  