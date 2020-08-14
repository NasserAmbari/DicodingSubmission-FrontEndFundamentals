class Footer extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                section{
                    width:100%;
                    background-color:black;
                    color:white;
                }

                .container{
                    width:80%;
                    margin: 0 auto;
                    padding: 8rem 0;
                }

                .container-address{
                    display:flex;
                }

                .address{
                    width:50%;
                }

                .social-media{
                    width:50%;
                }

                .line{
                    width:20rem;
                    height:1rem;
                    background-color:white;
                }

                h3{
                    font-size:4.8rem;
                    margin: 3.6rem 0;
                }

                p{
                    font-size: 2rem;
                    margin:0;
                    line-height:1.6;
                }

                .copyright{
                    border-top:1px solid white;
                    text-align:center;
                }

                h6{
                    margin:0;
                    padding:2rem 0;
                    font-size:1.6rem;
                }

                @media (max-width: 61.25em) {
                    .container-address{
                        flex-direction:column;
                    }

                    .address{
                        width:100%;
                    }
    
                    .social-media{
                        width:100%;
                    }
                }

                @media (max-width: 28.75em){
                    h3 {
                        font-size: 3.6rem;
                    }
                    
                    .line{
                        width:10rem;
                    }
                }

                
            </style>

            <section>
                <div class="container">

                    <div class="container-title">
                        <div class="line"></div>
                        <h3>Find Us</h3>
                    </div>

                    <div class="container-address">
                        <div class="address">
                            
                            <p>
                                Unknown World
                                <br>
                                Jl. Kengangan Bersama
                                <br>
                                Balikpapan, 71363
                            </p>

                        </div>
                    </div>

                </div>
                <div class="copyright">
                        <h6>Drinks</h6>
                    </div>
            </section>
        
        `;
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("footer-section", Footer);