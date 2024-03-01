<template>
    <div>
        <q-dialog v-model="show_pokemon_details_model" 
            persistent transition-show="scale" transition-hide="scale">
            <q-card style="width: 40%">
                <q-card-section>
                    <div class="text-h6"><span style="text-transform: capitalize;">{{ pokemon_details.name }}</span></div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <div class="row">
                        <div class="col flex flex-center">
                            <img :src="pokemon_details.sprites.other.home.front_default" width="75%" />
                        </div>
                        <div class="col">
                            <q-list>
                                <q-item>
                                    <q-item-section>
                                        <q-item-label overline>Abilies</q-item-label>
                                        <q-item-label>                                        
                                            <span v-for="(ability, index) in pokemon_details.abilities"
                                                :key="index">
                                                {{ ability.ability.name }} <span v-if="index < pokemon_details.abilities.length - 1">, </span>
                                            </span>                                       
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                                <q-item>
                                    <q-item-section>
                                        <q-item-label overline>Weight</q-item-label>
                                        <q-item-label>                                        
                                            {{ pokemon_details.weight }}                           
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </div>
                    </div>
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup @click="closePokemonDetailsDialog()" />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    data: () => ({
        show_pokemon_details_model: false
    }),
    props: {
        show_pokemon_details_dialog: Boolean,
        pokemon_details: Object
    },
    methods: {
        closePokemonDetailsDialog() {
            this.$emit('closePokemonDetailsDialog')
        }
    },
    watch: {
        show_pokemon_details_dialog() {
            this.show_pokemon_details_model = this.show_pokemon_details_dialog
        }
    }
}
</script>