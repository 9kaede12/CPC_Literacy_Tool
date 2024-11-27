function confirmSelection(jobName, imgSrc) {
  window.location.href = `confirm.html?job=${encodeURIComponent(jobName)}&img=${encodeURIComponent(imgSrc)}`;
}

function goBack() {
  window.location.href = "index.html";
}
