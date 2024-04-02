import React from "react";

function Footer() {
  return (
    <React.Fragment>
<footer class="footer-container">
    <div class="infoMia">
      <header class="header-footer">
      <h3>Contacto</h3>
      <div class="svg-container">
        <a href="https://marlonralda.dev" target="_blank">
          <svg viewBox="0 -960 960 960">
            <path fill="currentColor"
              d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
          </svg></a>
        <a href="https://x.com/northBull7" target="_blank">
          <svg role="img" aria-label="Logotipo de X">
            <path fill="currentColor"
              d="M 27.535156 0 L 32.898438 0 L 21.117188 13.578125 L 34.882812 32 L 24.078125 32 L 15.621094 20.804688 L 5.9375 32 L 0.570312 32 L 13.054688 17.476562 L -0.128906 0 L 10.941406 0 L 18.585938 10.226562 Z M 25.65625 28.8125 L 28.628906 28.8125 L 9.378906 3.070312 L 6.183594 3.070312 Z M 25.65625 28.8125 ">
            </path>
          </svg>
        </a>
        <a href="https://github.com/joyboy008" target="_blank" rel="noopener noreferrer"><svg  viewBox="0 0 100 100"
            role="img" aria-label="Logotipo de Github">
            <path fill="currentColor"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z">
            </path>
          </svg></a>
      </div>
    </header>
      <main class="main-footer">
      <article class="contribute">
        <details>
          <summary>
            <div>
              <p>Contribuye</p>
            </div>
          </summary>
          <p class="text">¡Contribuye al proyecto en <a href="https://github.com/joyboy008/dragonball" target="_blank"
              rel="noopener noreferrer"> GitHub</a>, o bien <a href="mailto:m.r.08@outlook.com" target="_blank"
              rel="noopener noreferrer"> Donando! 😉</a> </p>
        </details>
      </article>
      <article class="thanks">
        <details>
          <summary>
            <div>
              <p>Agradecimientos</p>
            </div>
          </summary>
          <p class="text">Agradecimiento especial a Akira Toriyama (1955-2024) por crear la increíble saga de Dragon Ball.</p>
        </details>
      </article>
    </main>
      <article class="createdby">
        <a target="_blank" href="https://wa.me/50250314174" rel="noopener noreferrer">Ing. Marlon Ralda 2024</a>
      </article>
    </div>
  </footer>
    </React.Fragment>
  );
}

export default Footer;
