var workbook;
var warning = [ "GUE", "MANZANARES", "BALILI", "AMPOLOQUIO", "CALUNSAG", "MARCELO", "GEREZ", "ESTOQUE", "CATOR", "SOLIMAN", "GREGORIO", "CUTIN", "PEÑA", "LIKIT", "ICAO", "BRAGA", "LURICA", "DEJITO", "CLAUDIO", "CASTILLO", "SALDAÑA", "TADIQUE", "YACAPIN", "MANUEL", "RACHMAN", "UCAB", "ESPERA", "MANLANGIT", "ARGUELLES", "GUMAHIN", "ELOY", "RELLOSO", "MATCHON", "VILLACAMPA", "TAPING", "SINGH" ];

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
        document.getElementById( 'dvExcel').innerHTML = '';
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

        var checkboxDiv = document.createElement( 'div' );
        checkboxDiv.className = 'w-50 p-1';
        checkboxDiv.innerHTML += '<div>Years to Include</div>';

        for( var y = 1; y <= 5; y++ ){

            var yearCheckboxes = document.createElement( 'div' );
            yearCheckboxes.className = 'form-check-inline';

            var label = document.createElement( 'label' );
            label.className = 'form-check-label pr-1 pl-1';

            var checkbox = document.createElement( 'input' );
            checkbox.type = 'checkbox';
            checkbox.className = 'form-check-input';
            checkbox.setAttribute( 'checked', true );
            checkbox.name = 'yearCheck';
            checkbox.value = y;

            label.appendChild( checkbox );
            label.innerHTML += ' ' + y;

            yearCheckboxes.appendChild( label );
            checkboxDiv.appendChild( yearCheckboxes );

        }

        div.appendChild( input );
        div.appendChild( checkboxDiv );
        div.appendChild( submitBut );

        console.log( document.getElementsByName('yearCheck') );
    }
    else{
        div.innerHTML = "<h1>Not a student sheet</h1>"
    }

    options.appendChild( div );

}

function generateStudents( rows, no ){

    var accepted = [], rejected = [], randomlySelected = [], years = [];

    document.getElementsByName( 'yearCheck' ).forEach( ( check )=>{
        if( check.checked == true )
            years.push( parseInt(check.value) );
    });

    rows.forEach( ( row )=>{
        if( studentFilter( row, years ) )
            accepted.push( row );
        else
            rejected.push( row );
    } );

    console.log("REJECTED");
    console.log( rejected );
    console.log( "END REJECTED" );


    var tableDiv = document.getElementById( 'dvExcel' );
    tableDiv.innerHTML = '';

    if( accepted.length == 0 ){
        tableDiv.innerHTML = '<h1>No Student matches your filter</h1>'
        return;
    }

    shuffle( accepted );

    if( no > accepted.length ){
        tableDiv.innerHTML = '<h3>Needed students greater than students available. Only have ' + accepted.length + ' students</h3>';
        for( var x = 0; x < accepted.length; x++ )
            randomlySelected.push( accepted.pop() );
    }
    else{
        for( var x = 0; x < no; x++ )
            randomlySelected.push( accepted.pop() );
    }

    console.log( randomlySelected );

    var table = document.createElement( 'table' );


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

        if( warning.includes(selected['Last Name'] ) ){
            row.style = "background: yellow;";
        }
        
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

    if( k['Last Name'] == 'TAPING' )
        console.log( "TAPING WAS HERE" );

  return keys.includes( 'First Name' ) && keys.includes( 'Last Name') && keys.includes( 'Programme' );

}

function studentFilter( row, years ){
    return years.includes( row['Year Level'] ) && isValidRow(row);
}

$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});