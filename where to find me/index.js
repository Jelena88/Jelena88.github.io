
        const name = document.querySelector('#name');
        console.log('name')
        const email = document.querySelector('#email');
        console.log('email')
        const paragraf = document.querySelector('.paragraf');
        const btn = document.querySelector('.btn');

        btn.addEventListener('click', onclick)

        function onclick() {
            if (name.value == "" || email.value == "")
                alert("Please fill all fields");

            else if (email.value.includes("@") == false)
                alert("Email address is not formatted correctly")
            else
                paragraf.innerHTML = `${name.value}, thank you for your subscription. The newsletter will be sent to your e-mail address ${email.value}`
            document.querySelector('form').reset()
            return
        }
        function displayBar(m) {

            var x = document.getElementById("menu");

            if (m.matches && x.style.display === "none") {
                x.style.display = "block";
            } else if (m.matches) {
                x.style.display = "none";
            }
            else {
                x.style.display = "flex";
                x.style.flexDirection = "row";

            }
        }
        var m = window.matchMedia("(max-width: 768px)");
        displayBar(m)
        m.addListener(displayBar)

   
        