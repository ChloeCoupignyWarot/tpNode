$(document).ready(function(){
	console.log( "element" );
	$("#req_get").on('click', function(){
		$.ajax({
			url : 'http://localhost/seance5/index.php?variable=valeur',
			type : 'GET',
			dataType: 'json',
			success : function(result){ // success est toujours en place, bien sûr !
			   console.log(result.resultat);
			   console.log(result);
			   
			   $( "body" ).append( "<h1>"+result["resultat"]+"</h1>" );
			},
			error : function(resultat, statut, erreur){

			}

		});
	})
	
	$("#req_post").on('click', function(){
		console.log($("#post_txt").val());
		$.ajax({
			url : 'http://localhost/seance5/index2.php',
			type : 'POST',
			dataType: 'JSON',
			data : {variable: $("#post_txt").val()},
			success : function(result){ // success est toujours en place, bien sûr !
			   console.log(result.resultat);
			   console.log(result);
			   
			   $( "body" ).append( "<h1>"+result["resultat"]+"</h1>" );
			},
			error : function(resultat, statut, erreur){

			}

		});
	})
	
	
})