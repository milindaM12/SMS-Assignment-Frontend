getAllStudents();
function saveStudent(){

    let name=$('#exampleFormControlInput2').val();
    let address=$('#exampleFormControlInput3').val();
    let number=$('#exampleFormControlInput4').val();

    //console.log(name);
    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/student/saveStudent",
        async:true,
        data:JSON.stringify({
            "stdID":"",
            "stdName":name,
            "stdAddress":address,
            "stdMNumber":number
        }),
        success: function (data){
            alert("saved")
            getAllStudents();
        },
        error: function (xhr, exception){
            alert("Error")
        }
    })
}

function updateStudent(){
    let stdID=$('#exampleFormControlInput1').val();
    let name=$('#exampleFormControlInput2').val();
    let address=$('#exampleFormControlInput3').val();
    let number=$('#exampleFormControlInput4').val();

    //console.log(name);
    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/student/updateStudent",
        async:true,
        data:JSON.stringify({
            "stdID":stdID,
            "stdName":name,
            "stdAddress":address,
            "stdMNumber":number
        }),
        success: function (data){
            alert("updated")
            getAllStudents();
        },
        error: function (xhr, exception){
            alert("Error")
        }
    })
}

function deleteStudent(){
    let stdID=$('#exampleFormControlInput1').val();
    //console.log(name);
    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/api/v1/student/deleteStudent/" + stdID,
        async:true,

        success: function (data){
            alert("Deleted")
            getAllStudents();
        },
        error: function (xhr, exception){
            alert("Error")
        }
    })
}

function getAllStudents(){
    //console.log(name);
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/student/getAllStudents",
        async:true,
        success: function (data){
            if (data.code==="00"){
                $('#stdTable').empty();
                for (let std of data.content){
                    let stdID=std.stdID
                    let name=std.stdName
                    let address=std.stdAddress
                    let number=std.stdMNumber

                    var row=`<tr><td>${stdID}</td><td>${name}</td><td>${address}</td><td>${number}</td></tr>`;
                    $('#stdTable').append(row);
                }
            }
            //alert("Deleted")
            //getAllStudents();
        },
        error: function (xhr, exception){
            alert("Error")
        }
    })
}

$(document).ready(function (){
    $(document).on('click', '#stdTable tr', function (){
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);
    })
})