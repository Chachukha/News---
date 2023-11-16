$('#imageInput').on('change', function() {
	$input = $(this);
	if($input.val().length > 0) {
		fileReader = new FileReader();
		fileReader.onload = function (data) {
		$('.form-photo__preview').attr('src', data.target.result);
		}
		fileReader.readAsDataURL($input.prop('files')[0]);
		$('.form-photo__preview').css('display', 'block');
	}
});
