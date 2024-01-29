//I wrote this code

import { catInfo, catType, interests } from './dataArrays';

// Get a cat type object by its ID.
export function getCatTypeById(catTypeId) {
  let category;
  catType.map(data => {
    if (data.id == catTypeId) {
      category = data;
    }
  });
  return category;
}

// Get the name of an interest by its ID.
export function getInterest(interestId) {
  let name;
  interests.map(data => {
    if (data.interestId == interestId) {
      name = data.name;
    }
  });
  return name;
}

// Get the URL of an interest's photo by its ID.
export function getInterestUrl(interestId) {
  let url;
  interests.map(data => {
    if (data.interestId == interestId) {
      url = data.photo_url;
    }
  });
  return url;
}

// Get the name of a cat type by its ID.
export function getCatTypeName(catTypeId) {
  let name;
  catType.map(data => {
    if (data.id == catTypeId) {
      name = data.name;
    }
  });
  return name;
}

// Get an array of cat profiles for a specific cat type.
export function getCatInfo(catTypeId) {
  const catInfoArray = [];
  catInfo.map(data => {
    if (data.catTypeId == catTypeId) {
      catInfoArray.push(data);
    }
  });
  return catInfoArray;
}

//
// Get cat profiles that have a specific interest.
export function getCatInfoByInterest(interestId) {
  const catInfoArray = [];
  catInfo.map(data => {
    data.interests.map(index => {
      if (index[0] == interestId) {
        catInfoArray.push(data);
      }
    });
  });
  return catInfoArray;
}

// Get the number of cat profiles for a specific cat type.
export function getNumberOfCatInfo(catTypeId) {
  let count = 0;
  catInfo.map(data => {
    if (data.catTypeId == catTypeId) {
      count++;
    }
  });
  return count;
}

// Get an array of interests and their corresponding values based on an ID array.
export function getAllInterests(idArray) {
  const interestsArray = [];
  idArray.map(index => {
    interests.map(data => {
      if (data.interestId == index[0]) {
        interestsArray.push([data, index[1]]);
      }
    });
  });
  return interestsArray;
}

// functions for searchs

// Search for cat profiles by interest name.
export function getCatInfoByInterestName(interestName) {
  const nameUpper = interestName.toUpperCase();
  const catInfoArray = [];
  interests.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const catInfo = getCatInfoByInterest(data.interestId);
      const unique = [...new Set(catInfo)];
      unique.map(item => {
        catInfoArray.push(item);
      });
    }z
  });
  const uniqueArray = [...new Set(catInfoArray)];
  return uniqueArray;
}

// Search for cat profiles by cat type name.
export function getCatInfoByCatTypeName(profileName) {
  const nameUpper = profileName.toUpperCase();
  const catInfoArray = [];
  catType.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const catInfo = getCatInfo(data.id); // return a vector of catInfo
      catInfo.map(item => {
        catInfoArray.push(item);
      });
    }
  });
  return catInfoArray;
}

// Search for cat profiles by cat profile name
export function getCatInfoByCatInfoName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const catInfoArray = [];
  catInfo.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      catInfoArray.push(data);
    }
  });
  return catInfoArray;
}


//end of code I wrote