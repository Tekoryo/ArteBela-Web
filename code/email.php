<?php
if(isset($_POST['email'])&& !empty(addslashes(($_POST['email'])))){
$nome = addslashes(($_POST['name']));
$email = addslashes(($_POST['email']));
$mensagem = addslashes(($_POST['mensagem']));

$to = "thiagocoelho.coelho2@gmail.com";
$subject = "Contato - ArtBela Site";
$body = "Nome: ".$nome. "/r/n".
        "Email: ".$email."/r/n".
        "Mensagem: ".$mensagem;
$header="From:contato@artebela.com"."/r/n".
        "Reply-To:".$email."/r/n".
        "X=Mailer:PHP/".phpversion();
        
if(mail($to,$subject,$body,$header)){
    echo("Enviado com sucesso!");
}else{
    echo("Falha ao enviar!");
}
}

?> 