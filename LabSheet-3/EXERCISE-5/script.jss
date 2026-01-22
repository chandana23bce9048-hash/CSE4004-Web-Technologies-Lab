let currentStep = 1;
    const totalSteps = 4;
    const formData = {}; 

    const titles = [
        "Account Setup",
        "Personal Information",
        "Career Preferences",
        "Review & Submit"
    ];

    function validateCurrentStep() {
        let isValid = true;
        const clearErrors = () => document.querySelectorAll('.error').forEach(e => e.textContent = "");
        clearErrors();

        if (currentStep === 1) {
            const user = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            if (user.length < 4) {
                document.getElementById('err-username').textContent = "Username must be 4+ characters";
                isValid = false;
            }
            if (!email.includes('@')) {
                document.getElementById('err-email').textContent = "Enter a valid email";
                isValid = false;
            }
        } 
        else if (currentStep === 2) {
            const name = document.getElementById('fullname').value.trim();
            if (!name) {
                document.getElementById('err-fullname').textContent = "Full name is required";
                isValid = false;
            }
        } 
        else if (currentStep === 3) {
            const exp = document.getElementById('experience').value;
            if (exp === "") {
                document.getElementById('err-experience').textContent = "Please enter years of experience";
                isValid = false;
            }
        }

        return isValid;
    }

    function changeStep(step) {
        
        if (step === 1 && !validateCurrentStep()) return;

        const inputs = document.querySelectorAll(`#stage${currentStep} input`);
        inputs.forEach(input => formData[input.id] = input.value);

        currentStep += step;

        if (currentStep > totalSteps) {
            alert("Registration Complete!\nData: " + JSON.stringify(formData));
            return;
        }

        updateUI();
    }

    function updateUI() {
       
        document.querySelectorAll('.stage').forEach((s, idx) => {
            s.classList.toggle('active', idx === currentStep - 1);
        });

        document.getElementById('progressBar').style.width = (currentStep / totalSteps) * 100 + "%";
        document.getElementById('stageTitle').textContent = `Step ${currentStep}: ${titles[currentStep - 1]}`;

        document.getElementById('prevBtn').disabled = (currentStep === 1);
        document.getElementById('nextBtn').textContent = (currentStep === totalSteps) ? "Submit" : "Next";

        if (currentStep === 4) {
            const review = document.getElementById('reviewContent');
            review.innerHTML = Object.entries(formData)
                .map(([key, val]) => `<p><strong>${key.toUpperCase()}:</strong> ${val}</p>`)
                .join('');
        }
    }