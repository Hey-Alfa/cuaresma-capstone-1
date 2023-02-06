var btn = document.querySelector('#button');

btn.addEventListener('click', function(event){
  event.preventDefault();
  var contactParams = {
    from_name: document.getElementById("name-area").value,
    email_id: document.getElementById("email-area").value,
    message: document.getElementById("textarea-area").value,
    contact_number: document.getElementById("contact-number").value,
  };
  const serviceID = "service_wccbf3r";
  const templateID = "template_o0rkwfc";

  emailjs.send(serviceID,templateID,contactParams)
    .then(() => {
      document.getElementById("name-area").value = "";
      document.getElementById("email-area").value = "";
      document.getElementById("textarea-area").value = "";
      document.getElementById("contact-number").value = "";
      console.log(contactParams);
      alert("Your Message Sent Successfully");
    })
    .catch((err) => console.log(err));
  // alert("Your Message Sent Successfully");
});
