class Hero extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    /**
    * Render Component
    */
    render(){
        this._shadowRoot.innerHTML=`
            <style>
                hero-section{
                    width:100%;
                    
                }

                section{
                    width:80%;
                    margin: 0 auto;
                    padding-top:10vh;
                    display:flex;
                    flex-wrap: wrap;
                    flex-direction:column;
                    align-items: center;
                }

                .title-drinks{
                    font-size:6rem;
                    font-family:'Playfair Display', serif;
                    flex:1;
                }
                
                h1{
                    margin-top:2rem;
                    font-size:5rem;
                    color:black;
                }
                
                img{
                    width:100%;
                }

                @media (max-width: 28.75em) {
                    h1{
                        font-size:4rem;
                    }
                }
                
                .container-scroll-down{
                    margin-top:2rem;
                    z-index:-9999;
                }

                .scroll-down{
                    width:4.8rem;
                    height:4.8rem;
                    animation-name: goDown;
                    animation-duration: 2s;
                    animation-iteration-count:infinite;
                }

                .scroll-down span{
                    display:block;
                    height:.2rem;
                    background-color:black;
                    border-radius:.2rem;
                }

                .scroll-down span:nth-child(1){
                    transform:translate(.8rem,2.5rem) rotate(45deg);
                    width:40%;
                }

                .scroll-down span:nth-child(2){
                    transform:translate(2rem,2.2rem) rotate(-45deg);
                    width:40%;
                }

                .scroll-down span:nth-child(3){
                    transform:translate(.8rem,1.2rem) rotate(90deg);
                    width:65%;
                }

                @keyframes goDown {
                    0%   { 
                        transform:translateY(-2rem);
                        opacity:0;
                    }
                    100% { 
                        transform:translateY(2rem);
                        opacity:1;
                    }
                }

                
            </style>

            <section>
                <h1>
                    Let's Drinks
                </h1>

                <div>
                    <img src="https://www.thecocktaildb.com/images/ingredients/gin-Medium.png" alt="Girl in a jacket">
                </div>

                <div class="container-scroll-down">
                    <div class="scroll-down">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </section>
        `;
    }

    /**
    * Will be called
    * when the element is created
    */
    connectedCallback(){
        this.render();
    }
}

customElements.define("hero-section", Hero);