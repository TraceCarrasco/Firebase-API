/*
 * Creates the initial base reference to the database
 * @param baseReference - "____/..../"
 */ 
function Database(baseReference) {
    this.refString = baseReference + "/";
    this.ref = firebase.database().ref(this.refString);
}

/*
 * Changes the base reference of the database
 * @param newReference - "____/..../"
 */ 
Database.prototype.ChangeReference = function(newReference) {
    this.refString = newReference + "/";
    this.ref = firebase.database().ref(this.refString);
}

/*
 * @return base reference of the database
 */ 
Database.prototype.GetReference = function(newReference) {
    return this.refString;
} 

/*
 * Posts an update to the database given the baseReference
 * @param info - data to be posted to the database
 */ 
Database.prototype.Update = function(info) {
    this.ref.update(info).catch(function (err) {
        console.log("one of the updates failed", err);
    });
}

/*
 * Queries the database
 * @oaram query - data that you are looking to get from the database
 * @param callback - the function that will be executed when the query returns
 */
Database.prototype.Query = function(query, callback) {
    this.ref.on("value", function (snapshot) {
        if (callback == null)
            alert("***ERROR*** No callback function given in Database.Query function call");
        callback(snapshot.val());
    }.bind(callback));
}
