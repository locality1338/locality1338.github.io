fetch("https://clientsettingscdn.roblox.com/v1/client-version/WindowsPlayer", {
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((json) => {
      robloxvertext.textContent = "Current Roblox Windows Version: " + json["clientVersionUpload"];
    });
