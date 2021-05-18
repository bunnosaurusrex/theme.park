
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre> 

| ___ \   \ \ / /                     
| |_/ /___ \ V /  ___ ___  _ __ _ __  
|    // _ \/   \ / __/ _ \| '__| '_ \ 
| |\ \  __/ /^\ \ (_| (_) | |  | |_) |
\_| \_\___\/   \/\___\___/|_|  | .__/ 
                               | |    
                               |_|    
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
