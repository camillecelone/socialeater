Vue.component('inputrestcomp',
{
	props: ['btype', 'datatype'],
	template:`<div>

	<div class="inputField">
		<input type="text" v-model="newName" placeholder="Name of Restaurant"/>
	</div>

	<div class="inputField inputText">
		<input type="text" id="newFoodType" v-model="newFoodType" placeholder="Type of Food"/>
	</div>

	<div class="inputField">
		<label for="prices">Price Point: </label>
        <select class="priceSelect" v-model="selectedPrice">
				<option v-for="option in prices" v-bind:value="option.value">{{option.text}}</option>
        </select>
	</div>

	<div class="inputField">
		<select class="fullSelect" v-model="selectedNeighborhood">
			<option disabled="disabled"> Select Neighborhood </option>
			<option v-for="option in neighborhoods" v-bind:value="option.value">{{option.text}}</option>
		</select>
	</div>

	<div class="inputField">
		<label for="drinks">Drinks: </label>
		<select class="drinksSelect" v-model="selectedDrinks">
			<option v-for="option in drinks" v-bind:value="option.value">{{option.text}}</option>
		</select>
	</div>

	<div class="inputField inputText">
		<input type="text" id="newMenu" v-model="newMenu" placeholder="Link to Menu"/>
	</div>

	<button id="addRestaurant" v-on:click="addRest">Add {{btype}} to List</button>
	</div>`,
	data: function() {
		return {
			newName: '',
			newFoodType: '',
			newBarType: '',
			newMenu: '',
			prices: [
				{text: '$', value: '$'}, {text: '$$', value: '$$'}, {text: '$$$', value: '$$$'}, {text: '$$$$', value: '$$$$'},
			],
			selectedPrice: '$',
			neighborhoods: [
				{text: 'Albany Park', value: ' Albany Park' }, {text: 'Andersonville', value: 'Andersonville' }, {text: 'Avondale', value: 'Avondale' },
				{text: 'Beverly', value: 'Beverly' }, {text: 'Boystown', value: 'Boystown' }, {text: 'Bridgeport', value: 'Bridgeport' },
				{text: 'Bronzeville', value: 'Bronzeville' }, {text: 'Bucktown', value: 'Bucktown' }, {text: 'Chinatown', value: 'Chinatown' },
				{text: 'Edgewater', value: 'Edgewater' }, {text: 'Gold Coast', value: 'Gold Coast' }, {text: 'Humboldt Park', value: 'Humboldt Park' },
				{text: 'Hyde Park', value: 'Hyde Park' }, {text: 'Irving Park', value: 'Irving Park' }, {text: 'Jefferson Park', value: 'Jefferson Park' },
				{text: 'Kenwood', value: 'Kenwood' }, {text: 'Lakeview', value: 'Lakeview' }, {text: 'Lincoln Park', value: 'Lincoln Park' },
				{text: 'Lincoln Square', value: 'Lincoln Square' }, {text: 'Little Italy', value: 'Little Italy' }, {text: 'Little Village', value: 'Little Village' },
				{text: 'Logan Square', value: 'Logan Square' }, {text: 'Loop', value: 'Loop' }, {text: 'Magnificent Mile', value: 'Magnificent Mile' },
				{text: 'North Center', value: 'North Center' }, {text: 'North Park', value: 'North Park' }, {text: 'Old Town', value: 'Old Town' },
				{text: 'Pilsen', value: 'Pilsen' }, {text: 'Portage Park', value: 'Portage Park' }, {text: 'Pullman', value: 'Pullman' },
				{text: 'River North', value: 'River North' }, {text: 'Rogers Park', value: 'Rogers Park' }, {text: 'Roscoe Village', value: 'Roscoe Village' },
				{text: 'South Loop', value: 'South Loop' }, {text: 'South Shore', value: 'South Shore' }, {text: 'Streeterville', value: 'Streeterville' },
				{text: 'Uptown', value: 'Uptown' }, {text: 'West Loop', value: 'West Loop' }, {text: 'West Ridge', value: 'West Ridge' },
				{text: 'West Town', value: 'West Town' }, {text: 'Wicker Park', value: 'Wicker Park' }, {text: 'Wrigleyville', value: 'Wrigleyville' },
			],
			drinks: [
				{text: 'Has Drinks', value: 'Has Drinks'}, {text: 'Doesnt Have Drinks', value: 'Doesnt Have Drinks'}, {text: 'Byob', value: 'Byob'},
			],
			selectedDrinks: 'Has Drinks',
			selectedNeighborhood: 'Select Neighborhood',
		}
	},
	methods: {
		addRest: function() {
      if (this.newName.length === 0){
          alert ("Please add the name of the restaurant.")
      } else {
          this.datatype.push({ name: this.newName, foodType: this.newFoodType, pricePoint: this.selectedPrice, drinks: this.selectedDrinks, neighborhood: this.selectedNeighborhood, menuLink: this.newMenu, been: false, myRating: "", comment: "" });
      }
			this.newName = "";
			this.newFoodType = "";
			this.newBarType = "";
			this.selectedPrice = "$";
			this.selectedDrinks = "Has Drinks";
			this.newMenu = "";
			this.selectedNeighborhood = "Select Neighborhood";
		},
	}
});

Vue.component('inputbarcomp',
{
	props: ['btype', 'datatype'],
	template:`<div>
	<div class="inputField">
		<input type="text" v-model="newName" placeholder="Name of Bar"/>
	</div>

	<div class="inputField">
		<select class="fullSelect" v-model="selectedBarType">
			<option disabled="disabled"> Type of Bar </option>
			<option v-for="option in barType" v-bind:value="option.value">{{option.text}}</option>
		</select>
	</div>

	<div class="inputField">
		<label for="prices">Price Point: </label>
        <select class="priceSelect" v-model="selectedPrice">
            <option v-for="option in prices" v-bind:value="option.value">{{option.text}}</option>
        </select>
	</div>

	<div class="inputField">
		<select class="fullSelect" v-model="selectedNeighborhood">
        <option disabled="disabled"> Select Neighborhood </option>
        <option v-for="option in neighborhoods" v-bind:value="option.value">{{option.text}}</option>
		</select>
	</div>

	<div class="inputField">
		<input type="text" id="newMenu" v-model="newMenu" placeholder="Link to Menu"/>
	</div>

	<button id="addBar" v-on:click="addBar">Add {{btype}} to List</button>
	</div>`,
	data: function() {
		return {
			newName: '',
			newMenu: '',
			prices: [
				{text: '$', value: '$'}, {text: '$$', value: '$$'}, {text: '$$$', value: '$$$'}, {text: '$$$$', value: '$$$$'},
			],
			selectedPrice: '$',
			neighborhoods: [
				{text: 'Albany Park', value: ' Albany Park' }, {text: 'Andersonville', value: 'Andersonville' }, {text: 'Avondale', value: 'Avondale' },
				{text: 'Beverly', value: 'Beverly' }, {text: 'Boystown', value: 'Boystown' }, {text: 'Bridgeport', value: 'Bridgeport' },
				{text: 'Bronzeville', value: 'Bronzeville' }, {text: 'Bucktown', value: 'Bucktown' }, {text: 'Chinatown', value: 'Chinatown' },
				{text: 'Edgewater', value: 'Edgewater' }, {text: 'Gold Coast', value: 'Gold Coast' }, {text: 'Humboldt Park', value: 'Humboldt Park' },
				{text: 'Hyde Park', value: 'Hyde Park' }, {text: 'Irving Park', value: 'Irving Park' }, {text: 'Jefferson Park', value: 'Jefferson Park' },
				{text: 'Kenwood', value: 'Kenwood' }, {text: 'Lakeview', value: 'Lakeview' }, {text: 'Lincoln Park', value: 'Lincoln Park' },
				{text: 'Lincoln Square', value: 'Lincoln Square' }, {text: 'Little Italy', value: 'Little Italy' }, {text: 'Little Village', value: 'Little Village' },
				{text: 'Logan Square', value: 'Logan Square' }, {text: 'Loop', value: 'Loop' }, {text: 'Magnificent Mile', value: 'Magnificent Mile' },
				{text: 'North Center', value: 'North Center' }, {text: 'North Park', value: 'North Park' }, {text: 'Old Town', value: 'Old Town' },
				{text: 'Pilsen', value: 'Pilsen' }, {text: 'Portage Park', value: 'Portage Park' }, {text: 'Pullman', value: 'Pullman' },
				{text: 'River North', value: 'River North' }, {text: 'Rogers Park', value: 'Rogers Park' }, {text: 'Roscoe Village', value: 'Roscoe Village' },
				{text: 'South Loop', value: 'South Loop' }, {text: 'South Shore', value: 'South Shore' }, {text: 'Streeterville', value: 'Streeterville' },
				{text: 'Uptown', value: 'Uptown' }, {text: 'West Loop', value: 'West Loop' }, {text: 'West Ridge', value: 'West Ridge' },
				{text: 'West Town', value: 'West Town' }, {text: 'Wicker Park', value: 'Wicker Park' }, {text: 'Wrigleyville', value: 'Wrigleyville' },
			],
			barType: [
				{text: 'Brewery', value: 'Brewery'}, {text: 'Cocktail', value: 'Cocktail'}, {text: 'College', value: 'College'},
				{text: 'Dive', value: 'Dive'}, {text: 'Nightclub', value: 'Nightclub'}, {text: 'Pub', value: 'Pub'},
				{text: 'Sports', value: 'Sport'}, {text: 'Wine', value: 'Wine'}
			],
			selectedBarType: 'Type of Bar',
			selectedNeighborhood: 'Select Neighborhood',
		}
	},
	methods: {
		addBar: function() {
      if (this.newName.length === 0){
          alert ("Please add the name of the bar.")
      } else {
          this.datatype.push({ name: this.newName, barType: this.selectedBarType, pricePoint: this.selectedPrice, drinks: this.selectedDrinks, neighborhood: this.selectedNeighborhood, menuLink: this.newMenu, been: false, myRating: "", comment: "" });
      }
			this.newName = "";
			this.selectedBarType = "Type of Bar";
			this.selectedPrice = "$";
			this.newMenu = "";
			this.selectedNeighborhood = "Select Neighborhood";
		},
	}
});

Vue.component('tablecomp',
{
	props: ['datatype', 'been'],
	template:`<div>
	<table>
    <tr v-for="(rest, index) in datatype">
		<div v-if="rest.been === false">
            <td class="cell center">
              <input type="checkbox" v-model="rest.been" v-on:change="addAttended" id="checkbox"/>
            </td>
		</div>

        <td class="cell"> {{rest.name}}</td>

        <div v-if="rest.foodType">
            <td class="cell"> {{rest.foodType}}</td>
        </div>

        <div v-if="rest.barType">
            <td class="cell">{{rest.barType}}</td>
        </div>
        
	    <td class="cell bigger"> {{rest.pricePoint}}</td>
	    <td class="cell"> {{rest.neighborhood}}</td>
        <td class="cell">{{rest.drinks}}</td>
        <td class="cell"> {{rest.menuLink}} </td>
        <td class="cell center big">
	      <a href="#" @click.prevent="remove(index)">X</a>
	    </td>
    </tr>
  </table>
</div>`,
methods: {
	addAttended: function (){
		for (var i=0; i < this.datatype.length; i++){
			if (this.datatype[i].been === true){
				this.been.push(this.datatype[i]),
				this.datatype[i].been.remove,
				this.datatype.splice(i,1)
			}
		}
  },
	remove: function(index) {
		  this.datatype.splice(index, 1);
		}
	}
});

const vm = new Vue({
	el:"#app",
	data: {
    restaurants: [
        { name: "Small Cheval", foodType: "Burgers", pricePoint: "$", drinks: "Has Drinks", neighborhood: "Wicker Park", menuLink:"smallcheval.com/food", been: false, myRating: "", comment: "" },
    	{ name: "Portillos Hot Dogs", foodType: "American", pricePoint: "$", drinks: "Has Drinks", neighborhood: "Loop", menuLink: "portillos.com/all-menus/", been: false, myRating: "", comment: "" },
    ],
    bars: [
    	{ name: "Revolution Brewing", barType: "Brewery", pricePoint: "$$", menuLink: "revbrew.com/beer", neighborhood: "Logan Square",
    	  been: false, myRating: "", comment: "" },
        { name: "Three Dots", barType: "Cocktail", pricePoint: "$", menuLink: "threedotschicago.com/menu/", neighborhood: "River North", been: false, myRating: "", comment: "" },
    ],
		attended: [],
		showType: "restaurant",
		showInputType: "restaurant",
  },
  methods: {
  	tableSwitch(locationType) {
  		this.showType = locationType
  	},
    inputSwitch(inputType) {
        this.showInputType = inputType
    }
  }
});
