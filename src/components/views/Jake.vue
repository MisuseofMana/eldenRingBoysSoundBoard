<template>
    <div class="pa-5">
        <v-img height="300px" class="mb-5" :src="require(`@/assets/images/jake.jpg`)"></v-img>
        <SoundBoard 
            title="Jakes's Japes"
            :boardItems="jakeSounds"
            who="jake"
        />
    </div>
</template>

<script>
import jakeSounds from "@/soundCards/jakeCards";
import SoundBoard from "@/components/SoundBoard";
import { utilities } from '@/mixins/utilities.js'

export default {
    components: {
        SoundBoard,
    },
    mixins: [utilities],
    data() {
        return {
            jakeSounds: this.compileSounds(jakeSounds),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>