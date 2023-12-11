
    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      const currentYear = 2024;
      const numAgeNineteen = people.some(person => (currentYear - person.year) >= 19)

      console.log(`Expected Result: true. Actual Result: `,numAgeNineteen)

      // Array.prototype.every() // is everyone 19 or older?
       const overNineteen = people.every(person => (currentYear - person.year) >= 19);

       console.log(`Expected result: false. Actual Result: `,overNineteen);

      // Array.prototype.find()
      // find the comment object with the ID of 823423
      
        const idComment = comments.find(e => e.id === 823423);
        console.log(idComment)

      // Array.prototype.findIndex()
      // Find the index of the previous comment ID
      const idIndex = comments.findIndex((e) => e.id === 823423);
      console.log(`Index should be 1: result: `,idIndex);
      
