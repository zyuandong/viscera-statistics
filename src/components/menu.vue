<template>
  <div id="menu">
    <div id="position">
      <router-link to="/">
        <img class="logo" src="../assets/images/logo.png" alt="">
      </router-link>

      <img class="shadow1" src="../assets/images/menu/shadow1.png" alt="">
      <img class="shadow2" src="../assets/images/menu/shadow2.png" alt="">

      <img class="line1" src="../assets/images/menu/line1.png" alt="">
      <img class="line2" src="../assets/images/menu/line2.png" alt="">
      <img class="line3" src="../assets/images/menu/line3.png" alt="">
      <img class="line4" src="../assets/images/menu/line4.png" alt="">
      <img class="line5" src="../assets/images/menu/line5.png" alt="">
      <img class="line6" src="../assets/images/menu/line6.png" alt="">

      <img class="image1" src="../assets/images/menu/image1.png" alt="">
      <img class="image2" src="../assets/images/menu/image2.png" alt="">
      <img class="image3" src="../assets/images/menu/image3.png" alt="">
      <img class="image4" src="../assets/images/menu/image4.png" alt="">
      <img class="image5" src="../assets/images/menu/image5.png" alt="">
      <img class="image6" src="../assets/images/menu/image6.png" alt="">
      <img class="image7" src="../assets/images/menu/image7.png" alt="">

      <img class="word1" src="../assets/images/menu/word1.png" alt="">
      <img class="word2" src="../assets/images/menu/word2.png" alt="">
      <img class="word3" src="../assets/images/menu/word3.png" alt="">
      <img class="word4" src="../assets/images/menu/word4.png" alt="">
      <img class="word5" src="../assets/images/menu/word5.png" alt="">

      <router-link class="link1" to="/heart"></router-link>
      <router-link class="link2" to="/liver"></router-link>
      <router-link class="link3" to="/spleen"></router-link>
      <router-link class="link4" to="/lungs"></router-link>
      <router-link class="link5" to="/kidney"></router-link>

    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      if (this.$route.meta.isRedirect) {
        setTimeout(() => {
          this.$router.push('/heart')
        }, 5000)
      }
    }
  }
</script>

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
      overflow: hidden;
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
      top: 435px;
      left: 745px;
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


    .line1 {
      width: 120px;
      position: absolute;
      top: 240px;
      left: 1120px;
    }
    .line2 {
      width: 80px;
      position: absolute;
      top: 305px;
      left: 1030px;
    }
    .line3 {
      width: 435px;
      position: absolute;
      top: 364px;
      left: 575px;
    }
    .line4 {
      position: absolute;
      top: 480px;
      left: 370px;
      width: 390px;
    }
    .line5 {
      position: absolute;
      top: 665px;
      left: 375px;
      width: 80px;
    }
    .line6 {
      position: absolute;
      top: 775px;
      left: 175px;
      width: 100px;
    }

    .word1 {
      width: 160px;
      position: absolute;
      top: 360px;
      left: 1028px;
    }
    .word2 {
      width: 100px;
      position: absolute;
      top: 235px;
      left: 357px;
    }
    .word3 {
      width: 120px;
      position: absolute;
      top: 240px;
      left: 820px;
    }
    .word4 {
      width: 80px;
      position: absolute;
      top: 420px;
      left: 312px;
    }
    .word5 {
      position: absolute;
      top: 690px;
      left: 530px;
    }

    .link1 {
      display: block;
      width: 100px;
      height: 100px;
      cursor: pointer;
      //border: 1px solid #fff;
      position: absolute;
      top: 310px;
      left: 930px;
    }
    .link2 {
      display: block;
      width: 100px;
      height: 100px;
      cursor: pointer;
      //border: 1px solid #fff;
      position: absolute;
      top: 375px;
      left: 465px;
    }
    .link3 {
      display: block;
      width: 80px;
      height: 100px;
      cursor: pointer;
      //border: 1px solid #fff;
      position: absolute;
      top: 610px;
      left: 455px;
    }
    .link4 {
      display: block;
      width: 100px;
      height: 100px;
      cursor: pointer;
      //border: 1px solid #fff;
      position: absolute;
      top: 515px;
      left: 810px;
    }
    .link5 {
      display: block;
      width: 80px;
      height: 100px;
      cursor: pointer;
      //border: 1px solid #fff;
      position: absolute;
      top: 565px;
      left: 390px;
    }
  }
</style>
