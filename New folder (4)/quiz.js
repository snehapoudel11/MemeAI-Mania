document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('memeQuiz');
    const questions = document.querySelectorAll('.quiz-question');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const quizResult = document.getElementById('quizResult');
    let currentQuestion = 0;
    
    // Meme personality database
    const memeDatabase = {
        "rage-chill-party": {
            title: "Angry German Kid",
            image: "angry-kid.jpg",
            description: "You have explosive reactions but calm down quickly. Your friends know not to mess with you before coffee.",
            match: "89%"
        },
        "confused-productive-adventure": {
            title: "Confused Nick Young",
            image: "confused-nick.jpg",
            description: "You're perpetually baffled by life's complexities, but in an endearing way that makes people want to explain things to you.",
            match: "92%"
        },
        // More results...
        "default": {
            title: "Distracted Boyfriend",
            image: "distracted-bf.jpg",
            description: "You're always looking for the next exciting thing, even when you already have something great.",
            match: "85%"
        } 
    };
    
    // Show current question
    function showQuestion(index) {
        questions.forEach((question, i) => {
            question.classList.toggle('active', i === index);
        });
        
        prevBtn.disabled = index === 0;
        nextBtn.textContent = index === questions.length - 1 ? 'See Results' : 'Next';
    }
    
    // Next button click
    nextBtn.addEventListener('click', function() {
        const currentOptions = questions[currentQuestion].querySelectorAll('input');
        const isAnswered = [...currentOptions].some(option => option.checked);
        
        if(!isAnswered) {
            alert('Please select an answer before continuing!');
            return;
        }
        
        if(currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        } else {
            showResults();
        }
    });
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
        if(currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    });
    
    // Calculate and show results
    function showResults() {
        quizForm.classList.add('hidden');
        quizResult.classList.remove('hidden');
        
        // Get all answers
        const formData = new FormData(quizForm);
        const answers = [...formData.values()];
        const answerKey = answers.join('-');
        
        // Get result (fallback to default if no match)
        const result = memeDatabase[answerKey] || memeDatabase['default'];
        
        // Display result
        document.getElementById('resultTitle').textContent = result.title;
        document.getElementById('resultDescription').textContent = result.description;
        document.getElementById('resultMeme').src = `assets/images/memes/${result.image}`;
        document.getElementById('matchPercentage').textContent = result.match;
    }
    
    // Retake quiz
    document.getElementById('retakeQuiz').addEventListener('click', function() {
        quizForm.reset();
        quizForm.classList.remove('hidden');
        quizResult.classList.add('hidden');
        currentQuestion = 0;
        showQuestion(currentQuestion);
        window.scrollTo(0, 0);
    });
    
    // Save result
    document.getElementById('saveResult').addEventListener('click', function() {
        alert('Meme saved to your device! (In a real app, this would trigger a download)');
    });
    
    // Share result
    document.getElementById('shareResult').addEventListener('click', function() {
        alert('Sharing to social media! (In a real app, this would open share dialogs)');
    });
    
    // Initialize
    showQuestion(currentQuestion);
});