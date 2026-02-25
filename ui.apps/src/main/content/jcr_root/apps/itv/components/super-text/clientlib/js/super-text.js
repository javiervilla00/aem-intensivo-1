(function (document, $) {
  'use strict';

  $(document).on('foundation-contentloaded', function (e) {
    $('.cq-dialog-dropdown-showhide', e.target).each(function () {
      var targetSelector = $(this).data('cqDialogDropdownShowhideTarget');
      var $targetContainers = $(targetSelector);

      // Magia para los desplegables modernos de AEM
      Coral.commons.ready(this, function (element) {
        toggleVisibility($targetContainers, element.value);
        element.on('change', function () {
          toggleVisibility($targetContainers, element.value);
        });
      });
    });
  });

  function toggleVisibility($targets, selectedValue) {
    $targets.each(function () {
      var requiredValue = $(this).data('showhidetargetvalue');
      if (selectedValue === requiredValue) {
        $(this).removeClass('hide');
      } else {
        $(this).addClass('hide');
      }
    });
  }
})(document, Granite.$);
