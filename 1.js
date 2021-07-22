var nut = document.querySelectorAll(".button .btn");
var khoi = document.querySelector(".khoi");
console.log(khoi);
for(var i = 0; i< nut.length;i++)
{
    nut[i].addEventListener("click",function(){
        var show = this;
        for(var vitri = 0;show = show.previousElementSibling;vitri++)
        {
            //console.log("ban da click"+vitri);
        }
        /* khoi.classList.remove("so"+vitri);   */
        /* khoi[vitri].classList.add("so"+vitri); */
        for(var a = 0;a<nut.length;a++)
        {
            khoi.classList.remove("so"+a);
        }
        khoi.classList.add("so"+vitri);

    })
}