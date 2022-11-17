class WebBanner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .banner {
                    color: white;
                    object-fit: contain;
                    height: 448px;
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }
                
                .banner__contents {
                    margin-left: 30px;
                    padding-top: 140px;
                    height: 190px;
                }
                
                .banner__title {
                    font-size: 3rem;
                    font-weight: 800;
                    padding-bottom: 0.3rem;
                }
                
                .banner__description {
                    width: 45rem;
                    line-height: 1.3;
                    padding-top: 1rem;
                    font-size: 0.8rem;
                    max-width:360px;
                    height:80px;
                }
                
                .banner__button {
                    cursor: pointer;
                    color: white;
                    outline: none;
                    border: none;
                    font-weight: 700;
                    border-radius: 0.2vw;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    margin-right: 1rem;
                    padding-top: 0.5rem;
                    background-color: rgba(51,51,51, 0.5);
                    padding-bottom: 0.5rem;
                }
                
                .banner__button:hover {
                    color: black;
                    background-color: #e6e6e6;
                    transition: all 0.2s;
                }
                
                .banner__fadeBottom {
                    height: 7.4rem;
                    background-image: linear-gradient(
                    180deg,
                    transparent,
                    rgba(37,37,37, 0.61),
                    #111
                    );
                }
            </style>
            <header class="banner">
                <div class="banner__contents">
                    <h1 class="banner__title"></h1>
                    <div class="banner__buttons">
                        <button class="banner__button" type="button">Play</button>
                        <button class="banner__button" type="button">My List</button>
                    </div>
                    <h2 class="banner__description"></h2>
                </div>
                <div class="banner__fadeBottom"></div>
            </header>
        `;
    }

    static get observedAttributes() { // (3)
        return ["banner-title", "banner-description", "img"];
    }

    attributeChangedCallback() {
        const bannerTitle = this.getAttribute('banner-title');
        const bannerDescription = this.getAttribute('banner-description');
        const bgImgUrl = this.getAttribute('img');

        this.shadowRoot.querySelector('header').style.backgroundImage = bgImgUrl;
        this.shadowRoot.querySelector('.banner__title').innerText = bannerTitle;
        this.shadowRoot.querySelector('.banner__description').innerText = bannerDescription;
    }
}

customElements.define('web-banner', WebBanner);