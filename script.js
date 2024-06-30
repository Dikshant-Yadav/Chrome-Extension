fetch('https://icanhazdadjoke.com/slack')
.then(response => response.json())
.then(data =>{
    const joketext=data.attachments[0].text;
    const txtid=document.getElementById("txtid");
    txtid.innerHTML=joketext;
})
