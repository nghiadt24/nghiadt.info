<script>
import './scss/color.scss'
</script>

<template>
  <nav class="main-nav">
    <div class="nav-items">
      <a href="#" class="NavLink">
        <PhHouseLine :size="28" />
      </a>
      <a href="#" class="NavLink">
        <PhUserCircle :size="28" />
      </a>
      <a href="#" class="NavLink">
        <PhCardsThree :size="28" />
      </a>
    </div>

    <div class="divider"></div>

    <div class="nav-items">
      <a href="#" class="NavLink">
        <PhTelegramLogo :size="28" />
      </a>
      <a href="#" class="NavLink">
        <PhLinkedinLogo :size="28" />
      </a>
      <a href="#" class="NavLink">
        <PhDribbbleLogo :size="28" />
      </a>
      <a href="#" class="NavLink">
        <PhFigmaLogo :size="28" />
      </a>
      <a href="#" class="NavLink">
        <PhAddressBook :size="28" />
      </a>
    </div>

    <div class="divider"></div>

    <div class="nav-items">
      <a href="#" class="NavLink">
        <PhMoon :size="28" />
      </a>
    </div>
  </nav>
</template>

<style lang="scss">
@import './scss/color.scss';
@import './scss/layout.scss';
@import './scss/components.scss';

.main-nav {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 42px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 24px;
  border-radius: 16px;
  @include color-bg-white;
  @include color-border-neutral-medium;
  z-index: 1000;
}
.nav-items {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 24px;
  transition: 0.3s ease;
  &:hover {
    gap: 32px;
  }
}
.divider {
  width: 1px;
  height: 41px;
  background: #d9d9d9;
}
</style>
