const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			AllTheCharacters:[],
				AllTheEpisode:[],
					AllTheLocation:[],
						Favorites:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getAllTheCharacters: ()=>{
				fetch("https://rickandmortyapi.com/api/character")
				.then((received)=> received.json())
                .then((data)=> setStore({AllTheCharacters:data.results }))
                    .catch ((error)=>{
                     console.error(`Error fetching data for: ${error.message}`)
                    }) 
			},
			getAllTheEpisode: ()=>{
				fetch("https://rickandmortyapi.com/api/episode")
				.then((received)=> received.json())
                .then((data)=> setStore({AllTheEpisode:data.results }))
                    .catch ((error)=>{
                     console.error(`Error fetching data for: ${error.message}`)
                    }) 
			},
			getAllTheLocation: ()=>{
				fetch("https://rickandmortyapi.com/api/location")
				.then((received)=> received.json())
                .then((data)=> setStore({AllTheLocation:data.results }))
                    .catch ((error)=>{
                     console.error(`Error fetching data for: ${error.message}`)
                    }) 
			},
			getFavorite: (name)=>{
				const store = getStore();
				setStore({Favorites:[...store.Favorites,name]})
			},

			getDeleteFavorite: (name) => {
				const store = getStore();
				const updatedFavorites = store.Favorites.filter(favorite => favorite !== name);
				setStore({ Favorites: updatedFavorites });
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
