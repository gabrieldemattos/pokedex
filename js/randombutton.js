function randomPage(array,min){
    const index = Math.floor(Math.random() * (array.length - min + 1)) + min;

        return window.location = array[index];
}