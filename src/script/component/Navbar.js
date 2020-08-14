class NavBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    /**
     * Render Component
     */
    render(drinks) {
        this._shadowRoot.innerHTML = `
            <style>
                .container{
                    position:fixed;
                    width:100%;
                    margin: 0 auto;
                    z-index:9999;
                    transition: background-color 0.5s ease-out;
                    background-color:transparent;
                }

                nav{
                    font-size:2.4rem;
                    color:black;
                    width:80%;
                    display:flex;
                    margin: 0 auto;
                    justify-content:space-between;
                    padding:2rem;
                }
            
                .active{

                }

                .circle{
                    width:100%;
                    height:100vh;
                    background: #b9d8db;
                    position:absolute;
                    z-index:-2;
                    clip-path: circle(71% at 50% -50%);
                }
                
                .logo{
                    cursor:pointer;
                }

                ul{
                    margin:0;
                    padding:0;
                }

                ul li{
                    display:inline;
                    padding: 0 0 0 2rem;
                }

                .responsive-navbar{
                    display:none;
                }

                .icon-navbar{
                    display:none;
                }

                @media (max-width: 75em) {
                    .circle{
                        clip-path: circle(70% at 50% -40%);
                    }

                }

                @media (max-width: 61.25em) {
                    ul{
                        display:none;
                    }
                    
                    .circle{
                        clip-path: circle(70% at 50% -10%);
                    }

                    .icon-navbar{
                        width: 3rem;
                        height: 2rem;
                        display: flex;
                        flex-direction:column;
                        justify-content:space-between;
                        z-index:200;
                    }

                    .icon-navbar span{
                        width: 100%;
                        height: 2px;
                        background-color:black;
                        transition: all 0.5s ease-in-out;
                    }

                    .first-bar{
                        transform: translateY(0.8rem) rotate(-45deg) ;
                    }
                    
                    .second-bar{
                        opacity:0;
                        transform: translateX(2rem);
                    }

                    .third-bar{
                        transform: translateY(-0.8rem) rotate(-135deg) ;
                    }
                    
                    .responsive-navbar{
                        display:block;
                        position:fixed;
                        width:100%;
                        top:0;
                        right:-100%;
                        height:100vh;
                        background-color:white;
                        z-index:-1;
                        transition: 0.4s ease-in-out;
                    }
                    
                    .responsive-navbar>ul{
                        margin-top:2.4rem;
                        width:100%;
                        display:block;
                        position:absolute;
                        top:50%;
                        transform:translateY(-50%);
                    }

                    .responsive-navbar>ul li{
                        text-align:center;
                        width:70%;
                        margin:0 auto 4rem auto;
                        padding:1.8rem;
                        display:block;
                        background-color:#b9d8db;
                        position:relative;
                    }

                    .responsive-navbar>ul li a{
                        font-size:3.2rem;
                        text-decoration:none;
                        color:black;
                    }

                    .open{
                        opacity:1;
                        right:0%;
                    }

                    .container-list{
                        width:100%;
                        position:relative;
                    }

                    .image-home,.image-contact,.image-drinks,.image-about{
                        position:absolute;
                        z-index:999;
                    }

                    .container-list:hover .image-home,.container-list:hover .image-drinks{
                        animation-name: shake1;
                        animation-duration: 0.5s;
                        animation-iteration-count:infinite;
                    }

                    .container-list:hover .image-about,.container-list:hover .image-contact{
                        animation-name: shake2;
                        animation-duration: 0.5s;
                        animation-iteration-count:infinite;
                    }

                    .image-home , .image-drinks{
                        right:10%;
                        transform: translateY(-2rem) rotate(45deg);
                    }

                    .image-about,.image-contact{
                        left:10%;
                        transform:translateY(-2rem) rotate(-45deg);
                    }
                }

                @keyframes shake1 {
                    0%   {transform:translateY(-2rem) rotate(45deg)}
                    25%  {transform:translateY(-2rem) rotate(35deg)}
                    50%  {transform:translateY(-2rem) rotate(50deg)}
                    100% {transform:translateY(-2rem) rotate(45deg)}
                }

                @keyframes shake2 {
                    0%   {transform:translateY(-2rem) rotate(-45deg)}
                    25%  {transform:translateY(-2rem) rotate(-35deg)}
                    50%  {transform:translateY(-2rem) rotate(-50deg)}
                    100% {transform:translateY(-2rem) rotate(-45deg)}
                }

                @media (max-width: 28.75em) {
                    .image-home,.image-drinks{
                        right:0%;
                    }

                    .image-about,.image-contact{
                        left:0%;
                    }
                }
            </style>
            
            <div class="circle"></div>
            
            <div class="container">
                <nav>
                    <div class="logo">
                        Drinks
                    </div>

                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Drinks</li>
                        <li>Contact</li>
                    </ul>

                    <div class="responsive-navbar">
                            <ul>
                                <div class="container-list">
                                    <div class="image-home ">
                                        <img src="https://www.thecocktaildb.com/images/ingredients/${drinks[0]}-small.png" alt="Girl in a jacket">
                                    </div>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                </div>

                                <div class="container-list">
                                    <div class="image-about ">
                                        <img src="https://www.thecocktaildb.com/images/ingredients/${drinks[1]}-small.png" alt="Girl in a jacket">
                                    </div>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                </div>

                                <div class="container-list">
                                    <div class="image-drinks ">
                                        <img src="https://www.thecocktaildb.com/images/ingredients/${drinks[2]}-small.png" alt="Girl in a jacket">
                                    </div>
                                    <li>
                                        <a href="#">Drinks</a>
                                    </li>
                                </div>

                                <div class="container-list">
                                    <div class="image-contact ">
                                        <img src="https://www.thecocktaildb.com/images/ingredients/${drinks[3]}-small.png" alt="Girl in a jacket">
                                    </div>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </div>

                            </ul>
                    </div>
                    
                    <div class="icon-navbar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>      
        `;

        const icon = this._shadowRoot.querySelector(".icon-navbar");
        const barIcon = Array.from(this._shadowRoot.querySelectorAll(".icon-navbar span"));
        const classBar = ["first-bar","second-bar","third-bar"];
        const responsiveNavbar = this._shadowRoot.querySelector(".responsive-navbar");
        const containerNavbar = this._shadowRoot.querySelector(".container");

        icon.addEventListener("click", () => {
            responsiveNavbar.classList.toggle("open");
            barIcon.forEach((elm,idx)=>{
                elm.classList.toggle(classBar[idx])
            })
        });

        

        window.onscroll = (ev) => {
            if(window.scrollY  > 400){
                containerNavbar.style.backgroundColor = "white";
            }
            else{
                containerNavbar.style.backgroundColor = "transparent";
            }
        };

        
    }

    /**
     * Will be called
     * when the element is created
     */
    connectedCallback() {
        this.render(["Tequila","applejack","vodka","Amaretto"])
    }
}

customElements.define("navigation-bar", NavBar);