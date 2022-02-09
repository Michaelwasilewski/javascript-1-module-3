const messageSuccessContainer = document.querySelector(".message-success");
const messageInfoContainer = document.querySelector(".message-info");
const messageErrorContainer = document.querySelector(".message-error");
const messageWarningContainer = document.querySelector(".message-warning");

messageSuccessContainer.innerHTML = createToaster(
  "success",
  "Files is uploaded congrats"
);
messageInfoContainer.innerHTML = createToaster(
  "info",
  "Files uploaded but we have something to say"
);
messageErrorContainer.innerHTML = createToaster("error", "sorry");
messageWarningContainer.innerHTML = createToaster(
  "warning",
  "Files must be less than 5mb"
);
