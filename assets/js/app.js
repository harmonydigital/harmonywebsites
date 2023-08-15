const app = document.getElementById('app')

initapp=()=>{
    app.innerHTML=`
        <header>
            <div class='brand'>Harmony Site</div>
            <video autoplay muted loop id="myVideo">
                <source src="video.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
        </header>

        <main>
        main
        </main>

        <main>
        footer
        </main>
    `
}
app ? initapp() : console.log('err')