const menuData = {
    logo: {
      text: "MemeCoin",
      link: "index.html"
    },
    links: [
      { text: "Home", link: "../index.html" },
      {
        text: "Crypto",
        dropdown: [
          { text: "DogeCoin", link: "../crypto/coin.html?crypto=DOGEUSD" },
          { text: "PepeCoin", link: "../crypto/coin.html?crypto=PEPEUSD" },
          { text: "PenguCoin", link: "../crypto/coin.html?crypto=PENGUSDT" }
        ]
      },
      { text: "Risorse", link: "../risorse/risorse.html" },
      { text: "Chi Sono", link: "about.html" }
    ],
    cta: [
      { text: "Iscriviti", link: "signup.html", class: "btn" },
      { text: "Accedi", link: "login.html", class: "btn secondary" }
    ]
  };
  
  function generateMenu(containerId, data) {
    const container = document.getElementById(containerId);
  
    // Creazione del contenitore principale
    const nav = document.createElement("nav");
    nav.className = "navbar";
  
    // Logo
    const logoDiv = document.createElement("div");
    logoDiv.className = "logo";
    const logoLink = document.createElement("a");
    logoLink.href = data.logo.link;
    logoLink.textContent = data.logo.text;
    logoDiv.appendChild(logoLink);
    nav.appendChild(logoDiv);
  
    // Links principali
    const ul = document.createElement("ul");
    ul.className = "nav-links";
  
    data.links.forEach(link => {
      const li = document.createElement("li");
  
      if (link.dropdown) {
        li.className = "dropdown";
        const a = document.createElement("a");
        a.href = "#";
        a.innerHTML = `<b>${link.text}</b>`;
        li.appendChild(a);
  
        const dropdownMenu = document.createElement("ul");
        dropdownMenu.className = "dropdown-menu";
  
        // Aggiunta delle sottovoci
        link.dropdown.forEach(subLink => {
          const subLi = document.createElement("li");
          const subA = document.createElement("a");
          subA.href = subLink.link;
          subA.textContent = subLink.text;
          subLi.appendChild(subA);
          dropdownMenu.appendChild(subLi);
        });
  
        // Aggiunta della casella di testo
        const inputLi = document.createElement("li");
        inputLi.style.padding = "5px 20px 5px 23px"; // Styling opzionale
        const inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.placeholder = "es. BTCUSD";
        inputBox.style.width = "50%"; // Styling opzionale
  
        // Bottone per inviare l'input
        const goButton = document.createElement("button");
        goButton.textContent = "Vai";
        goButton.style.marginLeft = "5px"; // Styling opzionale
        goButton.addEventListener("click", () => {
          const symbol = inputBox.value.trim();
          if (symbol) {
            window.location.href = `../crypto/coin.html?crypto=${symbol}`;
          } else {
            alert("Inserisci un simbolo valido.");
          }
        });
  
        inputLi.appendChild(inputBox);
        inputLi.appendChild(goButton);
        dropdownMenu.appendChild(inputLi);
  
        li.appendChild(dropdownMenu);
      } else {
        const a = document.createElement("a");
        a.href = link.link;
        a.innerHTML = `<b>${link.text}</b>`;
        li.appendChild(a);
      }
  
      ul.appendChild(li);
    });
  
    nav.appendChild(ul);
  
    // CTA Buttons
    const ctaDiv = document.createElement("div");
    ctaDiv.className = "cta";
  
    data.cta.forEach(button => {
      const btn = document.createElement("a");
      btn.href = button.link;
      btn.className = button.class;
      btn.textContent = button.text;
      ctaDiv.appendChild(btn);
    });
  
    nav.appendChild(ctaDiv);
  
    // Aggiungi il menu al container
    container.appendChild(nav);
  }
  
  // Genera il menu
  generateMenu("menu-container", menuData);
  
  