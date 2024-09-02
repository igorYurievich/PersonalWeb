

    document.addEventListener('DOMContentLoaded', function() {
        var collapseButton = document.querySelector('.btn[data-toggle="collapse"]');
        var collapseIcons = collapseButton.querySelectorAll('.collapse-icon');

        collapseButton.addEventListener('click', function() {
            collapseIcons.forEach(function(icon) {
                icon.classList.toggle('d-none');
            });
        });
    });