import './ItemGallery.js';

class listGallery extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    set listItem(listItem){
        this.render(listItem);
    }

    /**
     * Render Component
     */
    render(gallery) {
        this._shadowRoot.innerHTML = `
            <style>

            section{
                width:80%;
                margin: 4rem auto 10rem auto;
            }

            .line{
                width:20rem;
                height:1rem;
                background-color:black;
            }

            h3{
                font-size: 4.8rem;
            }

            .container-gallery{
                width:100%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                gap:4rem 4rem;
            }

            @media (max-width: 61.25em) {
                .container-gallery{
                    grid-template-columns:1fr 1fr;
                    grid-template-rows: 1fr 1fr 1fr;
                }
            }

            @media (max-width: 28.75em) {
                h3{
                    font-size: 3.6rem;
                }

                .line{
                    width:10rem;
                }

                .container-gallery{
                    grid-template-columns:1fr;
                    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
                }
                
            }


            


            </style>
            
            <section>
                <div class="container-title">
                    <div class="line"></div>
                    <h3>Our Gallery</h3>
                </div>
                
                <div class="container-gallery"></div>
            </section>
        `;

        const containerCard = this._shadowRoot.querySelector(".container-gallery");

        gallery.forEach(element => {
            const card = document.createElement("item-gallery");
            card.setItem = element;
            containerCard.appendChild(card);
        });
    }
}

customElements.define("galery-section", listGallery);