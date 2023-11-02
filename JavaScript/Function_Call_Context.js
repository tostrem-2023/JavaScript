function foo () {
    console.log(this);
}
foo();

var Tracy = {
    Name: "Tracy",
    getName: function() {
        console.log(this);
        return this.Name;
    }
};
console.log(Tracy.getName() );

var getName = Tracy.getName;
getName();