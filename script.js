function myValidator() {

  var first = document.getElementById("first").value;
  var second = document.getElementById("second").value;
  var third = document.getElementById("third").value;
  var fourth = document.getElementById("fourth").value;
  var dropdown = document.getElementById("contain");
  var selectedValue = dropdown.value;

  var answer = "";

  if (first === "") {
    //console.log("This is an empty string!");
    dobErrMsg.innerHTML = "The First field cannot be blank";
    return;

  } else {

    answer = "https://www.klipdb.com/clip_searches?clip_query%5Border_by%5D=created_at%2Fdesc&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bid%5D=684b75a3-cc3f-427e-a331-7f2701b67f02&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bid%5D=e2939c19-c31e-4540-a9fd-bddc1762cb9f&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bfield%5D=display_name&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B0%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bvalue%5D=" + encodeURIComponent(first.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bid%5D=9af43e58-5862-402b-8068-0f0f009b1e0e&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bfield%5D=description&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B1%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bvalue%5D=" + encodeURIComponent(first.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bid%5D=7ac737e3-dafd-4493-b975-71eddf1f20eb&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bfield%5D=tag_names&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B2%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bvalue%5D=" + encodeURIComponent(first.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bid%5D=605b4c72-0eda-4c99-8eb7-c94683d3814e&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bfield%5D=audio&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B3%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bvalue%5D=" + encodeURIComponent(first.trim());
    //dobErrMsg.innerHTML = answer;
    //console.log("first is not empty");
    //console.log(answer);
  }

  if (second !== "") {
    answer += "&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bid%5D=538849dd-a3d9-4501-8b40-e3a66c5bb67c&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bid%5D=12f10b96-4694-48a1-a1bc-3b54c16fe085&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bfield%5D=display_name&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B0%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bvalue%5D=" + encodeURIComponent(second.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bid%5D=dd869065-8570-4c6b-b7ec-60aa2306d438&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bfield%5D=description&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B1%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bvalue%5D=" + encodeURIComponent(second.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bid%5D=52cecb08-169b-4c55-9cb7-13d658e56695&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bfield%5D=tag_names&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B2%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bvalue%5D=" + encodeURIComponent(second.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bid%5D=dca7a591-65ef-4315-bd89-3a220d1e8269&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bfield%5D=audio&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B3%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bvalue%5D=" + encodeURIComponent(second.trim());
    //dobErrMsg.innerHTML = answer;
    //console.log("second is not empty");
    //console.log(answer);

  }
  if (third !== "") {
    answer += "&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bid%5D=9fdc2857-08eb-46bb-980c-dbbb705ee98d&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bid%5D=56201d97-4ccf-4013-bd29-8bcaa6c5f282&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bfield%5D=display_name&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B0%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bvalue%5D=" + encodeURIComponent(third.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bid%5D=b0b9edcb-b013-4457-af9d-76095167273f&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bfield%5D=description&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B1%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bvalue%5D=" + encodeURIComponent(third.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bid%5D=29e4e3aa-30ee-4385-821f-8e62fce2ad2f&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bfield%5D=tag_names&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B2%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bvalue%5D=" + encodeURIComponent(third.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bid%5D=f6fabbd0-b836-4db5-b51a-a4563e0ae6b9&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bfield%5D=audio&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B3%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bvalue%5D=" + encodeURIComponent(third.trim());
    //dobErrMsg.innerHTML = answer;
    // console.log("third is not empty");
    //console.log(answer);
  }
  if (fourth !== "") {
    answer += "&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bid%5D=f495dcac-2a22-4ad3-a853-ecbc5df7103b&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bid%5D=d34c77c3-7da5-4310-b7db-c5da82736def&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bfield%5D=display_name&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bvalue%5D=" + encodeURIComponent(fourth.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bid%5D=0d46b412-c7bf-4e3c-8f18-397f8a412d11&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bfield%5D=description&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B1%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bvalue%5D=" + encodeURIComponent(fourth.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bid%5D=2822d346-637c-4389-b645-3bf0c70af273&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bfield%5D=tag_names&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B2%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bvalue%5D=" + encodeURIComponent(fourth.trim()) + "&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bid%5D=2c2f4c8c-3e09-41bf-bf21-65d48d04fbba&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bfield%5D=audio&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B3%5D%5Boperator%5D=contains&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bvalue%5D=" + encodeURIComponent(fourth.trim());
    //dobErrMsg.innerHTML = answer;
    //console.log("fourth is not empty");
    // console.log(answer);
  }
  if (selectedValue == "wordmatch") {
    answer = answer.replaceAll("contains", "word");
    //console.log("changed to Word Match");
  }
  if (document.getElementById('notridic').checked) {
    answer += "&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bid%5D=077479dd-92a3-417f-90de-d760d6950051&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bid%5D=5768ad68-39ff-498b-b2fb-2529b90a6ea0&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bfield%5D=series_names&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Boperator%5D=does_not_contain&clip_query%5Bclip_field_groups_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bvalue%5D=Ridiculousness"
  };
  open(answer);
  dobErrMsg.innerHTML = "Result Generated";
  result.innerHTML += "<div>" + " " + first + " " + second + " " + third + " " + fourth + "</div>";
  document.activeElement.blur();
  //console.log(selectedValue);
}

function clearEntry() {
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  document.getElementById("third").value = "";
  document.getElementById("fourth").value = "";
  document.getElementById("contain").selectedIndex = 0;
  document.getElementById("notridic").checked = false;
  dobErrMsg.innerHTML = "";

  first.focus();
  second.blur();
  third.blur();
  fourth.blur();
  //document.getElementById("first").focus();

}
var input1 = document.getElementById("first");
input1.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
var input2 = document.getElementById("second");
input2.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
var input3 = document.getElementById("third");
input3.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
var input4 = document.getElementById("fourth");
input4.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
var checkbox1 = document.getElementById("notridic");
checkbox1.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'q' && e.ctrlKey) {
    // alert('q key pressed with ctrl');
    clearEntry()
  }
});
