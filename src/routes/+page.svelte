<script>
  import GlobalData from "../components/GlobalData/GlobalData.svelte";
  import Header from "../components/Header/Header.svelte";
  import Home from "../components/Home/Home.svelte";
  import shader from "../components/ShaderToy/T.shader";
  import ShaderToy from "../components/ShaderToy/ShaderToy.svelte";
</script>

<div class="shader">
  <ShaderToy {shader} iChannel0={
    "./Texto Latino Negativo.jpg"
  } />
</div>
<Header />
<GlobalData />
<Home />

<style lang="scss">
  @import "./styles/reset.scss";
  @import "./styles/global.scss";

  .shader {
    filter: contrast(55%) brightness(4.25);
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>