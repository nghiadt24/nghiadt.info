<script>
import './scss/color.scss'
import './scss/components.scss'
</script>

<template>
    <section class="GallerySection container">
        <div class="GalleryTitle">
            <h2 class="GalleryTitleText">
                Featured Projects
            </h2>
        </div>
        <div class="WorkGalleryRow row">
            <a class="WorkCard col-8">
                <img src="./assets/img/first_prj.jpg" class="WorkCardImage" alt="">
                <div class="WorkCardTitleWrap">
                    <h3 class="WorkCardTitle">
                        Project Title
                    </h3>
                    <h3 class="WorkCardSubtitle">
                        / 2024
                    </h3>
                </div>
            </a>
            <a class="WorkCard col-4">
                <img src="./assets/img/2nd_prj.jpg" class="WorkCardImage" alt="">
                <div class="WorkCardTitleWrap">
                    <h3 class="WorkCardTitle">
                        Project Title
                    </h3>
                    <h3 class="WorkCardSubtitle">
                        / 2024
                    </h3>
                </div>
            </a>
        </div>
    </section>
</template>

<style lang="scss">
@import './scss/color.scss';
@import './scss/layout.scss';
@import './scss/components.scss';

.GallerySection {
    height: 100vh;
}
.GalleryTitle {
    margin-bottom: 48px;
}
.GalleryTitleText {
    @include color-content-neutral-strong;
    text-align: left;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
}
.WorkGalleryRow {
    display: flex;
    gap: 24px;
}
.WorkCard {
    display: flex;
    flex-direction: column;
    flex: 1; 
    max-width: 100%;
    gap: 24px; 
}
.WorkCard.col-8 {
    flex: 2; 
}
.WorkCard.col-4 {
    flex: 1; 
}
.WorkCardImage {
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    display: block;
}
.WorkCardTitleWrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
</style>