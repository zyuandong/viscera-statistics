<template>
  <div id="lungs">
    <router-link to="/menu">返回</router-link>
    <div class="clearfix">
      <div class="pull-left width-4 p-10 block-d">
        <div class="clearfix">
          <div class="title-box">肺部数据</div>
        </div>
        <div class="main-box">
          <ChartPin></ChartPin>
        </div>

        <div class="sub-title">
          <span class="main-text">全国肺癌数据</span><span class="sub-text">分析</span>
          <span class="sub-title-line w-8"></span>
        </div>
      </div>
      <div class="pull-left width-6 p-10 block-c">
        <div class="sub-title">
          <span class="main-text">全国肺癌病发、死亡率</span><span class="sub-text">占比</span>
          <span class="sub-title-line w-12"></span>
        </div>

        <div class="sub-title">
          <span class="main-text">全国肺癌发病因素</span><span class="sub-text">占比</span>
          <span class="sub-title-line w-10"></span>
        </div>
      </div>
    </div>
  </div>
</template>
