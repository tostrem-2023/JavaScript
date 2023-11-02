var tracysTest = {
    name: "This is a New Book",
    Authors: ["Spencer", "Tracy"],
    PublicationYear: 2023,
    Publisher: "ABC Company",

    "New Title": function (newTitle) {
    this.name = newTitle;
},
    addAuthors: function (newAuthors) {
        // this.Authors[this.Authors.length] = newAuthors;
        this.Authors = newAuthors.length = newAuthors;
    }
};

tracysTest["New Title"]("This is Book Two");

tracysTest.addAuthors = ["Ellie", "Nolan"];
console.log (tracysTest);