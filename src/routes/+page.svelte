<script>
  import Carousel from "../components/Carousel/Carousel.svelte";
  import Footer from "../components/Footer/Footer.svelte";
  import GlobalData from "../components/GlobalData/GlobalData.svelte";
  import Header from "../components/Header/Header.svelte";
  import Headline from "../components/Headline/Headline.svelte";
  import Home from "../components/Home/Home.svelte";
  import NewProducts from "../components/NewProducts/NewProducts.svelte";
  import Redirection from "../components/Redirection/Redirection.svelte";
  import ChosenShader from "../components/ShaderToy/ChosenShader/ChosenShader.svelte";
</script>

<GlobalData />
<ChosenShader />
<Header />
<Home />
<Headline />
<Redirection />
<NewProducts />
<Carousel videos={[
  "./videos/Beneficios de los aminoacidos.mp4",
  "./videos/COMO PREPARAR CREATINA.mp4",
  "./videos/ENTRENO 2.mp4",
  "./videos/GYM PRO FINAL.mp4",
  "./videos/Video patrocinado 2.mp4",
  "./videos/vitaminico.mp4",
]}/>
<Footer />

<style lang="scss">
  @import "./styles/reset.scss";
  @import "./styles/global.scss";
</style>
