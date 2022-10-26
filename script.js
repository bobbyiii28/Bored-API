const btn = document.querySelector('.btn')


btn.addEventListener('click',() =>{
    
    fetch('https://www.boredapi.com/api/activity')
    .then((response)=> response.json())

    .then((data)=>{
        console.log(data)
        document.querySelector('.activity').textContent = data.activity
    })

    

    

})


