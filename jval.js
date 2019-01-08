<script src="https://cdn.jsdelivr.net/jquery.validation/1.15.0/additional-methods.min.js"></script>
<script>
jQuery.extend(jQuery.validator.messages, {
		max: jQuery.validator.format("Masukkan Nilai Lebih Kecil Rp.000000"),
		max: jQuery.validator.format("Masukkan lebih kecil dari  Rp.000000. atau Rp.0000. khusus (something) "),
});
$( "#project-form1" ).validate({
	rules: {
		"pagu": {
			required: true,
			max: function(element) 
				{
        			if ($('#txt1 :selected').text() == 'Something') return 000000;
        			else return 000000000;
               }
		}
	}
});
</script>