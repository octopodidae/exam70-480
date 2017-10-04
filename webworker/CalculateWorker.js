onmessage = function (evt) {
    var work = 100000000; //evt.data
    var i = 0;
    var a = new Array(work);
    var sum = 0;
    for (i = 0; i < work; i++) {
        a[i] = i * i;
        sum += i * i;
    }
    self.postMessage(sum); // The postMessage() method is used to post a message back to the HTML page.

    /*
    Le contexte d'exécution des scripts importés est toujours l'espace global du worker (donc self).
    L'espace global est l'espace de nom principal qui contient tous les autres espaces de noms qui sont utilisés.

    L'espace global est à l'intérieur du worker, il ne peut pas accéder à l'extérieur et il n'est pas accessible depuis l'extérieur.
    À l'intérieur du worker, on peut y faire référence, non pas avec window, mais grâce à la variable self.
    */
}