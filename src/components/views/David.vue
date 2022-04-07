<template>
    <div class="pa-5">
        <v-img height="300px" class="mb-5" :src="require(`@/assets/images/davy.jpg`)"></v-img>
        <SoundBoard 
            title="Davy's Dirges"
            :boardItems="davySounds"
            who="davy"
        />
    </div>
</template>

<script>
import davySounds from "@/soundCards/davyCards";
import SoundBoard from "@/components/SoundBoard";
import { utilities } from '@/mixins/utilities.js'

export default {
    components: {
        SoundBoard,
    },
    mixins: [utilities],
    data() {
        return {
            davySounds: this.compileSounds(davySounds),
        }
    }
}
</script>