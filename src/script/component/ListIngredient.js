import './ItemIngredient.js';

class ListIngredient extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    set listItem(item){
        this.render(item);
    }

    /**
    * Render Component
    */
    render(ingredient){
        this._shadowRoot.innerHTML=`

            <style>
                section{
                    flex-warp:warp;
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

                .container-image{
                    position:relative;
                }

                .overflow-gradient{
                    position:absolute;
                    z-index:999;
                }

                .container-card{
                    width:100%;
                    display:flex;
                    overflow-x: auto;
                    scroll-behavior: smooth;
                    padding-top: 3rem;
                }

                .overflow-gradient{
                    width:10%;
                    height:28.5rem;
                    position:absolute;
                    z-index:999;
                }

                .left-gradient{
                    background: linear-gradient(90deg, rgba(255,255,255,1) 0%,rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.6) 60%, rgba(0,0,0,0) 100%);
                    left:0;
                }
                .right-gradient{
                    background: linear-gradient(270deg, rgba(255,255,255,1) 0%,rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.6) 60%, rgba(0,0,0,0) 100%);
                    right:0;
                }

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

                .container-card p{
                    font-size:var(--paragraf);
                }

                .container-scroll{
                    display:flex;
                    justify-content:flex-end;
                }

                .container-scroll-left{
                    margin-top:2rem;
                }

                @media (max-width: 28.75em) {
                    h3{
                        font-size: 3.6rem;
                    }

                    .line{
                        width:10rem;
                    }
                    
                    img{
                        width:20rem;
                        margin:0 2rem;
                    }
                }

                .container-scroll-left{
                    width:4.8rem;
                    height:4.8rem;
                    animation-name: goLeft;
                    animation-duration: 2s;
                    animation-iteration-count:infinite;
                }

                .scroll span{
                    display:block;
                    height:.2rem;
                    background-color:black;
                    border-radius:.2rem;
                }

                .container-scroll-left h6{
                    transform:rotate(-270deg);
                    font-size:2rem;
                }

                .scroll span:nth-child(1){
                    transform:translate(.8rem,2.5rem) rotate(45deg);
                    width:40%;
                }

                .scroll span:nth-child(2){
                    transform:translate(2rem,2.2rem) rotate(-45deg);
                    width:40%;
                }

                .scroll span:nth-child(3){
                    transform:translate(.8rem,1.2rem) rotate(90deg);
                    width:65%;
                }

                @keyframes goLeft {
                    0%   { 
                        transform:translateX(-20rem) rotate(270deg);
                        opacity:0;
                    }
                    100% { 
                        transform:translateX(-11rem) rotate(270deg);
                        opacity:1;
                    }
                }

            </style>

            <section>
                <div class="caption">
                    <div class="line"></div>
                    <h3>What We Have</h3>
                    
                    <div class="container-image">

                        <div class="overflow-gradient left-gradient"></div>
                        <div class="overflow-gradient right-gradient"></div>

                        <div class="container-card"></div>

                    </div>

                    <div class="container-scroll">
                        <div class="container-scroll-left">
                        <h6>Scroll</h6>
                            <div class="scroll">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        `;
        
        const containerCard = this._shadowRoot.querySelector(".container-card");

        ingredient.forEach(itemElement => {
            const card = document.createElement("item-ingredient");
            card.setItem = itemElement;
            containerCard.appendChild(card);
        });
    }
}

customElements.define("list-ingredient", ListIngredient);