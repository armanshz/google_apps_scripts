function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet()
  var rng = sheet.getDataRange();
  var vals = rng.getValues();
// for each cell in each row, log the cell value.
  vals.forEach(function(row){
    row.forEach(function(cell){
      Logger.log(cell);

    })
  })
}