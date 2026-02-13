<template>
    <div class="home-page">
        <!-- <HeroSection/> -->
        <div class="bg-home">
            <HeroSection/>
            <WelcomeSection/>
            <PackageSection/>
            <GalerySection/>
            <AboutUsSection/>
        </div>
    </div>
</template>

<script>
import HeroSection from '@/components/main/home/HeroSection.vue';
import WelcomeSection from '@/components/main/home/WelcomeSection.vue';
import PackageSection from '@/components/main/home/PackageSection.vue';
import GalerySection from '@/components/main/home/GalerySection.vue';
import AboutUsSection from '@/components/main/home/AboutUsSection.vue';

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
    background-image: url("../../../assets/bg-home.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    min-height: 100vh;
    background-attachment: fixed;
}


</style>