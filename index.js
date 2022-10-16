function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


let popup = document.querySelector(".popup")

function openPopup(){
  popup.classList.add("open-popup")
}

function closePopup(){
  popup.classList.remove("open-popup")
}