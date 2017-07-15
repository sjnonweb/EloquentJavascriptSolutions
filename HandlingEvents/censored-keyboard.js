<input type="text">
<script>
  var field = document.querySelector("input");
  // Your code here.
  field.addEventListener("keydown", (event) => {
  	console.log(event.keyCode);
    if(event.keyCode == 81 || event.keyCode == 87 || event.keyCode == 88)
      event.preventDefault();
  })
</script>

