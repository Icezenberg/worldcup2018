

    $(document).ready(function() {
        var equipes = [];

        //recupere les equipes
        services("equipes", function (data) {
            equipes = data;
            //console.log(equipes[5].flag);
        })


        $.ajax({
            type: 'GET',
            url: 'http://localhost:4002/get_joueurs',
            success: function (listeJoueurs) {
                for (var i = 0; i < listeJoueurs.joueurs.length; i++) {
                    //recupere les joueurs
                    var player = "";
                   
                     if(listeJoueurs.joueurs[i] === 1){
                        player = joueurs.nomJoueur + joueurs.id_equipe;
                     }

                    $('#liste_joueurs').append('<li class="list-group-item"><h4>' + listeJoueurs.joueurs[i].nomJoueur + '</h4> ' +  '<img class="player_flag" src="'+equipes[listeJoueurs.joueurs[i].id_equipe].flag+'" /></li>');
                };
                
            },
            error: function (resultat, statut, erreur) {
    
                alert('ERROR 404');
            }
        });
    });  

