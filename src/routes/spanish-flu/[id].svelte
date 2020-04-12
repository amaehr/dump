<script context="module">
  export async function preload({ params, query }) {
    // the `id` parameter is available because
    // this file is called [id].svelte
    const res = await this.fetch(`spanish-flu/${params.id}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return {
        room: data
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let room;
  import Modal from "./../../components/Modal.svelte";
  import ModalText from "./../../components/ModalText.svelte";
  let showAbout = false;
  let showImage1 = false;
  let showImage2 = false;
  let showImageLandscape = false;
  let showMap = false;
</script>

<style>
  /* fonts */

  /* Define the font size so that it is responsive and would not become
too small or big for respectively narrow or wide screens */

  html {
    font-size: 16px;
  }

  @media screen and (min-width: 320px) {
    html {
      font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }
  }

  @media screen and (min-width: 1000px) {
    html {
      font-size: 22px;
    }
  }

  /* define font type */

  body {
    font-family: "Open Sans", sans-serif;
  }

  /* define font size and colour for header*/

  h3 {
    font-size: 1.6rem;
    color: #000050;
    text-transform: uppercase;
    display: inline-block;
    vertical-align: middle;
  }

  p {
    font-weight: 300;
    color: #001400;
    line-height: 1.8rem;
    margin-top: 0%;
  }

  .small {
    color: #001400;
    font-size: 0.7rem;
    vertical-align: middle;
    line-height: 0.8rem;
    text-indent: 4%;
  }

  .rights {
    color: #001400;
    font-size: 0.8rem;
    vertical-align: middle;
    line-height: 1.2rem;
    text-indent: 4%;
  }

  h4 {
    font-size: 1.3rem;
    color: #000050;
  }

  .rights_font {
    font-family: "Playfair Display", serif;
    font-size: 0.8rem;
    font-style: italic;
    color: #000050;
    padding-top: 4%;
    text-indent: 4%;
  }

  /* grid container*/

  .grid-container {
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: #fff8ff;
  }

  .background {
    display: grid;
    width: 100%;
    background-image: url(/images/bg_4.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 10% 1fr 1fr 1fr 10%;
    grid-template-rows: 1fr 75% 1fr;
    gap: 1px 1px;
    grid-template-areas: ". . up . ." "left content_text content_text content_text right" "mute map down . about";
  }

  .up {
    grid-area: up;
    width: 15%;
    height: 100%;
    z-index: 2;
    justify-self: center;
    align-self: start;
  }

  .up_img {
    position: relative;
    width: 100%;
  }

  .up_background {
    grid-area: up;
    width: 100%;
    background-image: url(/images/navi_up.svg);
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: top center;
  }

  .down {
    grid-area: down;
  }

  .down {
    grid-area: down;
    width: 15%;
    height: 100%;
    z-index: 2;
    justify-self: center;
  }

  .down_img {
    position: relative;
    width: 100%;
    top: 35%;
  }

  .down_background {
    grid-area: down;
    width: 100%;
    background-image: url(/images/navi_down.svg);
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: bottom center;
  }

  .left {
    grid-area: left;
    width: 100%;
    place-self: center;
    z-index: 2;
  }

  .left_img {
    display: block;
    margin-left: 0;
    position: relative;
    width: 40%;
  }

  .left_background {
    grid-area: left;
    width: 100%;
    background-image: url(/images/navi_left.svg);
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: left center;
  }

  .right {
    grid-area: right;
    width: 100%;
    align-self: center;
    z-index: 2;
  }

  .right_img {
    position: relative;
    display: block;
    margin-right: 0;
    width: 40%;
    left: 60%;
  }

  .right_background {
    grid-area: right;
    width: 100%;
    background-image: url(/images/navi_right.svg);
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: right center;
  }

  .mute {
    grid-area: mute;
    position: relative;
    justify-self: end;
    align-self: center;
    width: 70%;
    left: 15%;
  }

  .mute img {
    width: 80%;
  }

  .map {
    grid-area: map;
    position: relative;
    justify-self: start;
    align-self: center;
    width: 26%;
  }

  .map img {
    width: 80%;
  }

  .about {
    grid-area: about;
    position: relative;
    place-self: center;
    width: 85%;
    padding-left: 7%;
  }

  .content_text {
    display: grid;
    grid-template-columns: 0.5fr 1.7fr 0.8fr;
    grid-template-rows: 0.5fr 1.5fr;
    gap: 1px 1px;
    padding-top: 2%;
    grid-template-areas: "icon titel image1" ". text rights";
    grid-area: content_text;
    border: 0.5px solid #001400;
    background-color: rgba(255, 248, 255, 0.9);
  }

  .icon {
    grid-area: icon;
    width: 40%;
    place-self: center;
    z-index: 2;
  }

  .icon img {
    position: relative;
    width: 100%;
  }

  .icon_background {
    grid-area: icon;
    width: 100%;
    background-image: url(/images/icon_background.svg);
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .titel {
    grid-area: titel;
    width: 100%;
    height: 80%;
  }

  .image1 {
    grid-area: image1;
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 100%;
    place-self: end;
    margin-right: 5%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .image1 img {
    flex: 1;
    min-width: 100%;
  }

  .image1:hover {
    opacity: 0.7;
  }

  .image2 {
    grid-area: rights;
    display: flex;
    width: 80%;
    height: 45%;
    place-self: start;
    margin-top: 5%;
    margin-left: 15%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .image2 img {
    flex-shrink: 0;
    min-width: 100%;
  }

  .image2:hover {
    opacity: 0.7;
  }

  .text {
    grid-area: text;
    width: 100%;
  }

  .rights {
    grid-area: rights;
    border: 0.5px solid #ff00ff;
    width: 80%;
    height: 40%;
    place-self: end;
    margin-right: 5%;
    margin-bottom: 5%;
    background-color: #fff8ff;
    border-style: dotted;
  }

  /*hover for navigation*/

  .big img {
    transition: 0.7s ease;
  }

  .big img:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 0.7s ease;
  }
</style>

<svelte:head>
  <title>{room.title}</title>
</svelte:head>

{#if showAbout}
  <ModalText on:close={() => (showAbout = false)}>
    <h4>About</h4>
    <small>
      Das open-museum ist ein unabhängiges digitales Museum und ist im Rahmen
      des #VersusVirus-Hackathon innerhalb von 48 Stunden entstanden. Es ist uns
      ein Anliegen, dass trotz der Einschränkungen im Rahmen der
      Covid-19-Pandemie Kunst und Kultur gemeinsam entdeckt werden können. Die
      Audiochat-Funktion ermöglicht die Kommunikation mit anderen Besucher*innen
      - fast wie in einem “echten” Museum.
    </small>
    <br />

    <small>
      Unser Museum baut vollständig auf gemeinfreien Inhalten auf.
      <a href="https://collections.open-museum.ch/" target="_blank">Hier</a>
      kannst du in unserer Sammlung stöbern. Kennst du weitere gemeinfreie
      Inhalte (Fotos, Dokumente, Zeugnisse, Videos etc.), die unsere Ausstellung
      zur Spanischen Grippe ergänzen könnten? Schreib uns eine E-Mail.
    </small>
    <br />

    <small>
      Der
      <a href="https://github.com/open-museum/open-museum.ch" target="_blank">
        Quellcode
      </a>
      von open-museum ist offen und kann heruntergeladen werden. Angaben zur
      Lizenz und zu den verwendeten Bibliotheken finden sich ebenfalls unter
      dieser Adresse.
    </small>
    <br />

    <small>
      Der Inhalt darf, sofern nicht anders angegeben, unter den Bedingungen von
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank">
        CC-BY-SA-NC 4.0
      </a>
      weiterverwendet werden.
    </small>
    <br />

    <small>Konzept: Moritz Mähr, Maja Škrkić, Selina Stuber</small>
    <br />
    <small>Kuration und Redaktion: Maja Škrkić, Selina Stuber</small>
    <br />
    <small>
      Recherche und Texte: Manuela Coldesina, Henrike Hoffmann, Michael Kempf
    </small>
    <br />
    <small>Gestaltung: Aline Mähr, Johanna Ott</small>
    <br />
    <small>Programmierung: Aline Mähr, Moritz Mähr</small>
    <br />

    <h4>Kontakt</h4>

    <small>info@open-museum.ch</small>
    <br />
    <small>open-museum.ch</small>
    <br />

    <h4>Impressum / Urheberrechte</h4>

    <small>IG open-museum.ch</small>
    <br />
    <small>c/o Maja Škrkić</small>
    <br />
    <small>Stauffacherstrasse 98</small>
    <br />
    <small>CH-8004 Zürich</small>
  </ModalText>
{/if}

{#if showImage1}
  <Modal on:close={() => (showImage1 = false)}>
    <img class="image1_img" src="/images/objects/{room.image1}.jpg" alt="" />
  </Modal>
{/if}

{#if showImage2}
  <Modal on:close={() => (showImage2 = false)}>
    <img class="image1_img" src="/images/objects/{room.image2}.jpg" alt="" />
  </Modal>
{/if}

{#if showImageLandscape}
  <Modal on:close={() => (showImageLandscape = false)}>
    <img
      class="image1_img"
      src="/images/objects/{room.image_landscape}.jpg"
      alt="" />
  </Modal>
{/if}

{#if showMap}
  <Modal on:close={() => (showMap = false)}>
    <img class="image1_img" src="/images/floormap.png" alt="" />
  </Modal>
{/if}

<div class="grid-container">
  {#if room.up}
    <div class="up big">
      <a href="/spanish-flu/{room.up}">
        <img class="up_img" src="/images/icons/{room.up}.svg" alt="" />
      </a>
    </div>
    <div class="up_background" />
  {/if}
  {#if room.down}
    <div class="down big">
      <a href="/spanish-flu/{room.down}">
        <img class="down_img" src="/images/icons/{room.down}.svg" alt="" />
      </a>
    </div>
    <div class="down_background" />
  {/if}
  {#if room.left}
    <div class="left big">
      <a href="/spanish-flu/{room.left}">
        <img class="left_img" src="/images/icons/{room.left}.svg" alt="" />
      </a>
    </div>
    <div class="left_background" />
  {/if}
  {#if room.right}
    <div class="right big">
      <a href="/spanish-flu/{room.right}">
        <img class="right_img" src="/images/icons/{room.right}.svg" alt="" />
      </a>
    </div>
    <div class="right_background" />
  {/if}
  <div class="mute big">
    <img src="images/mute.svg" alt=" " />
  </div>
  <div class="map big">
    <img src="images/map.svg" alt=" " on:click={() => (showMap = true)} />
  </div>
  <div class="about big">
    <img
      class="about"
      src="images/logo.svg"
      alt=""
      on:click={() => (showAbout = true)} />
  </div>
  <div class="content_text">
    <!-- Icon-->
    {#if room.icon}
      <div class="icon">
        <img src="images/icons/{room.icon}.svg" alt="" />
      </div>
    {/if}
    <div class="icon_background" />
    <!-- Titel-->
    {#if room.title}
      <div class="titel">
        <h3>{room.title}</h3>
      </div>
    {/if}
    {#if room.image1}
      <div class="image1">

        <img
          class="image1_img"
          src="/images/objects/{room.image1}.jpg"
          alt=""
          on:click={() => (showImage1 = true)} />

      </div>
    {/if}
    {#if room.image2}
      <div class="image2">

        <img
          src="/images/objects/{room.image2}.jpg"
          alt=""
          on:click={() => (showImage2 = true)} />

      </div>
    {/if}
    <!-- Text-->
    {#if room.text}
      <div class="text">
        <p>{room.text}</p>
      </div>
    {/if}
    {#if room.rights && room.rightsowner}
      <div class="rights">
        <div class="rights_font">Rechteinhaber:</div>
        <div class="small">{room.rightsowner}</div>
        <div class="rights_font">Rechte:</div>
        <div class="small">{room.rights}</div>
      </div>
    {/if}
    {#if room.landscape}
      <div class="image_landscape">

        <img
          src="/images/objects/{room.landscape}.jpg"
          alt=""
          on:click={() => (showImageLandscape = true)} />

      </div>
    {/if}
    {#if room.caption}
      <div class="caption">{room.caption}</div>
    {/if}
  </div>
</div>
