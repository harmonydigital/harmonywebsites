const app = document.getElementById('app')

initapp=()=>{
    app.innerHTML=`
        <header>
            <div class='brand'><img class='logo' src='assets/img/beija.png'></div>
            <div class='menu'>menu</div>
            
        </header>

        <main> 
                <div class='display'> 
                        <div class='content-text'>
                            <span>Harmony</span>
                            <h1>Visível, leve e intuitivo.3</h1>
                        </div>
                </div>

                <div class='harmonyabout'>

                    <div class='content-text'>
                       <h2>produtos
                       para pessoas
                       como eu e você</h2>
                    </div>
                    <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 </div>
                
                </div>

                <div class='slide'>
                    <!-- Swiper -->
                    <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img class='logo' src='assets/img/modelo.png'></div>
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