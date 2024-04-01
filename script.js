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

    answer = "https://www.klipdb.com/clip_searches?clip_query%5Border_by%5D=created_at%2Fdesc&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bid%5D=c555e1fa-b54b-4661-a566-788267f13ad9&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bid%5D=da23394e-572f-44fc-af99-79bc323fa66d&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bfield%5D=display_name&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B0%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bvalue%5D=" + encodeURIComponent(first.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bid%5D=0b5147be-a3c0-48e2-a69e-8a192913856a&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bfield%5D=description&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B1%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bvalue%5D=" + encodeURIComponent(first.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bid%5D=c6466bbe-8e63-47e8-bde3-d2e3bf0f3d2d&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bfield%5D=tag_names&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B2%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bvalue%5D=" + encodeURIComponent(first.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bid%5D=22b67a88-86e7-4509-a7f2-0fdf4ee588aa&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bfield%5D=audio&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B3%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B0%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bvalue%5D=" + encodeURIComponent(first.trim());
    //dobErrMsg.innerHTML = answer;
    //console.log("first is not empty");
    //console.log(answer);
  }

  if (second !== "") {
    answer += "&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bid%5D=384c0c23-dd95-49cb-b387-fd9a675a8059&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bid%5D=f48c57ff-825d-4090-9195-93296e75abd7&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bfield%5D=display_name&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B0%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bvalue%5D=" + encodeURIComponent(second.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bid%5D=24f47213-9f46-4aa0-a13b-9330c821221a&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bfield%5D=description&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B1%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bvalue%5D=" + encodeURIComponent(second.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bid%5D=21247275-9d10-48d9-b3d9-382f53d01770&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bfield%5D=tag_names&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B2%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bvalue%5D=" + encodeURIComponent(second.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bid%5D=7c397742-5733-4a72-8d50-c608b9c048f9&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bfield%5D=audio&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B3%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B1%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bvalue%5D=" + encodeURIComponent(second.trim());
    //dobErrMsg.innerHTML = answer;
    //console.log("second is not empty");
    //console.log(answer);

  }
  if (third !== "") {
    answer += "&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bid%5D=9138ff9c-ddd9-49f2-9661-040a6015884b&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bid%5D=53c7c76b-15c9-4e33-85e3-385a709456b1&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bfield%5D=display_name&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B0%5D%5Boperator%5D=word&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bvalue%5D=" + encodeURIComponent(third.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bid%5D=3db8ce65-2497-434f-91c3-215e5fca41f1&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bfield%5D=description&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B1%5D%5Boperator%5D=word&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bvalue%5D=" + encodeURIComponent(third.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bid%5D=202c54be-bd14-4586-9ba8-a5ae504f6ec3&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bfield%5D=tag_names&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B2%5D%5Boperator%5D=word&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bvalue%5D=" + encodeURIComponent(third.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bid%5D=41f65049-ebf9-416e-b4f3-0573beefb9e7&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bfield%5D=audio&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B3%5D%5Boperator%5D=word&clip_query%5Bcfgs_attributes%5D%5B2%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bvalue%5D=" + encodeURIComponent(third.trim());
    //dobErrMsg.innerHTML = answer;
    // console.log("third is not empty");
    //console.log(answer);
  }
  if (fourth !== "") {
    answer += "&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bid%5D=caa8bfb0-f1af-45e6-9572-fdd57c1c49ed&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bid%5D=e0f0e730-d3f3-4255-9623-e32d674d37f4&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bfield%5D=display_name&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bvalue%5D=" + encodeURIComponent(fourth.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bid%5D=184d97d3-c2b4-4176-b4c4-6f6ce51d5aae&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bfield%5D=description&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B1%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B1%5D%5Bvalue%5D=" + encodeURIComponent(fourth.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bid%5D=596bc68b-72c9-4fe8-96c8-2b36e104020d&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bfield%5D=tag_names&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B2%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B2%5D%5Bvalue%5D=" + encodeURIComponent(fourth.trim()) + "&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bid%5D=e428d171-063c-426c-9019-c887f381626e&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bfield%5D=audio&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B3%5D%5Boperator%5D=contains&clip_query%5Bcfgs_attributes%5D%5B3%5D%5Bclip_fields_attributes%5D%5B3%5D%5Bvalue%5D=" + encodeURIComponent(fourth.trim());
    //dobErrMsg.innerHTML = answer;
    //console.log("fourth is not empty");
    // console.log(answer);
  }
  if (selectedValue == "wordmatch") {
    answer = answer.replaceAll("contains", "word");
    //console.log("changed to Word Match");
  }
  if (document.getElementById('notridic').checked) {
    answer += "&clip_query%5Bcfgs_attributes%5D%5B4%5D%5Bid%5D=1bcc6300-cd64-49c7-a820-b8a027692791&clip_query%5Bcfgs_attributes%5D%5B4%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bid%5D=941fc881-4467-4ab8-9e5e-4197b6e046d7&clip_query%5Bcfgs_attributes%5D%5B4%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bfield%5D=series_names&clip_query%5Bcfgs_attributes%5D%5B4%5D%5Bclip_fields_attributes%5D%5B0%5D%5Boperator%5D=does_not_contain&clip_query%5Bcfgs_attributes%5D%5B4%5D%5Bclip_fields_attributes%5D%5B0%5D%5Bvalue%5D=Ridiculousness&commit=Search";
  }
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
