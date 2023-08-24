var btnConvert=btnGetMsg=document.querySelectorAll('.convert-btn') 
const arr = Array.from(btnConvert);
const modal=document.getElementById('modal')



toggleModal=()=>{
    modal.classList.toggle('show')
}

arr.map((el)=>{
    el.addEventListener('click',(event)=>{
        event.preventDefault()
        console.log('msg')

        return toggleModal()
        
    })
})


 