//TOP NAVIGATION
function NavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
    }
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("roll_back").style.display = "flex";
    } else {
    document.getElementById("navbar").style.top = "-100px";
    document.getElementById("roll_back").style.display = "none";
    }
    }
    

    // carosel

    (function() {

        function init(item) {
            var items = item.querySelectorAll('li'),
            current = 0,
            autoUpdate = true,
            timeTrans = 4000;
                      
            items[current].className = "current";
    
            var navigate = function(dir) {
                items[current].className = "";
    
                if (dir === 'right') {
                    current = current < items.length-1 ? current + 1 : 0;
                } else {
                    current = current > 0 ? current - 1 : items.length-1;
                }
    
                var	nextCurrent = current < items.length-1 ? current + 1 : 0,
                    prevCurrent = current > 0 ? current - 1 : items.length-1;
    
                items[current].className = "current";
            }
     
            setInterval(function() {
                if (autoUpdate) navigate('right');
            },timeTrans);
     
        };
    
        [].slice.call(document.querySelectorAll('.cd-slider')).forEach( function(item) {
            init(item);
        });
    
    })();


    //carosel product

    let span = document.getElementsByClassName('span-icon');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}
    //hard
    function wishList(){
        var list = document.getElementById("toast");
      list.classList.add("show");
      list.innerHTML = '<i class="far fa-heart wish"></i> Product added to List';
      setTimeout(function(){
        list.classList.remove("show");
      },3000);
    }
    