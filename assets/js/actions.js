

$(".bar").on("click", function(){

    if ($(".box-links-instruments").css("display") == "none") {
        $(".box-links-instruments").fadeIn(1000);
        $(".box-links-instruments").css({"display":"flex"})
    }else{
        $(".box-links-instruments").fadeOut(500);
    }
    
});

$(".title-controll").on("click", function(){

    const data = $(this).data();
    const el = document.getElementById("box-display-id");
    el.innerHTML = "";

    if (data.category == 'acordes') {
        acordes(el);
        $(".a").fadeIn().css({"display":"flex"});
    }

    
    
});

function acordes(element){

    let oldStatus = [];

    const a = document.createElement("div");
    a.setAttribute("class", "a");

    data.map((item) => {
        const n = document.createElement("div");
        n.setAttribute("class", "n");
        n.setAttribute("id", item);
        n.innerHTML = item;
        n.addEventListener("click", function(){

            oldStatus.map(function (value, index){
                    
                $("#n-"+value).remove();

            });
            // oldStatus = [];
            

            const filter = bd.filter((el) => {
                return el.acorde == item;
            });

            if (filter.length) {

                filter[0].notas.map((value, index) => {
                    
                    const id = value.position;
                    oldStatus.push(id);

                        const nb = document.createElement("div");
                        if (value.pointer == 'boll') {
                            nb.setAttribute("class", "nota-boll");
                        }else{
                            nb.setAttribute("class", "nota-ret");
                        }
                        nb.setAttribute("id", "n-"+id);

                        nb.addEventListener("click", function(){
                        
                            
                        });

                    document.getElementById(id).appendChild(nb);

                });
            }

            const elMain = document.getElementById("main-2-id");
            elMain.scrollLeft = filter[0].scrollEl;

        })
        a.appendChild(n);
    });
    
    element.appendChild(a);
    return true;

}

// $("body").on("click", ".n", function(){
//     alert("Deu certo!");
// });