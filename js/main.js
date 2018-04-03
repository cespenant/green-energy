
    // Load your images on page-load
    function preloader() {
        const imagesList = [
           "./img/bike-1.jpg",
			"./img/mast-1.jpg",
			"./img/mast-2.jpg"
        ];

        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };   


    window.addEventListener("load", preloader);
    
     
    const buttons = document.querySelectorAll(".buttons button");
    const article = document.querySelector("article");


     let topics = {

     	air: {
     		headingContent: 'Solar Air Heating',
	    	bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices, magna eget placerat dignissim, tellus lorem auctor sapien, vitae porttitor neque odio non lectus. Pellentesque et nisi turpis. Quisque in imperdiet odio. Curabitur interdum dictum augue auctor commodo. Integer at pulvinar nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec augue nisi, ultrices eget ligula sit amet, elementum rhoncus odio. Nulla fringilla rutrum elit. Ut massa dolor, consectetur quis fringilla id, interdum nec dui. Vivamus eleifend, eros ut aliquet volutpat, urna risus accumsan ligula, at ullamcorper massa quam ac metus. Aliquam eu euismod lectus, eget auctor turpis.',
	    	imgUrl: 'img/bike-1.jpg',
	    	imgAlt: 'bike'
     	},
     	water: {
     		headingContent: 'Water',
	    	bodyText : 'Proin at metus hendrerit, vulputate libero ac, maximus dolor. Ut luctus justo nulla, in maximus sapien viverra ut. Maecenas lacinia nulla eget ullamcorper cursus. Quisque vitae nulla augue. Aenean pharetra sagittis felis in tincidunt. In a interdum arcu. Nam arcu nisi, sagittis vitae urna sed, feugiat eleifend nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras vel tortor leo. Ut in elementum nibh. Proin aliquet porta neque, a viverra nulla pretium congue. Praesent commodo lacus hendrerit ullamcorper ultricies. Nam maximus maximus dignissim. Morbi ligula ante, dictum eu orci eget, mattis finibus ipsum.',
	    	imgUrl : 'img/mast-1.jpg',
	    	imgAlt : 'bike'
     	},
     	energy: {
	     	headingContent : 'Energy',
	    	bodyText : 'Proin pretium est et lectus dignissim, a elementum leo fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum imperdiet, arcu non fringilla pharetra, quam risus mattis massa, quis eleifend metus justo quis diam. Donec at nulla nec tortor congue pellentesque eget vitae nibh. Duis sit amet auctor ligula. Quisque a pretium ante. Mauris tristique augue mauris, nec aliquet purus lobortis non. Nunc quis dolor aliquam, consequat augue non, tempus felis. Duis nibh enim, posuere at pulvinar in, porttitor ut neque. Nullam at egestas est.',
	    	imgUrl : 'img/mast-2.jpg',
	    	imgAlt : 'bike'
     	}

     };

    function handleSelection(ev) {

    
    	for (let i = 0; i < buttons.length; i++) {

	 		if(buttons[i].hasAttribute("id")) {
	 			buttons[i].removeAttribute("id");
	 		}

        	let clickedBtn = ev.target;
        	clickedBtn.setAttribute("id", "active");
            let key = clickedBtn.getAttribute("data-content");
            
            article.innerHTML = "";


	 	     article.innerHTML = `<h2>${topics[key].headingContent}</h2><img src="${topics[key].imgUrl}" alt="${topics[key].imgAlt}"><p>${topics[key].bodyText}</p>`; 

	   }
    }

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleSelection);
}

     
