<template>
    <div class="home-page">
        <HeroSection/>
        <div class="bg-home">
            <WelcomeSection/>
            <PackageSection/>
            <GalerySection/>
            <AboutUsSection/>
        </div>
    </div>
</template>

<script>
import HeroSection from '@/components/homePage/HeroSection.vue';
import WelcomeSection from '@/components/homePage/WelcomeSection.vue';
import PackageSection from '@/components/homePage/PackageSection.vue';
import GalerySection from '@/components/homePage/GalerySection.vue';
import AboutUsSection from '@/components/homePage/AboutUsSection.vue';

export default {
    name: "HomePage",
    components: {
        HeroSection,
        WelcomeSection,
        PackageSection,
        GalerySection,
        AboutUsSection
    },
};
</script>


<style>
.home-page {
  min-height: 100vh;
}

.bg-home {
    background-image: url("../../../assets/bg-home.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    min-height: 100vh;
    background-attachment: fixed;
}


</style>