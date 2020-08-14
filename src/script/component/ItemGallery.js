class ItemGallery extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    set setItem(gallery){
        this.render(gallery);
    }

    /**
    * Render Component
    */
    render(gallery){
        this._shadowRoot.innerHTML=`
            <style>
                img{
                    width:100%;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                }

                .card{
                    position:relative;
                    overflow:hidden;
                }

                .card::after{
                    content:"";
                    position:absolute;
                    left: 0;
                    top:0;
                    width:100%;
                    height:100%;
                    opacity:0;
                    background-color:black;
                    transition: all 0.2s ease-in-out;
                }

                .card:hover::after{
                    opacity:0.4;
                }

                p{
                    color:white;
                    bottom:5%;
                    right:5%;
                    z-index:3;
                    margin:0;
                    position:absolute;
                    font-size:2.4rem;
                    transform:translateY(16rem);
                    transition: all 0.2s ease-in-out;
                    line-height:1.6;
                }

                .card:hover p{
                    transform:translateY(0rem);
                }

                @media (max-width: 28.75em) {
                    p{
                        font-size:1.8rem;
                    }
                }

            </style>

            <div class="card">
                <img src="${gallery.strDrinkThumb}">
                <p>${gallery.strDrink}</p>
            </div>
        `;

    }
}

customElements.define("item-gallery", ItemGallery);