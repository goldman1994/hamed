// فرم پیام نمایشی (فرانت بوده – سرور نیاز ندارد)
document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector('form');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      alert("پیام شما ثبت شد! تیم ما بسیار سریع پاسخگو خواهد بود.");
      form.reset();
    }
  }
});
