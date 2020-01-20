<template>
  <div>
    <app-headernav></app-headernav>
    <div class="container py-5">
      <h2>Senators</h2>
      <p class="text-justify">
        <span class="ml-4">First</span> convened in 1789, the composition and
        powers of the Senate are established in Article One of the U.S.
        Constitution. Each state is represented by two senators, regardless of
        population, who serve staggered six-year terms. The Senate has several
        exclusive powers not granted to the House, including consenting to
        treaties as a precondition to their ratification and consenting to or
        confirming appointments of Cabinet secretaries, federal judges, other
        federal executive officials, military officers, regulatory officials,
        ambassadors, and other federal uniformed officers, as well as trial of
        federal officials impeached by the House.
      </p>
    </div>
    <div>
      <div class="container py-3 rounded bg-light my-3">
        <ul class="d-flex flex-row list-unstyled m-0 align-items-center">
          <li class="pr-4">Filter by Party</li>
          <li
            v-for="party in partyFilter"
            class="px-4"
            v-bind:key="party.value"
          >
            <label class="form-check-label" v-bind:for="party.name">
              <input
                class="form-check-input"
                type="checkbox"
                v-bind:id="party.name"
                v-bind:value="party.value"
                checked
                v-model="checkedFilters"
              />
              {{ party.name }}
            </label>
          </li>

          <!-- <li class="px-4 dropdown active ml-auto">
            <select
              id="statesMenu"
              class="custom-select pre-scrollable m-0"
              aria-labelledby="Select State"
              v-model="selectedState"
            >
              <option
                v-for="(state, i) in allStates"
                class="dropdown-item"
                v-bind:value="state"
                v-bind:key="i"
                >{{ state }}</option
              >
            </select>
          </li> -->
        </ul>
      </div>

      <div class="container table-responsive">
        <table class="table table-striped table-bordered table-hover">
          <caption>
            Members of the Senate
          </caption>
          <thead class="bg-info text-light">
            <tr>
              <th class="text-center">Name</th>
              <th class="text-center">Party</th>
              <th class="text-center">State</th>
              <th class="text-center">Years in Office</th>
              <th class="text-center">% of votes w/ Party</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in getMembers" v-bind:key="member.id">
              <td class="text-center">
                <a v-bind:href="member.url">
                  {{ member.first_name }} {{ member.middle_name }}
                  {{ member.last_name }}
                </a>
              </td>
              <td class="text-center">{{ member.party }}</td>
              <td class="text-center">{{ member.state }}</td>
              <td class="text-center">{{ member.seniority }}</td>
              <td class="text-center">{{ member.votes_with_party_pct }}%</td>
            </tr>
            <!-- <tr v-if="filterMembers.length == 0">
              <td colspan="5" class="text-center p-3 font-weight-bold">
                No data matches that criteria
              </td>
            </tr> -->
          </tbody>
        </table>

        <div id="loader" class="sk-cube-grid">
          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
          <div class="sk-cube sk-cube4"></div>
          <div class="sk-cube sk-cube5"></div>
          <div class="sk-cube sk-cube6"></div>
          <div class="sk-cube sk-cube7"></div>
          <div class="sk-cube sk-cube8"></div>
          <div class="sk-cube sk-cube9"></div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    "app-headernav": HeaderNav,
    "app-footer": Footer
  },

  data() {
    return {
      members: [],

      partyFilter: [
        { name: "Democrats", value: "D" },
        { name: "Republicans", value: "R" },
        { name: "Independents", value: "I" }
      ],
      checkedFilters: ["D", "R", "I"],

      allStates: [],
      selectedState: "All States",

      alternate: true
    };
  },

  methods: {
    states: function(array) {
      array.forEach((element) => {
        if (this.allStates.includes(element.state) == false) {
          this.allStates.push(element.state);
          this.allStates.sort();
        }
      });
      this.allStates.unshift("All States");
      this.alternate = !this.alternate;
    }
  },

  computed: {
    getMembers() {
      return this.$store.getters.getMembers;
    },

    filterMembers() {
      let result = [];
      if (this.selectedState == "All States") {
        result = this.members.filter((member) => {
          return this.checkedFilters.includes(member.party);
        });
      } else if (this.selectedState != "All States") {
        result = this.members.filter((member) => {
          return (
            this.checkedFilters.includes(member.party) &&
            this.selectedState.includes(member.state)
          );
        });
      }
      return result;
    }
  },

  /* computed: {
    members() {
      return this.$store.state.members;
    }
  },
 */
  mounted() {
    this.$store.dispatch("getData");
  },

  created() {
    //  this.states(this.$store.getters.getMembers);
  }
};
</script>

<style scoped>
table a {
  text-decoration: none;
  color: black;
  transition: all 0.3s;
}

table a:hover {
  text-decoration: none;
  transition: all 0.3s;
  color: #0056b3;
}
</style>
