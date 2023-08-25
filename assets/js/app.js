const app = document.getElementById('app')

initapp=()=>{
    app.innerHTML=`
        <header>
            <div class='brand'><a href='index.html'><img class='logo' src='assets/img/beija.png'></a></div>
            <div class='menu'>

                <nav>
                    <ul>
                        <li>
                            <a href='#gallery'>Galeria</a>
                        </li>
                       
                        <li>
                            <a  href='#about'>Sobre</a>
                        </li>
                        <li>
                            <a class='btn primary convert-btn' href="">
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
                            <h2>ative a criatividade, comece algo novo</br>  agora mesmo...</h2>
                            <a class='btn-down' href='#about'>
                                <i class="fa-solid fa-chevron-down"></i>
                            </a>
                        </div>
                        <div class='social'>
                            <a class='' href='https://www.instagram.com/harmonydigitalflow/'  target="_blank">    
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

                <div class='harmonyabout' id='about'>

                    <div class='content-text'>
                       <span class='title'></span>
                       <h2>produtos
                       para pessoas
                       como eu e você.</h2>
                       <a class='btn primary convert-btn' href="">
                       <span>Fale agora</span>
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>

                    <div>
                        <p>Harmony flow é se traduz na relação produto / cliente.</p>
                    </div>
                  
                </div>

               <div class='portfolio'>

                    <div class='text-content'>
                       <h3>Portfólio</h3>
                    </div>

                    <div class='tabs-portfolio'>

                        <div class="tab">
                            <button class="tablinks" onclick="openCity(event, 'London')">Tecnologia</button>
                            <button class="tablinks" onclick="openCity(event, 'Paris')">Social Media</button>
                            
                        </div>

                        <div id="London" class="tabcontent">
                            <h3>Tecnologia</h3>
                            <p>London is the capital city of England.</p>
                        </div>

                        <div id="Paris" class="tabcontent">
                            <h4>Media Social</h4>
                          
                            <div class='slide' id='gallery'>
                            <!-- Swipesr -->
                            <div class="swiper mySwiper"> 
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media.png'></div>
                                    <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media1.png'></div>
                                    <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media2.png'></div>
                                    <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media3.png'></div>
                                    <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media4.png'></div>
                                    
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                        
                    </div>

                    </div>



                
               </div>
        </main>

        <main>
        footer
        </main>
    `
}
app ? initapp() : console.log('err')