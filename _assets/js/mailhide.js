var ready;

ready = function(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

ready(function() {
  document.body.addEventListener('click', function(e) {
    if (e.target.getAttribute('data-mailhide') !== null) {
      var href, newWindow;

      href = e.target.getAttribute('href');

      if (!href) {
        return true;
      }

      newWindow = window.open(href, '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300');
      if (newWindow) {
        newWindow.opener = null;
        e.preventDefault();
        return false;
      }

      return true;
    }
  });
});
