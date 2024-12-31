
    var back= document.querySelector(".popup-background")
    var popForm= document.querySelector(".popup")
    var pbutton= document.getElementById("add")
    var cancel= document.getElementById("cancel")
    var post= document.getElementById("post")
    var container= document.querySelector(".blog-container")
    pbutton.addEventListener("click",function(){
        back.style.display="block"
        popForm.style.display="block"
    })
    cancel.addEventListener("click",function(event){
        back.style.display="none"
        popForm.style.display="none"
        event.preventDefault()
    })

    post.addEventListener("click",function(event){
        var h1= document.getElementById("title").value
        var desc= document.getElementById("desc").value
        var div= document.createElement("div")
        div.setAttribute("class","blog")
        div.innerHTML= `<h1>${h1}</h1>`+desc+`<button onclick="deleteBlog(event)">Delete</button>`
        container.append(div)
        event.preventDefault()
        back.style.display="none"
        popForm.style.display="none"
        document.getElementById("title").value=""
        document.getElementById("desc").value=""
    })

    function deleteBlog(event){
        event.target.parentElement.remove()
    }


