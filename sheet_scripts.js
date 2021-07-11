function myFunction() {
  // Logs the values in each cell given a range of cells
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

function myFunction() {
  // gets the last filled cell in a given column and prompts user 4 times for a number using input box and fills the next filled cell with the number.
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastrow  = sheet.getRange("A1").getDataRegion().getNumRows();
  for (let i = 1; i <5; i++){
    var input = Browser.inputBox("Input","Enter a number",Browser.Buttons.OK);
    sheet.getRange(lastrow+i,1).setValue(input);
  };

}
