<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <h1 style="font-weight: 300">PassionaGio</h1>
      </div>
      <div class="row">
        <p style="font-size: 12px; margin-top: -8px">Parcours des articles</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <h3 style="font-weight: 400">Disponible</h3>
        <v-icon style="color: green; margin-left: 8px">fa-check</v-icon>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-lg-2 col-md-3">
          <vs-card>
            <div slot="header">
              <h4>
                Hello world !
              </h4>
            </div>
            <div slot="media">
              <img height="100%" width="100%" src="https://cdn.icon-icons.com/image-packs/windowsicon_iconset_43.png">
            </div>
            <div>
              <h4>Test</h4>
              <div class="row" style="margin-right: 1px; margin-left: 1px; justify-content: space-between">
                <p style="color: #9b9c9b; font-weight: 700">9.99€/kilo</p>
                <p>En stock: 8</p>
              </div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</span>
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button style="margin-right: 5px" type="gradient" color="danger">Voir</vs-button>
                <vs-button color="primary">Ajouter</vs-button>
              </vs-row>
            </div>
          </vs-card>
        </div>

        <div class="col-sm-4 col-lg-2 col-md-3">
          <vs-card>
            <div slot="header">
              <h4>
                Hello world !
              </h4>
            </div>
            <div slot="media">
              <img height="100%" width="100%" src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj0ic2k6I3nAhXqAWMBHb8XBzoQjRx6BAgBEAQ&url=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F431960%2FWallpaper_Engine%2F%3Fl%3Dfrench&psig=AOvVaw1J5Kmu0IDhIoOWMVcUl1-o&ust=1579459758371315">
            </div>
            <div>
              <h4>Test</h4>
              <div class="row" style="margin-right: 1px; margin-left: 1px; justify-content: space-between">
                <p style="color: #9b9c9b; font-weight: 700">9.99€/kilo</p>
                <p>En stock: 8</p>
              </div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</span>
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button style="margin-right: 5px" type="gradient" color="danger">Voir</vs-button>
                <vs-button color="primary">Ajouter</vs-button>
              </vs-row>
            </div>
          </vs-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style>
  .main {
    margin-right: 10px;
    margin-left: 10px;
  }
</style>