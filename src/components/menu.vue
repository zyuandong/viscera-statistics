<template>
  <div id="menu">
    <div id="position">
      <img class="logo" src="../assets/images/logo.png" alt="">
      <router-link class="link1" to="/heart">心</router-link>
      <router-link class="link2" to="/liver">肝</router-link>
      <router-link class="link3" to="/spleen">脾</router-link>
      <router-link class="link4" to="/lungs">肺</router-link>
      <router-link class="link5" to="/kidney">肾</router-link>

      <img class="image1" src="../assets/images/menu/image1.png" alt="">
      <img class="image2" src="../assets/images/menu/image2.png" alt="">
      <img class="image3" src="../assets/images/menu/image3.png" alt="">
      <img class="image4" src="../assets/images/menu/image4.png" alt="">
      <img class="image5" src="../assets/images/menu/image5.png" alt="">
      <img class="image6" src="../assets/images/menu/image6.png" alt="">
      <img class="image7" src="../assets/images/menu/image7.png" alt="">


      <img class="shadow1" src="../assets/images/menu/shadow1.png" alt="">
      <img class="shadow2" src="../assets/images/menu/shadow2.png" alt="">


    </div>
  </div>
</template>





<style lang="scss">
  #menu {
    .logo {
      width: 300px;
      position: fixed;
      top: 50px;
      left: 50px;
    }

    #position {
      width: 1440px;
      height: 900px;
      margin: 0 auto;

      //background-color: #000;
      position: relative;
    }

    img {
      width: 15%;
    }

    .image1 {
      position: absolute;
      top: 155px;
      left: 1100px;
    }

    .image2 {
      position: absolute;
      top: 230px;
      left: 1000px;
    }
    .image3 {
      position: absolute;
      top: 290px;
      left: 875px;
    }
    .image4 {
      position: absolute;
      top: 345px;
      left: 410px;
    }
    .image5 {
      position: absolute;
      top: 470px;
      left: 685px;
    }
    .image6 {
      width: 10%;
      position: absolute;
      top: 500px;
      left: 390px;
    }
    .image7 {
      position: absolute;
      top: 665px;
      left: 225px;
    }

    .shadow1 {
      width: 1440px;
      position: absolute;
      top: 180px;
      left: -11px;
    }

    .shadow2 {
      width: 1440px;
      position: absolute;
      top: 175px;
      left: 342px;
    }
  }
</style>
