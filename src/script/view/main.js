import '../component/ListIngredient.js';
import '../component/ListGallery.js';
import DataSource from '../data/dataSource.js';

const main = () =>{
    const ingredientElement = document.querySelector("list-ingredient");
    const galeryElement = document.querySelector("galery-section");

    const someItem = async () =>{
        try {
            const result = await DataSource.getItem();
            ingredientElement.listItem = result;
        } catch (error) {
            console.error(error);
        }
    }
    
    const galleryItem = async () =>{
        try {
            let item = [];
            for (let idx = 0; idx < 6; idx++) {
                const result = await DataSource.getGallery();
                item.push(result);
            }
            galeryElement.listItem = item;
        } catch (error) {
            console.error(error);
        }
    }

    galleryItem();someItem();
}

export default main;