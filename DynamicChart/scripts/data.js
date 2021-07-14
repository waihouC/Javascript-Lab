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

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

async function loadData() {
    const response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/bigger-sales.json');
    return response.data;
}

function transformData(data, year, country) {
    // step 1: convert the completed_at property from string to Date data type
    let transformed = data.map(function(datnum) {
      return {
        ...datnum,
        completed_at: new Date(datnum.completed_at)
      };
    });
    // step 2: filter and keep those records that matches the year and country
    let filtered = transformed.filter(function(datnum) {
      return (
        datnum.completed_at.getFullYear() == year &&
        (datnum.customer.country.toLowerCase().includes(country.toLowerCase()) ||
          country == "")
      );
    });
    // step 3: extract out only the amount and the month
    let earnings = filtered.map(function(datnum) {
      return {
        amount: parseInt(datnum.payment.amount),
        month: datnum.completed_at.getMonth()
      };
    });
   
    // step 4: group by months
    let groups = groupBy(earnings, "month");
   
    // step 5: convert into series
    let series = [];
    for (let month in groups) {
      let group = groups[month];
      series.push({
        x: monthNames[month],
        y: group.reduce((acc, datanum) => acc + datanum.amount, 0)
      });
    }
    return series;
}
  