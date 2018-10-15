
$('.deleteMessage').click(function () {
    var id = this.id;
    var jsonString = {
        id: id
    };
    $.ajax({
        type: "POST",
        url: "/deleteMessage",
        data: jsonString,
        success: function (success) {
            alert("Mesaj Kalıcı olarak silindi");
        }
    });
});


$('')

function objectifyForm(formArray) {//serialize data function

    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
      returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
  }


  //ADD NEW PROJECT
  
//$('.saveProject').on('click', function(){
$(document).on('click','.saveProject', function(){
    var project =  objectifyForm($('form').serializeArray())
   
    $.ajax({
        type : "POST",
        url : '/insertProject',
        data : project,
        success : function(response){
            if(response.success){
                $('#addProjectModel').modal('hide');  
                setTimeout(function(){
                    $("#projects").load(location.href + " #projects");
                  }, 1000);
            }           
        }
    })
});

var globalId = 0

$('.updateProject').click(function(){
    var id = this.id
    var jsonString = { id: id };
    globalId = id

    $.ajax({
        type : "GET",
        url : '/updateProject?id=' + id,
        success : function(response){
            if(response.success){
                $("#title").val(response.projectData.title);
                $("#subtitle").val(response.projectData.subtitle);
                $("#description").val(response.projectData.description);
                $("#date").val(response.projectData.date);
            }
        }
    })
});

$('.saveUpdate').click(function(){

    var project = {}
    project.id = globalId
    project.title = $("#title").val()
    project.subtitle = $("#subtitle").val()
    project.description = $("#description").val()
    project.date = $("#date").val()

    
    console.log(project)

    $.ajax({
        type : "POST",
        url : '/updateProject',
        data : {project:project },
        success : function(response){
            
            if (response.success) {
             
                $('#updateProjectModel').modal('hide');  
                    setTimeout(function(){
                        $("#projects").load(location.href + " #projects");
                      }, 1000);
               
            } else {
                alert('Bir Hata oldu')
            }
        }
    })
});

$('.deleteProject').click(function () {
    
    var id = this.id;    
    var jsonString = {id: id };
    $.ajax({
        type: "POST",
        url: "/deleteProject",
        data: jsonString,
        success: function (success) {
            alert("Proje Kalıcı olarak silindi");
            location.reload()
        }
    });
});

// CRUD TEAM
//ADD NEW TEAM MEMBER

$(document).on('click','.saveTeam', function(){
    var team =  objectifyForm($('#teamForm').serializeArray())
    console.log(team)
    $.ajax({
        type : "POST",
        url : '/insertTeam',
        data : {team : team},
        success : function(response){
            debugger
            if(response.success){
                $('#addTeamModel').modal('hide');  
                /*setTimeout(function(){
                    $("#team").load(location.href + " #team");
                  }, 1000);*/
                  location.reload()
            }           
        }
    })
});

//UPDATE TEAM MEMBER
$('.updateTeam').click(function(){
    var id = this.id
    console.log(id)
    var jsonString = { id: id };
    globalId = id

    $.ajax({
        type : "GET",
        url : '/updateTeam?id=' + id,
        success : function(response){
            
            console.log(response)
            if(response.success){
                $("#image").val(response.teamData.image);
                $("#name").val(response.teamData.name);
                $("#surname").val(response.teamData.surname);
                $("#authority").val(response.teamData.authority);
                $("#title").val(response.teamData.title);
                $("#username").val(response.teamData.username);
                $("#password").val(response.teamData.password);
                $("#twitter").val(response.teamData.twitter);
                $("#facebook").val(response.teamData.facebook);
                $("#linkedin").val(response.teamData.linkedin);
            }
        }
    })
});

$('.saveUpdateTeam').click(function(){

    var team = {}
    debugger
    team.id = globalId
    team.image = $("#image").val()
    team.name = $("#name").val()
    team.surname = $("#surname").val()
    team.authority = $("#authority").val()
    team.title = $("#title").val()
    team.username = $("#username").val()
    team.twitter = $("#twitter").val()
    team.facebook = $("#facebook").val()
    team.linkedin = $("#linkedin").val()

    console.log(team)

    $.ajax({
        type : "POST",
        url : '/updateTeam',
        data : {team: team },
        success : function(response){
            
            if (response.success) {
                $('#updateTeamModel').modal('hide');  
                    /*setTimeout(function(){
                        $("#team").load(location.href + " #team");
                      }, 1000);*/
                      location.reload()
            } else {
                alert('Bir Hata oldu')
            }
        }
    })
});

$('.deleteTeam').click(function () {
    
    var id = this.id;    
    var jsonString = {id: id };
    $.ajax({
        type: "POST",
        url: "/deleteTeam",
        data: jsonString,
        success: function (success) {
            alert("takım üyesi Kalıcı olarak silindi");
            //$("#team").load(location.href + " #team");
            location.reload()
        }
    });
});





