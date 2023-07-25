function showThankYou() {
    alert("Thank you, submitted successfully.");
  }

  function submitForm() {
    var form = document.getElementById("meetingForm");
    form.submit();
    showThankYou();
  }