    // // Create the new main div element
    // var container_div= document.createElement("div");
    // container_div.setAttribute("class","container");

    // //Create the new div with rows class
    // var row=document.createElement("div");
    // row.setAttribute("class","row");

    // var cols=document.createElement("div");
    // cols.setAttribute("class","col-lg-4  col-sm-12");

    // //  Create the card div with Bootstrap classes
    // var card= document.createElement("div");
    // // card.setAttribute("class","card mt-2"); either 
    // card.classList.add('card', 'mt-2');

    // // Create the card header div
    // var card_header=document.createElement("div");
    // // card_header.setAttribute("class","card-header  d-flex justify-content-center"); either
    // card_header.classList.add('card-header', 'd-flex', 'justify-content-center');
    // card_header.textContent="Featuread";

    // // To create the Card body 
    // var card_body=document.createElement("div");
    // card_body.setAttribute("class","card-body");

    // // Card title with inside imge tag to center the  image
    // var card_title = document.createElement("h5");
    // card_title.setAttribute("class","card-title");

    // var image= document.createElement('img');
    // // Set attributes for the image
    // image.src = 'cal_1.jpg';  // Set the path to your image
    // image.alt = 'flag';
    // image.setAttribute("class","image");
    // card_title.appendChild(image);

    // // Create the paragraph tag
    // var p= document.createElement('p');
    // p.setAttribute("class","card-text");
    // p.innerHTML="Capital:<br>Region:<br>Country Code:<br>";

    // // Create the button div with a link button
    // var button_div= document.createElement("div");
    // button_div.id = 'button';

    // // To create link tag
    // var linkButton = document.createElement('a');
    // linkButton.href = '#';
    // linkButton.classList.add('btn');
    // linkButton.innerText="Wheather";
    // button_div.appendChild(linkButton);

    // // Appending Nested elements from inside to outside (or) Append elements to build the hierarchy
    // card_body.appendChild(card_title);
    // card_body.appendChild(p);
    // card_body.appendChild(button_div);

    // card.appendChild(card_header);
    // card.appendChild(card_body);

    // cols.appendChild(card);
    // row.appendChild(cols);
    // container_div.append(row);

    // //  Append the main container to the body of the document
    // document.body.append(container_div);




// to create multiple no of nested divs using loop

    // Specify the number of nested divs you want
    const numberOfDivs = 10;

    // Get the parent container where you want to append the nested divs
    let parentContainer = document.body; // You can replace this with the actual container element you want

    var container_div= document.createElement("div");
    container_div.setAttribute("class","container");

    // Create the new div with rows class
    var row=document.createElement("div");
    row.setAttribute("class","row");

    // Loop to create and append nested divs
    for (let i = 0; i < numberOfDivs; i++) {
    
    var cols=document.createElement("div");
    cols.setAttribute("class","col-lg-4  col-sm-12");

    // Create the card div with Bootstrap classes
    var card= document.createElement("div");
    // card.setAttribute("class","card mt-2"); either 
    card.classList.add('card', 'mt-2');

    //  Create the card header div
    var card_header=document.createElement("div");
    // card_header.setAttribute("class","card-header  d-flex justify-content-center"); either
    card_header.classList.add('card-header', 'd-flex', 'justify-content-center');
    card_header.textContent="Featuread";

    // To create the Card body 
    var card_body=document.createElement("div");
    card_body.setAttribute("class","card-body");

    // Card title with inside imge tag to center the  image
    var card_title = document.createElement("h5");
    card_title.setAttribute("class","card-title");

    var image= document.createElement('img');
    // Set attributes for the image
    image.src = 'cal_1.jpg';  // Set the path to your image
    image.alt = 'flag';
    image.setAttribute("class","image");
    card_title.appendChild(image);

    // Create the paragraph tag
    var p= document.createElement('p');
    p.setAttribute("class","card-text");
    p.innerHTML="Capital:<br>Region:<br>Country Code:<br>";

    // Create the button div with a link button
    var button_div= document.createElement("div");
    button_div.id = 'button';

    // To create link tag
    var linkButton = document.createElement('a');
    linkButton.href = '#';
    linkButton.classList.add('btn');
    linkButton.innerText="Wheather";
    button_div.appendChild(linkButton);

    // Appending Nested elements from inside to outside (or) Append elements to build the hierarchy
    card_body.appendChild(card_title);
    card_body.appendChild(p);
    card_body.appendChild(button_div);

    card.appendChild(card_header);
    card.appendChild(card_body);

    cols.appendChild(card);
    row.appendChild(cols);
    container_div.append(row);

    //  Append the main container to the body of the document
    document.body.append(container_div);
    parentContainer=container_div;

      // Update the parent container reference for the next iteration
    //   parentContainer = newDiv;
    }

