document.getElementById("contact-form").addEventListener("submit",async function(e){
 e.preventDefault();
 const formData=new FormData(this),status=document.getElementById("status"),button=this.querySelector("button");
 button.disabled=true;button.textContent="Enviando...";status.textContent="";
 try{
  const response=await fetch("https://formsubmit.co/192439f470eacd2fa215c00f22197222",{method:"POST",body:formData});
  if(response.ok){status.textContent="Mensagem enviada com sucesso!";status.style.color="#55d68a";this.reset()}
  else{status.textContent="Erro ao enviar a mensagem.";status.style.color="#ff6b6b"}
 }catch(error){status.textContent="Falha na conexão. Tente novamente.";status.style.color="#ff6b6b"}
 finally{button.disabled=false;button.textContent="Enviar mensagem"}
});
