<template>
<div>
    <v-card min-height="120px" height="100%" class="d-flex justify-center align-center flex-column pa-2" :color="iconColor({r: 197, g:202, b:233})" raised @click="playSound()">
       <h3>
           <span v-if="isNew">
               &#9733;
           </span>
           {{ displayText }}
        </h3>
        <p class="text-right ma-0"> FAIR: {{ displayCount }}</p>
    </v-card>
</div>
</template>

<script>
import {Howl} from 'howler'
import { utilities } from '@/mixins/utilities.js'
import { doc, updateDoc, increment } from "firebase/firestore";

import { db } from '@/plugins/firebaseDb.js'

export default {
    mixins: [utilities],
    data() {
        return {
            localCount: 0
        }
    },
    props: {
        counter: {
            type: Number,
            default:0
        },
        soundClip: {
            type: String,
            default:'',
        },
        displayText: {
            type: String,
            default: '',
        },
        isNew: {
            type: Boolean,
            default: false,
        },
        who: {
            type: String,
            default: ''
        }
    },
    computed: {
        displayCount() {
            return this.counter + this.localCount
        }
    },
    methods: {
        async playSound() {
            let clip = new Howl({
                src: [require(`@/assets/audio/${this.soundClip}.mp3`)]
            })
            clip.play()
            const biteRef = doc(db, this.who, this.soundClip);
            await updateDoc(biteRef, {
                count: increment(1)
            });
            this.localCount++
        },
    },
}
</script>

<style lang="scss" scoped>
p {
    font-size:.7rem;
}
</style>