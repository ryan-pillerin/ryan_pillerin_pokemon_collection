<template>   
    <div class="pokemon-list-table">
        <q-card-section>
        <q-table
            title="Pokemon"
            :rows="pokemonlist"
            :columns="columns"
            row-key="name">
            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="name" :props="props" class="proper-case">
                        {{ props.row.name }}
                    </q-td>
                    <q-td key="types" :props="props" class="proper-case">
                        <span v-for="(poke_type, index) in props.row.types"
                            :key="index">
                            {{ poke_type.type.name }} <span v-if="index < (props.row.types.length - 1)">, </span>
                        </span>                                         
                    </q-td>
                    <q-td key="abilities" :props="props" class="proper-case">
                        <span v-for="(poke_ability, index) in props.row.abilities"
                            :key="index">
                            {{ poke_ability.ability.name }} <span v-if="index < (props.row.abilities.length - 1)">, </span>
                        </span>
                    </q-td>                   
                    <q-td key="total_base_stat" :props="props" class="proper-case">
                        <span> {{ computeBaseStat(props.row.stats) }} </span>
                    </q-td>
                    <q-td key="action" :props="props" class="proper-case" width="5%">
                        <q-btn outline label="See details" @click="showPokemonDetails(props.row)" />
                    </q-td>
                </q-tr>
            </template>
        </q-table>
        </q-card-section>
        <PokemonDetails
            :show_pokemon_details_dialog="show_pokemon_details_dialog"
            :pokemon_details="selected_pokemon"
            @closePokemonDetailsDialog="closePokemonDetailsDialog()"></PokemonDetails>
    </div>
</template>

<script>
import PokemonDetails from './PokemonDetails.vue';

export default {
    data: () => ({
        columns: [
            { name: 'name', align: 'left', label: 'Pokemon', field: 'name', sortable: true },
            { name: 'types', align: 'center', label: 'Types', field: 'types', sortable: true },
            { name: 'abilities', align: 'center', label: 'Abilities', field: 'abilities', sortable: true },            
            { name: 'total_base_stat', align: 'center', label: 'Total Base Stat', field: 'total_base_stat', sortable: true },
            { name: 'action', align: 'center', label: '', field: 'action', sortable: true},
        ],
        show_pokemon_details_dialog: false,
        selected_pokemon: {}
    }),
    props: {
        pokemonlist: Array
    },
    components: {
        PokemonDetails
    },
    methods: {
        computeBaseStat(stat) {           
            const total_base_stat = stat.reduce( (total, stat) => {
                total += stat.base_stat
                return total
            }, 0);
            return total_base_stat
        },
        showPokemonDetails(pokemon) {
            this.selected_pokemon = pokemon
            this.show_pokemon_details_dialog = true
        },
        closePokemonDetailsDialog() {
            this.selected_pokemon = {}
            this.show_pokemon_details_dialog = false
        }
    }
}
</script>

<style lang="scss" scoped>
.pokemon-list-table {
    margin-left: 5%;
    margin-right: 5%;
}

.proper-case {
    text-transform: capitalize !important;
}
</style>