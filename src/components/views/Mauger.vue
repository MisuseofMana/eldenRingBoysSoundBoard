<template>
    <div class="pa-5">
        <v-img height="300px" class="mb-5" :src="require(`@/assets/images/maug.jpg`)"></v-img>
        <SoundBoard 
            title="Mauger's Mean-ones"
            :boardItems="maugerSounds"
            who="maug"
        />
    </div>
</template>

<script>
import maugerSounds from "@/soundCards/maugerCards";
import SoundBoard from "@/components/SoundBoard";
import { utilities } from '@/mixins/utilities.js'

export default {
    components: {
        SoundBoard,
    },
    mixins: [utilities],
    data() {
        return {
            maugerSounds: this.compileSounds(maugerSounds),
        }
    }
}
</script>