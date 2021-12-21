name_array=[];
function submit(){
    for (var i=1; i<=4; i++){
        var name_of_the_student=document.getElementById("name_of_the_student_"+i).value;
        name_array.push(name_of_the_student);
        console.log(name_array);
    }
    var length = name_array.length;
    console.log(length);
    var display;
    for (j=0; j<length; j++){
        display.push("<h4>Name - "+name_array[j]+"</h4>");
        console.log(display);
    }
    document.getElementById("display_name_with_commas").innerHTML = display; 
}
