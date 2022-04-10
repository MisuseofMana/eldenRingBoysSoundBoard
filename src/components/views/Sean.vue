<template>
    <div class="pa-5">
        <v-img height="300px" class="mb-5" :src="require(`@/assets/images/shoe.jpg`)"></v-img>
        <SoundBoard 
            title="Shoe Says"
            :boardItems="shoeSounds"
            who="shoe"
        />
    </div>
</template>

<script>
import shoeSounds from "@/soundCards/shoeCards";
import SoundBoard from "@/components/SoundBoard";
import { utilities } from '@/mixins/utilities.js'

export default {
    components: {
        SoundBoard,
    },
    mixins: [utilities],
    data() {
        return {
            shoeSounds: this.compileSounds(shoeSounds),
        }
    }
}
</script>