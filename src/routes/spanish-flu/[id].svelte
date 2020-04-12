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

<div class="grid-container ">
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
    <a href="#">
      <img src="images/mute.svg" alt=" " />
    </a>

  </div>

  <div class="map big">
    <a href="#">
      <img src="images/map.svg" alt=" " />
    </a>
  </div>
  <div class="about big">
    <a href="#">
      <img class="about" src="images/logo.svg" alt=" " />
    </a>
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
    {#if room.image}
      <div class="image1">
        <a href="#">
          <img
            class="image1_img"
            src="/images/objects/{room.image}.jpg"
            alt="" />
        </a>
      </div>
    {/if}
    {#if room.image_alternative}
      <div class="image2">
        <a href="#">
          <img src="/images/objects/{room.image_alternative}.jpg" alt="" />
        </a>
      </div>
    {/if}
    <!-- Text-->
    {#if room.description}
      <div class="text">
        <p>{room.description}</p>
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
  </div>
</div>
