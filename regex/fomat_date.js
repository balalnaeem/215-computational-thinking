let formatDate = dateString => {
  return dateString.replace(/(\d{4})([-/])(\d{2})\2(\d{2})/, '$4.$3.$1');
}

console.log(formatDate('2016-06-17'));