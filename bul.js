document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
document.querySelector('a#open-modal').addEventListener('click', function(event) {
  event.preventDefault();
  var modal = document.querySelector('.modal');  // assuming you have only 1
  var html = document.querySelector('html');
  modal.classList.add('is-active');
  html.classList.add('is-clipped');

  modal.querySelector('.modal-background').addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });
});
// // document.addEventListener('DOMContentLoaded', function () {
// //
// //     // Modals
// //
// //     var rootEl = document.documentElement;
// //     var allModals = getAll('.modal');
// //     var modalButtons = getAll('#myModal');
// //     var modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');
// //
// //     if (modalButtons.length > 0) {
// //         modalButtons.forEach(function (el) {
// //             el.addEventListener('click', function () {
// //                 var target = document.getElementById(el.dataset.target);
// //                 rootEl.classList.add('is-clipped');
// //                 target.classList.add('is-active');
// //             });
// //         });
// //     }
// //
// //     if (modalCloses.length > 0) {
// //         modalCloses.forEach(function (el) {
// //             el.addEventListener('click', function () {
// //                 closeModals();
// //             });
// //         });
// //     }
// //
// //     document.addEventListener('keydown', function (event) {
// //         var e = event || window.event;
// //         if (e.keyCode === 27) {
// //             closeModals();
// //         }
// //     });
// //
// //     function closeModals() {
// //         rootEl.classList.remove('is-clipped');
// //         allModals.forEach(function (el) {
// //             el.classList.remove('is-active');
// //         });
// //     }
// //
// //     // Functions
// //
// //     function getAll(selector) {
// //         return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
// //     }
// // });
