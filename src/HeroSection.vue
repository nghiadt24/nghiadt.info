<script>
import './scss/color.scss'
</script>

<template>
  <section class="hero-section container">
    <div class="hero-wrap col-9">
      <img src="./assets/img/hero-img.png" alt="" />
      <div class="hero-title-wrap">
        <h1 class="hero-title">
          In a bustling city, a young artist named Mia discovered her love for creating immersive
          environments. With a flair for blending colors and shapes, she transformed ordinary spaces
          into extraordinary experiences, captivating everyone who stepped inside.
        </h1>
        <div class="hero-button-wrap">
          <a href="#" class="SecondaryBtn">My Download <PhDownload :size="28" /></a>
          <a href="#" class="PrimaryBtn">Let's Talk <PhChatCircleDots :size="28" /></a>
        </div>
      </div>
    </div>
    <video autoplay loop class="hero-vid col-12">
      <source src="./assets/video/hero_vid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>
</template>

<style lang="scss">
@import './scss/color.scss';
@import './scss/layout.scss';
@import './scss/components.scss';
.hero-section {
  padding-top: 120px;
}
.hero-title {
  font-size: 36px;
  line-height: 52px;
  font-weight: 400;
  @include color-content-neutral-strong();
  display: inline-block;
}
.hero-wrap {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 32px;
}
.hero-title-wrap {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 32px;
}
.hero-button-wrap {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 16px;
}
.hero-vid {
  border-radius: 16px;
  width: 100%;
  height: auto;
  margin-top: 48px;
}
</style>
