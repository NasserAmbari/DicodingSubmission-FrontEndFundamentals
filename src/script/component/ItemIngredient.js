class ItemIngredient extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    set setItem(ingredient){
        this._nameItem = ingredient.item;
        this._url = ingredient.url;
        this.render();
    }

    /**
    * Render Component
    */
    render(){
        this._shadowRoot.innerHTML = `
            <style>
                .card{
                    text-align:center;
                    border-radius:10%;
                    margin: 0 2rem;
                    position:relative;
                }

                img{
                    width:20rem;
                    margin:0 4rem;
                }

                .blur{
                    position:absolute;
                    left:0;
                    filter:blur(15px);
                    z-index:-1;
                    opacity:.35;
                    transform:translate(-10px 10px);
                }

                p{
                    font-size:var(--paragraf);
                }
            </style>

            <div class="card">
            <img src="https://www.thecocktaildb.com/images/ingredients/${this._url}-medium.png" class="blur">
                <img src="https://www.thecocktaildb.com/images/ingredients/${this._url}-medium.png">
                
                <p>
                    ${this._nameItem}
                </p>
            </div>
        `;
    }

}

customElements.define("item-ingredient", ItemIngredient);