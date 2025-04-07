function getFormvalue(event) {
      event.preventDefault(); // prevent page reload

      // Accessing and trimming input values
      const fname = document.querySelector('[name="fname"]').value.trim();
      const lname = document.querySelector('[name="lname"]').value.trim();

      // Handle empty input
      if (!fname && !lname) {
        alert("Please enter your first and last name.");
        return;
      }

      // Construct full name (can be just fname or lname if one is missing)
      const fullName = `${fname} ${lname}`.trim();

      // Show alert with the full name
      alert(fullName);
    }