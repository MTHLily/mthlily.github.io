var workbook;

function Upload(){

    var files = document.getElementById('fileUpload'), f = files[0];
    var reader = new FileReader();

    reader.onload = function( e ){
        var data = new Uint8Array( e.target.result );
        processExcel( data );
    }

    reader.readAsArrayBuffer(fileUpload.files[0]);

}

function processExcel( data ){

    workbook = XLSX.read( data, {
        type: 'array'
    } );

    console.log( workbook.SheetNames );

    var select = document.createElement( 'select' );
    select.className = "custom-select-lg w-100 m-3 justify-content-center";
    select.id = "selectID";

    var nextDiv = document.createElement( 'div' );
    nextDiv.className = 'd-flex';
    nextDiv.id = 'randomInputDiv';

    workbook.SheetNames.forEach(
        ( name ) =>{
            var option = document.createElement( 'option' );
            option.innerHTML = name;
            option.value = name;
            select.appendChild( option );
        });

    select.onchange = () => {
        console.log( document.getElementById('selectID').value );
        randomInput( document.getElementById('selectID').value );
    };

    var options = document.getElementById('furtherOptions');
    options.innerHTML = '';
    options.appendChild( select );
    options.appendChild( nextDiv );

}

function randomInput( worksheetName ){

    var options = document.getElementById('furtherOptions');
    var div = document.getElementById('randomInputDiv');

    div.className = 'd-flex p-3 justify-content-center';
    
    var excelRows = XLSX.utils.sheet_to_row_object_array( workbook.Sheets[ worksheetName ] );

    console.log( excelRows );

    if( isValidRow( excelRows[0] ) ){
        
        div.innerHTML = '';
        console.log( "YES" );

        var input = document.createElement( 'input' );
        input.className = 'form-control'
        input.type = 'number';
        input.max = excelRows.length;
        input.value = 1;
        input.placeholder = 'No. of Students'
        input.min = 1;

        var submitBut = document.createElement( 'button' );
        submitBut.className = 'btn btn-secondary';
        submitBut.innerHTML = 'Get Random Students';
        submitBut.onclick = () =>{ generateStudents( excelRows, input.value ) };

        div.appendChild( input );
        div.appendChild( submitBut );
    }
    else{
        div.innerHTML = "<h1>Not a student sheet</h1>"
    }

    options.appendChild( div );

}

function generateStudents( rows, no ){

    var accepted = [], rejected = [], randomlySelected = [];

    rows.forEach( ( row )=>{
        if( isValidRow( row ) )
            accepted.push( row );
        else
            rejected.push( row );
    } );

    shuffle( accepted );

    for( var x = 0; x < no; x++ )
        randomlySelected.push( accepted.pop() );

    console.log( randomlySelected );

    var tableDiv = document.getElementById( 'dvExcel' );
    var table = document.createElement( 'table' );

    tableDiv.innerHTML = '';

    table.className = 'tbl w-100'

    var header = document.createElement( 'tr' );

    var cell = document.createElement( 'th' );
    cell.innerHTML = 'No.';
    header.appendChild( cell );

    cell = document.createElement( 'th' );
    cell.innerHTML = 'First Name';
    header.appendChild( cell );

    cell = document.createElement( 'th' );
    cell.innerHTML = 'MI';
    header.appendChild( cell );

    cell = document.createElement( 'th' );
    cell.innerHTML = 'Last Name';
    header.appendChild( cell );

    cell = document.createElement( 'th' );
    cell.innerHTML = 'Programme';
    header.appendChild( cell );

    cell = document.createElement( 'th' );
    cell.innerHTML = 'Year Level';
    header.appendChild( cell );

    cell = document.createElement( 'th' );
    cell.innerHTML = 'Section';
    header.appendChild( cell );

    table.appendChild( header );

    randomlySelected.forEach( (selected) =>{
        var row = document.createElement( 'tr' );
        
        cell = document.createElement( 'td' );
        cell.innerHTML = selected.No;
        row.appendChild( cell );

        cell = document.createElement( 'td' );
        cell.innerHTML = selected['First Name'];
        row.appendChild( cell );

        cell = document.createElement( 'td' );
        cell.innerHTML = selected.MI;
        row.appendChild( cell );

        cell = document.createElement( 'td' );
        cell.innerHTML = selected['Last Name'];
        row.appendChild( cell );

        cell = document.createElement( 'td' );
        cell.innerHTML = selected['Programme'];
        row.appendChild( cell );

        cell = document.createElement( 'td' );
        cell.innerHTML = selected['Year Level'];
        row.appendChild( cell );

        cell = document.createElement( 'td' );
        cell.innerHTML = selected['Section'];
        row.appendChild( cell );

        table.appendChild( row );

    });

    tableDiv.appendChild( table );

}

function shuffle(array) {

    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}


function isValidRow(k) {
  var keys = Object.keys(k);

  return keys.includes( 'First Name' ) && keys.includes( 'Last Name') && keys.includes( 'Programme' );

}

$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});