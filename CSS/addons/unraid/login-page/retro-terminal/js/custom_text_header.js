
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>                   __________       ____  ___                         
                   \______   \ ____ \   \/  /____  _________________  
                    |       _// __ \ \     // ___\/  _ \_  __ \____ \ 
                    |    |   \  ___/ /     \  \__(  <_> )  | \/  |_> >
                    |____|_  /\___  >___/\  \___  >____/|__|  |   __/ 
                           \/     \/      \_/   \/            |__|    

                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
