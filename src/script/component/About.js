class About extends HTMLElement{
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
                section{
                    width:80%;
                    margin:4rem auto 10rem auto;
                }

                .line{
                    width:20rem;
                    height:1rem;
                    background-color:black;
                }

                h3{
                    font-size: 4.8rem;
                    margin: 3.6rem 0;
                }

                p{
                    font-size:2.4rem;
                    line-height:1.6;
                    margin: 0;
                }

                .container-content-about{
                    display:flex;
                }

                .about-img{
                    width:50%;
                    padding-right:6rem;
                }

                .about-caption{
                    width:50%;
                    display:flex;
                    justify-content:center;
                }

                img{
                    width:100%;
                }

                @media (max-width: 61.25em) {
                    .container-content-about{
                        display:flex;
                        flex-direction:column;
                        margin:2rem 0;
                    }

                    .about-caption,.about-img{
                        width:100%;
                        margin:2rem 0;
                    }

                    .about-img{
                        padding-right:0;
                    }

                    
                }

                @media (max-width: 28.75em){
                    section{
                        margin-bottom:4rem;
                    }

                    h3 {
                        font-size: 3.6rem;
                    }

                    .line{
                        width:10rem;
                    }
                    
                    p{
                        font-size:2rem;
                    }
                }


                
            </style>
            
            <section>
                <div class="container-title">
                    <div class="line"></div>
                    <h3>About Us</h3>
                </div>
                
                <div class="container-content-about">
                    <div class="about-img">
                        <img src="https://d2w1ef2ao9g8r9.cloudfront.net/images/How-to-open-a-bar.jpg?mtime=20200527150757&focal=none">
                    </div>

                    <div class="about-caption">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </p>
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

customElements.define("about-section", About);