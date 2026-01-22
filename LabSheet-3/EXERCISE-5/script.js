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
    document.querySelectorAll('[id^="err-"]').forEach(el => el.textContent = "");
    let isValid = true;

    if (currentStep === 1) {
        const user = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        if (user.length < 4) {
            document.getElementById('err-username').textContent = "Username must be 4+ chars";
            isValid = false;
        }
        if (!email.includes('@')) {
            document.getElementById('err-email').textContent = "Valid email required";
            isValid = false;
        }
    } 
    else if (currentStep === 2) {
        if (!document.getElementById('fullname').value.trim()) {
            document.getElementById('err-fullname').textContent = "Name is required";
            isValid = false;
        }
        if (document.getElementById('phone').value.length < 5) {
            document.getElementById('err-phone').textContent = "Valid phone required";
            isValid = false;
        }
    } 
    else if (currentStep === 3) {
        if (document.getElementById('experience').value === "") {
            document.getElementById('err-experience').textContent = "Experience is required";
            isValid = false;
        }
        if (!document.getElementById('city').value.trim()) {
            document.getElementById('err-city').textContent = "City is required";
            isValid = false;
        }
    }

    return isValid;
}

function changeStep(step) {
    if (step === 1 && !validateCurrentStep()) return;

    const inputs = document.querySelectorAll(`#stage${currentStep} input`);
    inputs.forEach(input => {
        if (input.id) formData[input.id] = input.value;
    });

    currentStep += step;

    if (currentStep > totalSteps) {
        alert("Submission Successful!\n" + JSON.stringify(formData, null, 2));
        location.reload(); 
        return;
    }

    updateUI();
}

function updateUI() {
    const stages = document.querySelectorAll('.stage');
    
    stages.forEach((stage, index) => {
        if (index === currentStep - 1) {
            stage.style.display = "block";
        } else {
            stage.style.display = "none";
        }
    });

    const progressPercent = (currentStep / totalSteps) * 100;
    document.getElementById('progressBar').style.width = progressPercent + "%";

    document.getElementById('stageTitle').textContent = `Step ${currentStep}: ${titles[currentStep - 1]}`;
    document.getElementById('prevBtn').disabled = (currentStep === 1);
    document.getElementById('nextBtn').textContent = (currentStep === totalSteps) ? "Submit" : "Next";

    if (currentStep === 4) {
        const review = document.getElementById('reviewContent');
        let html = "<strong>Please review your data:</strong><br><br>";
        for (let key in formData) {
            html += `<b>${key.toUpperCase()}:</b> ${formData[key]}<br>`;
        }
        review.innerHTML = html;
    }
}