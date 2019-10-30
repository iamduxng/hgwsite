import Dexie from "dexie";

class IdbApis {
	_dbPromise;
	_dbName = 'my-idb-database';

	networkMode = 'online';

	constructor() {
		console.log('Create only one');
		if (!('indexedDB' in window)) {
				console.log('This browser doesn\'t support IndexedDB');
		}
		navigator.onLine === true ? this.networkMode = 'online' : this.networkMode = 'offline';
		this._connectDB();
	}

	_connectDB() {
		this._dbPromise = new Dexie(this._dbName);
		this._dbPromise.version(1).stores({
			searchData: '++id',
			countries: '++id',
			cities: '++id, country'
		});
	}

	_openDB() {
		this._dbPromise.open().then((db) => {
				console.log(`DB name: ${db.name}`);
				console.log(`DB version: ${db.verno}`);
		}).catch('NoSuchDatabaseError', function(e) {
				// Database with that name did not exist
				console.error ("Database not found");
		}).catch(function (e) {
				console.error ("Oh uh: " + e);
		});
	}

	isDBOpen() {
		return this._dbPromise.isOpen();
	}

	deleteDB() {
		this._dbPromise.delete().then(() => {
				console.log("Database successfully deleted");
		}).catch((err) => {
				console.error("Could not delete database");
		});
	}

	//POST: Search Form data
	saveSearchData(data) {
		let { country, city, fromDate, toDate, travelStyles, travelConcerns } = data;
		return this._dbPromise.transaction('rw', this._dbPromise.searchData, () => {
				this._dbPromise.searchData.clear();
				return this._dbPromise.searchData.add({
						country: country,
						city: city,
						fromDate: new Date(fromDate),
						toDate: new Date(toDate),
						travelStyles: travelStyles,
						travelConcerns: travelConcerns
				});
		});
	}

	//GET: Search Form data
	getSearchData() {
		return this._dbPromise.transaction('r', this._dbPromise.searchData, async () => {
				let item = null;
				await this._dbPromise.searchData.each(data => {
						item = data;
				});
				return item;
		});
	}

	//CHECK: Search Data table has data
	async isSearchDataExisting() {
		let nums = 0;
		if(this._dbPromise.searchData) {
			await this._dbPromise.searchData.count().then(count => {
				nums = count;
			});
		}
		return nums > 0;
	}
	
	//POST: Countries data
	saveCountriesData(countries) {
		this._dbPromise.transaction('rw', this._dbPromise.countries, () => {
			this._dbPromise.countries.clear();
			return this._dbPromise.countries.add(countries);
		});
	}

	//POST: Cities data
	saveCitiesData(cities) {
		this._dbPromise.transaction('rw', this._dbPromise.cities, () => {
			this._dbPromise.cities.add(cities);
		});
	}

	//CHECK: Countries table has data
	async isCountriesExisting() {
		let nums = 0;
		if(this._dbPromise.countries) {
			await this._dbPromise.countries.count().then(count => {
				nums = count;
			});
		}
		return nums > 0;
	}

	//GET: Countries data
	getCountriesData() {
		return this._dbPromise.transaction('r', this._dbPromise.countries, async () => {
			let item = null;
			await this._dbPromise.countries.each(data => {
				item = data;
			});
			return item;
		});
	}

	//GET: Cities data by a country name
	getCitiesByCountry(countryName) {
		return this._dbPromise.transaction('r', this._dbPromise.cities, async () => {
			let item = null;
			await this._dbPromise.cities.where('country')
				.equals(countryName)
				.each(data => {
					item = data;
				});
			return item;
		});
	}
}

const IDB = new IdbApis();

export default IDB;