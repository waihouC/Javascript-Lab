async function loadData() {
    const response = await axios.get('data/db.json');
    return response.data.yearly;
}

async function loadMeteors() {
    const response = await axios.get('data/meteors.json');
    return response.data;
}

async function loadSightings() {
    const response = await axios.get('data/sightings.json');
    return response.data;
}

async function loadCSVData(url) {
    let response = await axios.get(url);
    // csv object is available from csvtojson package
    let json = await csv().fromString(response.data);
    return transformData(json);
}

function transformData(rawData) {
    const transformedData = {
        totalBirthsByYear: [],
        totalDeathsByYear: [],
        birthsForChinese: [],
        birthsForMalays: [],
        birthsForIndians: [],
        birthsForOthers: [],
    };
    
    // transform into x and y
    // for (let row of rawData) {
    //     const year = parseInt(row.year);
    //     const births = parseInt(row.live_births);
    //     const deaths = parseInt(row.deaths);
        
    //     if (transformedData.totalBirthsByYear[year]) {
    //         transformedData.totalBirthsByYear[year] += births;
    //     }
    //     else {
    //         transformedData.totalBirthsByYear[year] = births;
    //     }

    //     if (transformedData.totalDeathsByYear[year]) {
    //         transformedData.totalDeathsByYear[year] += deaths;
    //     }
    //     else {
    //         transformedData.totalDeathsByYear[year] = deaths;
    //     }
    // }

    // mapping & filtering
    // Option 1:
    // transformedData.birthsForChinese = filterByEthnicityAndMap(rawData, "Chinese");
    // transformedData.birthsForMalays = filterByEthnicityAndMap(rawData, "Malays");
    // transformedData.birthsForIndians = filterByEthnicityAndMap(rawData, "Indians");
    // transformedData.birthsForOthers = filterByEthnicityAndMap(rawData, "Others");
    
    // Option 2:
    console.log(groupBy(rawData, "ethnic_group"));
    const groupByEthnicity = groupBy(rawData, "ethnic_group");
    transformedData.birthsForChinese = mapObjectToYearAndBirthRate(groupByEthnicity["Chinese"]);
    transformedData.birthsForMalays = mapObjectToYearAndBirthRate(groupByEthnicity["Malays"]);
    transformedData.birthsForIndians = mapObjectToYearAndBirthRate(groupByEthnicity["Indians"]);
    transformedData.birthsForOthers = mapObjectToYearAndBirthRate(groupByEthnicity["Others"]);

    const groupByYear = groupBy(rawData, "year");
    transformedData.totalBirthsByYear = Object.values(groupByYear).map(function(group) {
        return {
            x: parseInt(group[0].year),
            y: group.reduce((acc, datanum) => acc + parseInt(datanum.live_births), 0)
        };
    });
    transformedData.totalDeathsByYear = Object.values(groupByYear).map(function(group) {
        return {
            x: parseInt(group[0].year),
            y: group.reduce((acc, datanum) => acc + parseInt(datanum.deaths), 0)
        };
    });

    console.log(groupByYear);
    console.log(transformedData);
    return transformedData;
}

function filterByEthnicityAndMap(rawData, ethnicity) {
    return rawData.filter(row => {
        return row.ethnic_group == ethnicity;
    }).map(row => {
        return {
            x: parseInt(row.year),
            y: parseInt(row.live_births)
        }
    });
}

function mapObjectToYearAndBirthRate(object) {
    return object.map(row => {
        return {
            x: parseInt(row.year),
            y: parseInt(row.live_births)
        }
    });
}

var groupBy = function(data, key) {
    // `data` is an array of objects, `key` is the key (or property accessor) to group by
    // reduce runs this anonymous function on each element of `data` (the `item` parameter,
    // returning the `storage` parameter at the end
    return data.reduce(function(storage, item) {
      // get the first instance of the key by which we're grouping
      var group = item[key];
   
      // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
      storage[group] = storage[group] || [];
   
      // add this item to its group within `storage`
      storage[group].push(item);
   
      // return the updated storage to the reduce function, which will then loop through the next
      return storage;
    }, {}); // {} is the initial value of the storage
};
  
function transformObjectToSeries(object) {
    let series = [];
    for (const[key,value] of Object.entries(object)) {
        series.push({
            'x': key,
            'y': value
        })
    }
    console.log(series);
    return series;
}
