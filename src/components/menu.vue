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


      <img class="image7" src="../assets/images/menu/shadow1.png" alt="">
      <img class="image7" src="../assets/images/menu/shadow2.png" alt="">


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

      background-color: #eee;
      position: relative;
    }

    img {
      width: 15%;
    }

    .image1 {
      position: relative;
      left: 75%;
      top: 5%;
    }

    .image2 {
      position: relative;
      left: 65%;
      top: 30%;
    }
    .image3 {
      position: relative;
      left: 50%;
      top: 40%;
    }
    .image4 {
      position: relative;
      left: 20%;
      top: 35%;
    }
    .image5 {
      position: relative;
      left: 45%;
      top: 60%;
    }
    .image6 {
      position: relative;
      left: 30%;
      top: 80%;
    }
    .image7 {
      position: relative;
      left: 20%;
      top: 90%;
    }
  }
</style>