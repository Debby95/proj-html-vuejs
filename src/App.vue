<template>
  <div id="app">
    <TheHeader :theNavBar="theNavBar"></TheHeader>
    <TheNavBar></TheNavBar>
    <TheMain></TheMain>
    <ResultsAndPerformance :theCard="theCard"></ResultsAndPerformance>
    <TheCard></TheCard>
    <BruceeLeeSection></BruceeLeeSection>
    <TheTrainersSection></TheTrainersSection>
    <ThePerformanceSection></ThePerformanceSection>
    <JoinUs></JoinUs>
    <TheFooter :theFooterLink="theFooterLink"></TheFooter>
    <TheFooterLink></TheFooterLink>
    <TheCopyrightSection></TheCopyrightSection>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheNavBar from "./components/TheNavBar.vue";
import TheMain from "./components/TheMain.vue";
import ResultsAndPerformance from "./components/ResultsAndPerformance.vue";
import TheCard from "./components/TheCard.vue"
import BruceeLeeSection from "./components/BruceeLeeSection.vue";
import TheTrainersSection from "./components/TheTrainersSection.vue";
import ThePerformanceSection from "./components/ThePerformanceSection.vue";
import JoinUs from "./components/JoinUs.vue";
import TheFooter from "./components/TheFooter.vue";
import TheFooterLink from "./components/TheFooterLink.vue";
import TheCopyrightSection from "./components/TheCopyrightSection.vue";




export default {
  name: 'App',
  components: {
    TheHeader,
    TheNavBar,
    TheMain,
    ResultsAndPerformance,
    TheCard,
    BruceeLeeSection,
    TheTrainersSection,
    ThePerformanceSection,
    JoinUs,
    TheFooter,
    TheFooterLink,
    TheCopyrightSection
},
  data() {
    return {
      theCard: [],
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/main.scss";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-width: 1200px;
    max-width: 1800px;
    margin: auto;
  }
</style>
