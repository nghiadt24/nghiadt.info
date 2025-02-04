<script>
import './scss/color.scss'
import './scss/components.scss'
</script>

<template>
  <section class="AboutSection container">
    <div class="AboutRow row">
      <h2 class="AboutTitle col-5">You'll like it</h2>
      <div class="AboutDes col-7">
        <h5 class="AboutDesText">
          In the heart of the bustling city, a small café named "The Whimsical Brew" serves the most
          delightful concoctions. Each cup is crafted with love, featuring unique flavors like
          lavender-infused latte and spicy chai mocha. Locals gather here not just for the coffee,
          but for the vibrant atmosphere filled with laughter and creativity.
        </h5>
        <a href="#" class="PrimaryBtn">Discover Project <PhArrowLineUpRight :size="28" /></a>
      </div>
    </div>
    <div class="AboutSocial row">
      <h2 class="AboutTitle col-5">Social</h2>
      <div class="AboutSocialBtn col-7">
        <a href="#" class="TextBtn">Telegram</a>
        <a href="#" class="TextBtn">Linkedin</a>
        <a href="#" class="TextBtn">Behance</a>
        <a href="#" class="TextBtn">Dribbble</a>
      </div>
    </div>
    <div class="h-divider"></div>
    <div class="AboutServices">
      <h2 class="AboutTitle">Services</h2>
      <div class="">

      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import './scss/color.scss';
@import './scss/layout.scss';
@import './scss/components.scss';
.AboutSection {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 48px;
}
.AboutRow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
}
.AboutTitle {
  text-align: left;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  @include color-content-neutral-strong;
}
.AboutDesText {
  text-align: right;
  font-style: normal;
  font-size: 28px;
  font-weight: 300;
  line-height: 52px;
  @include color-content-neutral-medium;
  width: 100%;
}
.AboutDes {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  gap: 24px;
  width: 100%;
}
.AboutSocial {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
}
.AboutSocialBtn {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: end;
  align-items: center;
  width: 100%;
}
.h-divider {
  height: 1px;
  width: 100%;
  background-color: #d9d9d9;
}
</style>
