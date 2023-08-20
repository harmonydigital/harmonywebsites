const app = document.getElementById('app')

initapp=()=>{
    app.innerHTML=`
        <header>
            <div class='brand'><img class='logo' src='assets/img/beija.png'></div>
            <div class='menu'>

                <nav>
                    <ul>
                        <li>
                            <a href='#'>Galeria</a>
                        </li>
                       
                        <li>
                            <a href='#'>Sobre</a>
                        </li>
                        <li>
                            <a class='btn primary' href="">
                                <span>Fale agora</span>
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a class='btn inline' href="https://github.com/harmonydigital/harmonywebsites" target='_blank'>
                                <span>v1.0</span>
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </header>

        <main> 
                <div class='display'> 
                        <div class='content-text'>
                            <span class='title'>Harmony</span>
                            <h1>Visível, leve e intuitivo.</h1>
                            <h2>ative a criatividade e comece algo novo  agora mesmo...</h2>
                            <a class='btn-down' href=''>
                                <i class="fa-solid fa-chevron-down"></i>
                            </a>
                        </div>
                        <div class='social'>
                            <a class='' href="">    
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            
                            <a class='' href="https://www.linkedin.com/in/harmony-digital/" target="_blank">
                              <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a class='' href="https://github.com/harmonydigital" target="_blank" > 
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </div>


                </div>

                <div class='harmonyabout'>

                    <div class='content-text'>
                       <span class='title'></span>
                       <h2>produtos
                       para pessoas
                       como eu e você.</h2>
                    </div>

                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</br></br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                  
                </div>

                <div class='slide'>
                    <!-- Swipesr -->
                    <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img class='logo' src='assets/img/modelo.png'></div>
                        <div class="swiper-slide"><img class='logo' src='assets/img/modelo2.png'></div>
                        <div class="swiper-slide"><img class='logo' src='assets/img/modelo1.png'></div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                        <div class="swiper-slide">Slide 4</div>
                        <div class="swiper-slide">Slide 5</div>
                        <div class="swiper-slide">Slide 6</div>
                        <div class="swiper-slide">Slide 7</div>
                        <div class="swiper-slide">Slide 8</div>
                        <div class="swiper-slide">Slide 9</div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                </div>
        </main>

        <main>
        footer
        </main>
    `
}
app ? initapp() : console.log('err')