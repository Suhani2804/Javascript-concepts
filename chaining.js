//this file contains code of chaining in javascript

const users = [
    {
      firstName: "Anshika",
      lastName: "Agarwal",
      age: "34",
    },
    {
      firstName: "Anshul",
      lastName: "Agarwal",
      age: "56",
    },
    {
      firstName: "Ankit",
      lastName: "Agarwal",
      age: "21",
    },
    {
      firstName: "Ankita",
      lastName: "Agarwal",
      age: "54",
    },
  ];
  
  // Print firstnames of users whose age is greater than 30
  
  // const filteredUsers = users.filter(function (user) {
  //   return user.age > 30;
  // });
  
  // const firstNames = filteredUsers.map(function (user) {
  //   return user.firstName + " " + user.lastName;
  // });
  
  const filteredUsers = users
    .filter(function (user) {
      return user.age > 30;
    })
    .map(function (user) {
      return user.firstName;
    });
  console.log(filteredUsers);