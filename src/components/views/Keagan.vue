<template>
    <div class="pa-5">
        <v-img height="300px" class="mb-5" :src="require(`@/assets/images/keeg.jpg`)"></v-img>
        <SoundBoard 
            title="Keagan's Quips"
            :boardItems="keaganSounds"
            who="keeg"
        />
    </div>
</template>

<script>
import keaganSounds from "@/soundCards/keaganCards";
import SoundBoard from "@/components/SoundBoard";
import { utilities } from '@/mixins/utilities.js'

export default {
    components: {
        SoundBoard,
    },
    mixins: [utilities],
    data() {
        return {
            keaganSounds: this.compileSounds(keaganSounds),
        }
    }
}
</script>