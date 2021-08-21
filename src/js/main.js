let element1 = document.getElementsByClassName("left-tab");
let element2 = document.getElementsByClassName("right-tab");
element1[0].onclick = function () {

    element1[0].classList.add("active");
    element2[0].classList.remove("active");


}


element2[0].onclick = function () {
    element2[0].classList.add("active");
    element1[0].classList.remove("active");
}

let counter = 2;

let element3 = document.getElementsByClassName("right-arrow");
element3[0].onclick = function () {

    //  console.log(counter);

    console.log(counter);
    counter++;
    console.log(counter);
    if (counter >= 5) {
        counter = 2;
    }

    if (counter == 2) {
        let text1 = document.getElementsByClassName("text-1");
        let text3 = document.getElementsByClassName("text-3");

        text1[0].classList.remove("nothing");
        text3[0].classList.add("nothing");


    }
    if (counter == 3) {
        let text2 = document.getElementsByClassName("text-2");
        let text1 = document.getElementsByClassName("text-1");

        text2[0].classList.remove("nothing");
        text1[0].classList.add("nothing");


    }
    if (counter == 4) {
        let text3 = document.getElementsByClassName("text-3");
        let text2 = document.getElementsByClassName("text-2");

        text3[0].classList.remove("nothing");
        text2[0].classList.add("nothing");



    }




}


let element4 = document.getElementsByClassName("left-arrow");
element4[0].onclick = function () {

    console.log(counter);
    counter++;
    console.log(counter);
    if (counter >= 5) {
        counter = 2;
    }

    if (counter == 2) {
        let text1 = document.getElementsByClassName("text-1");
        let text3 = document.getElementsByClassName("text-3");
        text1[0].classList.remove("nothing");
        text3[0].classList.add("nothing");

    }
    if (counter == 3) {
        let text2 = document.getElementsByClassName("text-2");
        let text1 = document.getElementsByClassName("text-1");

        text2[0].classList.remove("nothing");
        text1[0].classList.add("nothing");
        //console.log(textArea);

    }
    if (counter == 4) {
        let text3 = document.getElementsByClassName("text-3");
        let text2 = document.getElementsByClassName("text-2");

        text3[0].classList.remove("nothing");
        text2[0].classList.add("nothing");


    }




}