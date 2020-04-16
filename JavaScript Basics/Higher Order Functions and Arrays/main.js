//companies array of objects
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  //Array of ages
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //=-=-=-=-=-=-= forEach =-=-=-=-=-=-=
  //Loops through an array

  //Standard for-loop
  for(let i = 0; i < companies.length; i++){
      console.log(companies[i]);
  }

  //forEach
  //Parameter: index, array itself
  companies.forEach(function(company){
    console.log(company.name);
  });

  //=-=-=-=-=-=-= filter =-=-=-=-=-=-=
  //Allows us to filter through an array

  //Standard for-loop - get 21 and over
  let canDrink1 = [];
  for(let i = 0; i < ages.length; i++){
      if(ages[i] >= 21){
        canDrink1.push(ages[i]);
      }
  }

  console.log(canDrink1);

  //filter
  const canDrink2 = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
  });
  console.log(canDrink2);

  //filter - with arrow function
  const canDrink3 = ages.filter(age => age >= 21);
  console.log(canDrink3);

  //filter retail companies
  const retailCompanies1 = companies.filter(function(company){
      if(company.category === 'Retail'){
          return true;
      }
  });
  console.log(retailCompanies1);

  //filter - with arrow function
  const retailCompanies2 = companies.filter(company => company.category === 'Retail');
  console.log(retailCompanies2);

  //filter companies that started in the 80s
  const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1989));
  console.log(eightiesCompanies);

  //filter all companies that lasted at least 10 years
  const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  console.log(lastedTenYears);

  //=-=-=-=-=-=-= map =-=-=-=-=-=-=
  //map returns new arrays

  //Create array of company names
  const companyNames = companies.map(function(company){
    return company.name;
  });
  console.log(companyNames);

  //Create array of company names and operation dates
  const companyNameOperation1 = companies.map(function(company){
      return `${company.name} [${company.start} - ${company.end}]`; 
  });
  console.log(companyNameOperation1);

  //Arrow function version
  const companyNameOperation2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  console.log(companyNameOperation2);

  //Square root of ages
  const agesSquareRoot = ages.map(age => Math.sqrt(age));
  console.log(agesSquareRoot);

  //Square of ages
  const agesSquare = ages.map(age => age * 2);
  console.log(agesSquare);

  //Mapping twice
  const agesPlusMinus = ages.map(age => age + 2)
    .map(age => age - 2);
  console.log(agesPlusMinus);

  //=-=-=-=-=-=-= sort =-=-=-=-=-=-=

  //Sort companies by start year
  const sortedCompanies1 = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1;
    } else {
        return -1;
    }
  });
  console.log(sortedCompanies1);

  //Arrow method
  const sortedCompanies2 = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
  console.log(sortedCompanies2);

  //Sort ages lowest to highest (ascending)
  const sortAgesAscending = ages.sort((a, b) => a - b);
  console.log(sortAgesAscending);

  //Sort ages highest to lowest (descending)
  const sortAgesDescending = ages.sort((a, b) => b - a);
  console.log(sortAgesDescending);

  //=-=-=-=-=-=-= reduce =-=-=-=-=-=-=

  //Sum of all ages - for-loop method
  let ageSum1 = 0;
  for(let i = 0; i < ages.length; i++){
      ageSum1 += ages[i];
  }
  console.log(ageSum1);

  //Sum of all ages
  const ageSum2 = ages.reduce(function(total, age){
    return total + age;
  }, 0);    //total starts at 0
  console.log(ageSum2);

  //Sum of all ages - arrow method
  const ageSum3 = ages.reduce((total, age) => total + age, 0);
  console.log(ageSum3);

  //Get total years for all companies
  //Gets length of time of all companies and adds them together
  const totalYears1 = companies.reduce(function(total, company){
    return total + (company.end - company.start);
  }, 0);
  console.log(totalYears1);

  //Arrow method
  const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0);
  console.log(totalYears2);

  //=-=-=-=-=-=-= Combine Methods =-=-=-=-=-=-=

  const ages2 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const combined = ages2
    .map(age => age * 2)        //new array that holds each age * 2
    .filter(age => age >= 40)   //filter out anything >= 40
    .sort((a, b) => a - b)      //sort in ascending order
    .reduce((a, b) => a + b, 0);    //Add up all ages
    console.log(combined);