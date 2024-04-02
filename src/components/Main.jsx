import React from "react";
import bulma from "../images/optimizadas/bulma-db.png"
import bulma1 from "../images/optimizadas/bulma-db-enfadada.png"
import goku from "../images/optimizadas/goku-db.png"
import goku1 from "../images/optimizadas/goku-db-young.png"



function Main(){
    return(
        <React.Fragment>
  <main className="main-container" id="refdb">
    <section className="informativo">
      <header className="title">
        <h2>Dragon Ball</h2>
      </header>
      <article className="description">
        <p>
          "En Dragon Ball, la inocencia de Goku y su desconocimiento sobre sus orígenes Saiyajin tejen una narrativa
          fascinante, marcada por encuentros con adversarios que luego se convierten en aliados inquebrantables. La
          transformación de enemigos como Piccolo de figuras amenazantes a compañeros leales destaca la temática
          recurrente del cambio y la redención. Además, la revelación de que Goku no es de este mundo añade una capa de
          misterio y anticipación sobre lo que está por venir, preparando el escenario para revelaciones que cambiarán
          para siempre el destino de la Tierra."
        </p>
      </article>
      <footer><a href="#">saber más...</a></footer>
    </section>
    <p className="ayuda">Desliza o presiona sobre las imágenes para obtener más información.</p>
    <section className="img-container">
      
      <article className="image">
        <p className="nombre">
          <span className="text">Bulma</span>
        </p>
        <img className="img1" src={bulma} alt="bulma" />
        <img className="img2" src={bulma1} alt="bulma1" />

        <span className="description">Genia inventora, amiga cercana de Goku, esposa de Vegeta.</span>
      </article>
      <article className="image">
        <p className="nombre">
          <span className="text">Goku</span>
        </p>
        <img className="img1" src={goku} alt="Goku" />
        <img className="img2" src={goku1} alt="Goku" />

        <span className="description">El héroe legendario en constante búsqueda de superación y justicia.</span>
      </article>
      <article className="image">
        <p className="nombre">
          <span className="text">Jacky Chun</span>
        </p>
        <img className="img1" src="src/images/optimizadas/jacky-chun.png" alt="Maestro Roshy" />
        <img className="img2" src="src/images/optimizadas/Jackie-Chun1.png" alt="Maestro Roshy" />

        <span className="description">"Un maestro de las artes marciales con una identidad secreta en el 21° Torneo
          Mundial."</span>
      </article>
      <article className="image">
        <p className="nombre">
          <span className="text">Lunch</span>
        </p>
        <img className="img1" src="src/images/optimizadas/lunch.png" alt="lunch" />
        <img className="img2" src="src/images/optimizadas/Lunch-Bad.png" alt="lunch" />
        <span className="description">Cambia de personalidad al estornudar, amiga de Goku y los
          demás.</span>
      </article>
    </section>
    <br id="refdbz"/>
    <section className="informativo">
      <header className="title">
        <h2>Dragon Ball Z</h2>
      </header>
      <article className="description">
        <p>
          "Introduce a los Saiyajin, revelando el verdadero origen de Goku y lanzando a nuestros héroes en batallas que
          desafían los límites del espacio y el tiempo. La transformación de Goku en Super Saiyajin frente a Freezer no
          solo es un momento icónico por su impresionante despliegue de poder, sino también un punto de inflexión
          emocional, marcado por la pérdida de su mejor amigo, Krilin. Este acto de sacrificio y amor desencadena una
          evolución en Goku y en la serie misma, elevando las apuestas y profundizando el lazo entre los personajes."
        </p>
        <br/>
        <p>
          "No solo se trata de la lucha entre el bien y el mal, sino también de la evolución de
          sus personajes principales. Desde la transformación de Gohan de un niño tímido a un guerrero valiente y
          poderoso durante la Saga de Cell, hasta el crecimiento de Vegeta, quien pasa de ser un príncipe arrogante a un
          defensor apasionado de su familia y su hogar, cada arco argumental está marcado por un desarrollo
          significativo y cambios profundos en la psique y el carácter de los personajes. Estas transformaciones no solo
          añaden capas de complejidad a la historia, sino que también nos recuerdan que el verdadero poder no proviene
          solo de la fuerza física, sino también del crecimiento emocional y espiritual."
        </p>
      </article>
      <footer><a href="#">saber más...</a></footer>
    </section>
    <section className="img-container">
      <article className="image">
        <p className="nombre">
          <span className="text">Uub</span>
        </p>
        <img className="img1" src="src/images/optimizadas/buu.png" alt="Gohan" />
        <img className="img2" src="src/images/optimizadas/uub.png" alt="Gohan" />

        <span className="description">Una criatura impredecible con un apetito voraz y un poder inigualable.</span>
      </article>
      <article className="image">
        <p className="nombre">
          <span className="text">Vegeta</span>
        </p>
        <img className="img1" src="src/images/optimizadas/vegeta.png" alt="Vegeta" />
        <img className="img2" src="src/images/optimizadas/vegeta-attack.png" alt="Vegeta" />

        <span className="description">Príncipe de los saiyajin, rival eterno de Goku, evoluciona de
          villano a héroe.</span>
      </article>
      <article className="image">
        <p className="nombre">
          <span className="text">Freezer</span>
        </p>
        <img className="img1" src="src/images/optimizadas/frezzar1.png" alt="lunch" />
        <img className="img2" src="src/images/optimizadas/frezzar.png" alt="lunch" />
        <span className="description">El tirano galáctico con un deseo insaciable de poder y control.</span>
      </article>
      <article className="image">
        <p className="nombre">
          <span className="text">Gohan</span>
        </p>
        <img className="img1" src="src/images/optimizadas/gohan-end.png" alt="Gohan" />
        <img className="img2" src="src/images/optimizadas/gohan-ss2.png" alt="Gohan" />

        <span className="description">Hijo de Goku, cuya fuerza interior y compasión lo convierten en un poderoso guerrero
        </span>
      </article>
    </section>
    <br id="refgt"/>
    <section className="informativo">
      <header className="title">
        <h2>Dragon Ball GT</h2>
      </header>
      <article className="description">
        <p>
          "En Dragon Ball GT, el regreso de Goku a su forma infantil por un deseo mal interpretado agrega una dimensión
          única de humor y nostalgia, mientras mantiene la tensión de los combates clásicos. Sin embargo, es la
          aparición del dragón de cuatro estrellas, convertido en el noble y poderoso guerrero SSJ4 Gogeta, la que roba
          el protagonismo, ofreciendo batallas espectaculares y mostrando el poder inigualable de la fusión. La
          conclusión de GT, que sugiere el fin de la jornada de Goku con el dragón Shenron, ofrece un cierre emotivo,
          lleno de simbolismo, dejando a los fans contemplando el legado de su héroe."
        </p>
      </article>
      <footer><a href="#">saber más...</a></footer>
    </section>
    <section className="img-container">
      <article className="image">
        <p className="nombre">
          <span className="text">Goku Jr</span>
        </p>
        <img className="img1" src="src/images/optimizadas/goku-gt.png" alt="bulma" />
        <img className="img2" src="src/images/optimizadas/goku-ss4.png" alt="bulma" />

        <span className="description">El héroe legendario en constante búsqueda de superación y justicia.</span>
      </article>
      <article className="image">
        <p className="nombre">
          <span className="text">Trunks</span>
        </p>
        <img className="img1" src="src/images/optimizadas/trunks1.png" alt="Gohan" />
        <img className="img2" src="src/images/optimizadas/trunks2.png" alt="Gohan" />

        <span className="description">"El hijo de Vegeta y Bulma, liderando la búsqueda de las Dragon Balls en Dragon Ball
          GT."</span>
      </article>
      <article className="image">
        <p className="nombre">
          <span className="text">Pequeña Pan</span>
        </p>
        <img className="img1" src="src/images/optimizadas/pan-kid.png" alt="Son Gohan" />
        <img className="img2" src="src/images/optimizadas/pan-kid-action.png" alt="Son Gohan" />

        <span className="description"> "La valiente nieta de Goku, lista para aventuras emocionantes en Dragon Ball
          GT."</span>
      </article>
    </section>
    <br id="refsuper"/>
    <section className="informativo">
      <header className="title">
        <h2>Dragon Ball Super</h2>
      </header>
      <article className="description">
        <p>
          "Dragon Ball Super lleva a los personajes a enfrentarse con dioses y a desafiar las leyes del multiverso. La
          introducción de Beerus, el Dios de la Destrucción, y el concepto de los Universos paralelos amplía
          exponencialmente el campo de juego. La batalla contra Jiren en el Torneo de Fuerza no solo es una demostración
          de fuerza bruta, sino también un profundo examen de la determinación y la voluntad de luchar por los seres
          queridos. El sacrificio de Android 17 y la inesperada alianza con Freezer subrayan temas de redención y unidad
          frente a la adversidad."
        </p>
      </article>
      <footer><a href="#">saber más...</a></footer>
    </section>
    <section className="img-container">
      <article className="image">
        <p className="nombre">
          <span className="text">Beerus</span>
        </p>
        <img className="img1" src="src/images/optimizadas/beerus.png" alt="beerus" />
        <img className="img2" src="src/images/optimizadas/beerus-2.png" alt="beerus" />
        <span className="description">El Dios de la Destrucción con un temperamento volátil y un amor por la comida
          exquisita.</span>
      </article>
      <article className="image">
        <p className="nombre">
          <span className="text">Vegeta</span>
        </p>
        <img className="img1" src="src/images/optimizadas/vegeta-super-normal.png" alt="vegeta-super-normal" />
        <img className="img2" src="src/images/optimizadas/vegeta-super.png" alt="vegeta-super" />

        <span className="description">El príncipe Saiyajin con un orgullo inquebrantable y una fuerza imponente.</span>
      </article>
      <article className="image">
        <p className="nombre">
          <span className="text">Goku Black</span>
        </p>
        <img className="img1" src="src/images/optimizadas/goku-super.png" alt="Goku" />
        <img className="img2" src="src/images/optimizadas/goku-black.png" alt="Goku-black" />

        <span className="description">Enemigo con habilidades similares a las de Goku, pero
          con dominio del Ki oscuro.</span>
      </article>
      <article className="image">
        <p className="nombre">
          <span className="text">Freezer</span>
        </p>
        <img className="img1" src="src/images/optimizadas/freezer-gold.png" alt="freezer-gold" />
        <img className="img2" src="src/images/optimizadas/freezer-gold-final.png" alt="freezer-gold-final" />

        <span className="description">El tirano galáctico con un deseo insaciable de poder y control por todo el
          universo.</span>
      </article>
    </section>
    <br id="refdaima"/>
    <section className="informativo">
      <header className="title">
        <h2>Dragon Ball Daima</h2>
      </header>
      <article className="description">
        <p>"Mientras que los detalles específicos de Dragon Ball Daima permanecen envueltos en misterio, los rumores
          sugieren la introducción de un nuevo villano que rivaliza con el poder de los Dioses de la Destrucción y que
          podría ser clave en la revelación de secretos del pasado Saiyajin. La posibilidad de ver a Goku y Vegeta
          superar los límites del Ultra Instinto y el Control del Ki de Dios promete no solo batallas épicas, sino
          también un viaje introspectivo en lo que significa ser un guerrero en un universo donde los límites del poder
          están constantemente siendo redefinidos."</p>
      </article>
      <footer><a href="#">saber más...</a></footer>
    </section>
    <section className="img-container">
      <article className="image">
        <p className="nombre">
          <span className="text">Freezer</span>
        </p>
        <img className="img1" src="src/images/optimizadas/freezer-chibi-normal.png" alt="freezer-chibi-normal" />
        <img className="img2" src="src/images/optimizadas/freezer-chibi.png" alt="freezer-chibi" />
        <span className="description">El tirano galáctico con un deseo insaciable de poder y control por todo el
          universo.</span>
      </article>
    </section>
    <a className="link" href="#refdb">Volver</a>
    </main>
        </React.Fragment>
    );
}
export default Main;