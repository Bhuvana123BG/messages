let messages = [
    "Oleeeeeeeeeeeeeeeee",
    "Bhuvana",
    "Hareesh",
    "Bhavani",
    "Harinath",
    "Betaa",
    "Krishna",
    "Nanna",
    "Bujji",
    "Kanna",
    "Bangaram",
    "Bujji konda",
    "Bangaru konda",
    "Andhiii",
    "Kukkka",
    "Katheeee",
    "Figure math karoo",
    "Thalo purugulu thiruguthhunnay",
    "Kadupulo bayam vesthundhi",
    "Yamo",
    "Chesthaledha eeda",
    "Nuvvu daaaaaaaaa idaaaaa",
    "Oo maaata anakudamma",
    ".......",
    "Mental patients",
    "Em telidhu pettadhu oorikey bagulu vesukoni vastharu palleturi nundi ma paanalu thinadaniki",
    "Potha potha patha ani pata paduthunav kada pooooooo",
    "Indaka krishna ani evarni annav",
    "Andhi naa kodakaa",
    "Waste naa kodaka",
    "Kukka naa kodaka",
    "Bhuvana naa kodaka",
    "Pichi naa kodaka",
    "Kapppa",
    "Sannaga ledhu kovvu padhi urlaki avuthadii",
    "Ekasakalaaa emaina",
    "Sogili",
    "Inner inner meaning",
    "Internal internal meaning",
    "Edho alochisthunav chepu inka edho process run avuthundhi",
    "Gudduthe sathav",
    "Thuuuuuuuuuu",
    "Chiiiiiiiiii",
    "Maaa betaaaa kada",
    "Ni mida kakkutha",
    "Korukutha",
    "Chandra lingam",
    "Platform no 6 , Villipuram",
    "Baralla",
    "Eroju vasthava",
    "Nenem edchala kallu clean cheskuna anthe",
    "Dolo",
    "Oka kathe rendu katheelu",
    "Iyapa... Iyamma",
    "Rajamaatha sivagami",
    "Kottuu",
    "Bajjuko betaaa",
    "Vasthale bajjuko",
    "179 min 54 sec",
    "Hmmm hmmmm hmmm mmmm",
    "yee paaaa",
    "Yeeeeee",
    "Cutifff",
    "Kundelu pallu",
    "Kodthe konda paina karchukoni hii hareesh antav",
    "Kotha betaa----eppuduuu oka beta ney undedhi",
    "ethukoni sankalo kurchopettukoni mudduu petti pilchukoni povala"
  ];
  
  const randomMessageEl = document.getElementById("randomMessage");
  const messageListEl = document.getElementById("messageList");
  const msgIconEl = document.getElementById("msgIcon");
  const msgPanelEl = document.getElementById("msgPanel");
  const closeBtn = document.getElementById("closeMsg");
  const emojiContainer = document.getElementById("emojiContainer");
  
  // Render message list
  function renderMessageList(){
    messageListEl.innerHTML="";
    messages.forEach(msg=>{
      const li=document.createElement("li");
      li.textContent=msg;
      messageListEl.appendChild(li);
    });
  }
  
  // Toggle messages panel
  msgIconEl.addEventListener("click", ()=>{
    if(window.innerWidth <= 600){ // mobile fullscreen
      msgPanelEl.classList.toggle("fullscreen");
    } else {
      msgPanelEl.style.display = (msgPanelEl.style.display==="flex")?"none":"flex";
    }
  });
  
  // Close button
  closeBtn.addEventListener("click", ()=>{
    msgPanelEl.classList.remove("fullscreen");
  });
  
  // Show random message
  function showRandom(){
    const msg = messages[Math.floor(Math.random()*messages.length)];
    randomMessageEl.textContent = msg;
  }
  
  // Add new message
  function addMessage(){
    const input = document.getElementById("newMessage");
    const text = input.value.trim();
    if(!text) return;
    messages.push(text);
    input.value="";
    renderMessageList();
    showRandom();
    launchEmojis(10); // more emojis
  }
  
  // Launch emojis when adding message
  function launchEmojis(count){
    const emojiChars=["🎉","✨","💖","🔥","💫","❤️"];
    for(let i=0;i<count;i++){
      const emoji=document.createElement("div");
      emoji.classList.add("emoji");
      emoji.style.left = `${Math.random()*window.innerWidth}px`;
      emoji.style.fontSize = `${16+Math.random()*24}px`;
      emoji.style.animationDuration = `${3 + Math.random()*4}s`;
      emoji.textContent = emojiChars[Math.floor(Math.random()*emojiChars.length)];
      emojiContainer.appendChild(emoji);
      setTimeout(()=>emoji.remove(),7000);
    }
  }
  
  // Continuous falling emojis
  function generateFallingEmojis(){
    const emojiChars=["💖","✨","🎈","🎉","🔥","❤️"];
    const emoji=document.createElement("div");
    emoji.classList.add("emoji");
    emoji.style.left = `${Math.random()*window.innerWidth}px`;
    emoji.style.fontSize = `${12+Math.random()*28}px`;
    emoji.style.animationDuration = `${4 + Math.random()*6}s`;
    emoji.textContent = emojiChars[Math.floor(Math.random()*emojiChars.length)];
    emojiContainer.appendChild(emoji);
    setTimeout(()=>emoji.remove(),10000);
  }
  setInterval(generateFallingEmojis, 300);
  
  // Init
  renderMessageList();
  showRandom();
  setInterval(showRandom,1000);
  document.getElementById("addBtn").addEventListener("click", addMessage);