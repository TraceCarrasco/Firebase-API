# Firebase-API
***
Simple API that can be used to connect to a Firebase database and do basic database operations
```javascript
var db = new Database("test");
```
## Documentation

##### Database.Update
___
```javascript
// Basic Update
db.Update({ 
    string : "child" 
});
```
##### Database.Query
___
Queries the database given the current base reference, returns a collection.
```javascript
db.Query("test",function(a) { alert(a); });
```
Returned collection might look something like this:
<br />{
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string: "child"
<br />}
##### Database.GetReference
___
Gets the refence of the current database
```javascript
// returns something like: "baseRef/child/.../"
db.GetReference();
```
##### Database.ChangeReference
___
Changes the base reference of the database, this can be used to create children as well.
```javascript
// Basic change of base reference
db.ChangeReference("newBaseRef");
// Creating a child in the current base reference
var currRef = db.GetReference();
db.ChangeReference(currRef + "child");
```
