function table()
{
var button = document.getElementById('namta');

var showTables = '';
for (var i=1; i<11; i++)  {
    
    z=i*6;
    showTables += (`<p>${6} X ${i} = ${z}</p>`)
}
var p_tables = document.getElementById('tables').innerHTML = showTables;
}

let i; 

for (i=1; i<=10; i++ ) {
    let x ;
    x=i*6;
    console.log(`${6} X ${i} = ${x}`)
}



