class DataSource{
    static async getItem(){
        const randomTenItem = 10;
        try {
            const response = await fetch(process.env.LIST_COCKTAIL);

            if(!response.ok){
                throw new Error("There Something Wrong");
            }

            const responseJson = await response.json();

            let ingredient = [];
            for (let index = 0; index < randomTenItem; index++) {
                let item = responseJson.drinks[Math.floor(Math.random() * responseJson.drinks.length)].strIngredient1;
                let url = encodeURIComponent(item);
                ingredient.push({
                    url:url,
                    item:item
                });
            }

            return Promise.resolve(ingredient);
            
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async getGallery(){
        try {
                const response = await fetch(process.env.URL_IMAGE);
                if(!response.ok){
                    throw new Error("There Something Wrong");
                }
                const responseJson = await response.json();
                let item = responseJson.drinks[0];
            
            return Promise.resolve(item);
        
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default DataSource;