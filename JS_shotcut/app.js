// document.querySelectorAll("[data-command]").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const command = btn.getAttribute("data-command");
//     if (command === "createlink" || command === "insertimage") {
//       const url = prompt("Enter the link here:", "https://");
//       document.execCommand(command, false, url);
//     } else if (
//       command === "forecolor" ||
//       command === "backcolor" ||
//       command === "fontName"
//     ) {
//       const value = btn.value || btn.options[btn.selectedIndex].value;
//       document.execCommand(command, false, value);
//     } else if (command === "cleartext") {
//       document.getElementById("divarea").innerHTML = "";
//     } else if (command === "removetext") {
//       document.getElementById("divarea").textContent = "";
//     } else if (command === "uppercase") {
//       let el = document.getElementById("divarea");
//       el.innerHTML = el.innerText.toUpperCase();
//     } else if (command === "lowercase") {
//       let el = document.getElementById("divarea");
//       el.innerHTML = el.innerText.toLowerCase();
//     } else if (command === "capitalize") {
//       let el = document.getElementById("divarea");
//       el.innerHTML = el.innerText.replace(/\b\w/g, (c) => c.toUpperCase());
//     } else {
//       document.execCommand(command, false, null);
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const buttons = document.querySelectorAll("[data-command]");
//   const editor = document.getElementById("divarea");

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const command = button.getAttribute("data-command");

//       if (command === "createlink" || command === "insertimage") {
//         const url = prompt("Enter URL:", "https://");
//         if (url) document.execCommand(command, false, url);
//       } else if (command === "forecolor") {
//         const color = document.getElementById("txtcolor").value;
//         document.execCommand("foreColor", false, color);
//       } else if (command === "backcolor") {
//         const color = document.getElementById("bgcolor").value;
//         document.execCommand("backColor", false, color);
//       } else if (command === "fontName") {
//         const font = document.getElementById("fntname").value;
//         document.execCommand("fontName", false, font);
//       } else {
//         document.execCommand(command, false, null);
//       }

//       editor.focus();
//     });
//   });
// });

document.querySelectorAll("[data-command]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const command = btn.getAttribute("data-command");
    const divArea = document.getElementById("divarea");
    if (command === "paste") {
      navigator.clipboard
        .readText()
        .then((text) => {
          const selection = window.getSelection();
          if (!selection.rangeCount) return;
          selection.deleteFromDocument();
          selection.getRangeAt(0).insertNode(document.createTextNode(text));
        })
        .catch((err) => {
          console.error("Failed to paste text: ", err);
          alert(
            "Unable to paste from clipboard. Please allow clipboard permissions."
          );
        });
    } else if (command === "createlink" || command === "insertimage") {
      const url = prompt("Enter the link here:", "https://");
      if (url) document.execCommand(command, false, url);
    } else if (
      command === "forecolor" ||
      command === "backcolor" ||
      command === "fontName"
    ) {
      const value = btn.value || btn.options[btn.selectedIndex].value;
      document.execCommand(command, false, value);
    } else if (command === "cleartext") {
      divArea.innerHTML = "";
    } else if (command === "removetext") {
      divArea.textContent = "";
    } else if (command === "selectalltext") {
      const range = document.createRange();
      range.selectNodeContents(divArea);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (command === "delete" || command === "forwarddelete") {
      document.execCommand("delete", false, null);
    } else if (
      command === "justifyLeft" ||
      command === "justifyCenter" ||
      command === "justifyRight" ||
      command === "justifyFull"
    ) {
      document.execCommand(command, false, null);
    } else {
      document.execCommand(command, false, null);
      document.getElementById("divarea").focus();
    }    
  });
});

// Additional buttons for uppercase, lowercase, capitalize
document
  .querySelector("button[title='Upper Text']")
  .addEventListener("click", () => {
    const divArea = document.getElementById("divarea");
    divArea.innerHTML = divArea.innerHTML.toUpperCase();
  });

document
  .querySelector("button[title='Lower Text']")
  .addEventListener("click", () => {
    const divArea = document.getElementById("divarea");
    divArea.innerHTML = divArea.innerHTML.toLowerCase();
  });

document
  .querySelector("button[title='Capitalize Text']")
  .addEventListener("click", () => {
    const divArea = document.getElementById("divarea");
    divArea.innerHTML = divarea.innerHTML
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
  });
