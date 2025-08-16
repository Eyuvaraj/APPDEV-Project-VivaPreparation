// Study App JavaScript - Updated for Tailwind CSS
let currentSubject = '';
let currentSection = '';
let currentQuestionIndex = 0;
let questions = [];
let allSections = [];

// Data structure to hold parsed content
const subjectData = {
    mad1: { sections: {}, loaded: false },
    mad2: { sections: {}, loaded: false },
    tips: { content: '', loaded: false }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadMarkdownFiles();
});

// Load all markdown files
async function loadMarkdownFiles() {
    try {
        // Load MAD1
        const mad1Response = await fetch('MAD1_Questions.md');
        const mad1Text = await mad1Response.text();
        subjectData.mad1 = parseMadQuestions(mad1Text);
        subjectData.mad1.loaded = true;

        // Load MAD2
        const mad2Response = await fetch('MAD2_Questions.md');
        const mad2Text = await mad2Response.text();
        subjectData.mad2 = parseMadQuestions(mad2Text);
        subjectData.mad2.loaded = true;

        // Load Tips HTML
        const tipsResponse = await fetch('tips.html');
        const tipsHTML = await tipsResponse.text();
        // Extract just the body content
        const tipsContent = tipsHTML.match(/<body>([\s\S]*)<\/body>/)?.[1] || tipsHTML;
        subjectData.tips = { content: tipsContent, loaded: true };

        console.log('All files loaded successfully');
    } catch (error) {
        console.error('Error loading markdown files:', error);
    }
}

// Parse MAD questions from markdown
function parseMadQuestions(markdownText) {
    const sections = {};
    const lines = markdownText.split('\n');
    let currentSectionName = '';
    let currentQuestions = [];
    let inLiveImplementationSection = false;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Check if we're entering the Live Implementation Challenges section
        if (line.includes('Live Implementation Challenges') || line.includes('## Live Implementation')) {
            // Save current section before switching
            if (currentSectionName && currentQuestions.length > 0) {
                sections[currentSectionName] = [...currentQuestions];
            }
            
            // Create a special section for Live Implementation content
            const liveContent = [];
            let j = i;
            while (j < lines.length) {
                liveContent.push(lines[j]);
                j++;
            }
            
            sections['Live Implementation Challenges'] = [{
                question: 'Live Implementation Challenges and Code Changes',
                answer: liveContent.join('\n')
            }];
            
            break; // Stop processing after this section
        }
        
        // Check for section headers (###)
        if (line.startsWith('### ')) {
            // Save previous section if it exists
            if (currentSectionName && currentQuestions.length > 0) {
                sections[currentSectionName] = [...currentQuestions];
            }
            
            // Start new section
            currentSectionName = line.replace('### ', '').trim();
            currentQuestions = [];
        }
        
        // Check for numbered questions with answers
        else if (line.match(/^\d+\.\s\*\*(.+?)\*\*$/)) {
            const questionMatch = line.match(/^\d+\.\s\*\*(.+?)\*\*$/);
            if (questionMatch) {
                const questionText = questionMatch[1];
                
                // Look for answer in next line(s)
                let answer = '';
                let j = i + 1;
                
                // Collect answer lines until we hit another question or section
                while (j < lines.length) {
                    const nextLine = lines[j].trim();
                    if (nextLine.match(/^\d+\.\s\*\*/) || nextLine.startsWith('### ') || nextLine.startsWith('## ')) {
                        break;
                    }
                    if (nextLine && !nextLine.startsWith('   -')) {
                        answer += nextLine + '\n';
                    }
                    j++;
                }
                
                currentQuestions.push({
                    question: questionText,
                    answer: answer.trim()
                });
            }
        }
        
        // Also handle non-bold questions
        else if (line.match(/^\d+\.\s(.+)$/)) {
            const questionMatch = line.match(/^\d+\.\s(.+)$/);
            if (questionMatch && !line.includes('**')) {
                const questionText = questionMatch[1];
                currentQuestions.push({
                    question: questionText,
                    answer: 'Answer not provided in source material.'
                });
            }
        }
    }
    
    // Save last section (if we didn't hit Live Implementation)
    if (currentSectionName && currentQuestions.length > 0) {
        sections[currentSectionName] = [...currentQuestions];
    }
    
    return { sections, loaded: true };
}

// Load a specific subject
function loadSubject(subject) {
    currentSubject = subject;
    
    // Update active tab
    updateActiveTab(subject);
    
    // Hide home view, show study view
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('studyView').classList.remove('hidden');
    
    if (subject === 'tips') {
        loadTips();
    } else {
        loadSubjectSections(subject);
    }
}

// Update active tab styling
function updateActiveTab(subject) {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('question-gradient', 'text-white');
        tab.classList.add('bg-gray-100', 'hover:bg-gray-200', 'text-gray-700');
    });
    
    // Find and activate current tab
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        if ((subject === 'mad1' && tab.textContent.includes('MAD1')) ||
            (subject === 'mad2' && tab.textContent.includes('MAD2')) ||
            (subject === 'tips' && tab.textContent.includes('Tips'))) {
            tab.classList.remove('bg-gray-100', 'hover:bg-gray-200', 'text-gray-700');
            tab.classList.add('question-gradient', 'text-white');
        }
    });
}

// Load sections for MAD1/MAD2
function loadSubjectSections(subject) {
    const data = subjectData[subject];
    if (!data.loaded) {
        return;
    }
    
    // Show section grid
    document.getElementById('sectionGrid').classList.remove('hidden');
    document.getElementById('questionAnswerCard').classList.add('hidden');
    document.getElementById('tipsContent').classList.add('hidden');
    
    const sectionButtons = document.getElementById('sectionButtons');
    sectionButtons.innerHTML = '';
    
    // Store all sections for this subject
    allSections = Object.keys(data.sections);
    
    // Create section buttons
    allSections.forEach((sectionName, index) => {
        const button = document.createElement('button');
        button.className = 'bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm';
        button.textContent = sectionName;
        button.onclick = () => loadSection(subject, sectionName, index);
        sectionButtons.appendChild(button);
    });
}

// Load a specific section
function loadSection(subject, sectionName, sectionIndex = 0) {
    currentSubject = subject;
    currentSection = sectionName;
    currentQuestionIndex = 0;
    
    // Load questions for this section
    questions = subjectData[subject].sections[sectionName] || [];
    
    // Hide section grid, show question/answer card
    document.getElementById('sectionGrid').classList.add('hidden');
    document.getElementById('questionAnswerCard').classList.remove('hidden');
    document.getElementById('tipsContent').classList.add('hidden');
    
    // Update stats
    updateStats();
    
    // Display first question
    displayQuestion();
}

// Load tips content
function loadTips() {
    document.getElementById('sectionGrid').classList.add('hidden');
    document.getElementById('questionAnswerCard').classList.add('hidden');
    document.getElementById('tipsContent').classList.remove('hidden');
    
    // Display tips content as HTML (no parsing needed)
    const tipsText = document.getElementById('tipsText');
    tipsText.innerHTML = subjectData.tips.content;
    
    // Update stats for tips
    document.getElementById('currentQuestion').textContent = '1';
    document.getElementById('totalQuestions').textContent = '1';
    document.getElementById('currentSection').textContent = 'Tips';
    document.getElementById('progressBar').style.width = '100%';
}

// Display current question
function displayQuestion() {
    if (questions.length === 0) {
        return;
    }
    
    const question = questions[currentQuestionIndex];
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById('questionText').innerHTML = formatText(question.question);
    document.getElementById('answerText').innerHTML = formatText(question.answer);
    
    updateNavigationButtons();
    updateProgress();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Format text with basic markdown-like formatting
function formatText(text) {
    if (!text) return '';
    
    // Special handling for Live Implementation Challenges section
    if (text.includes('Live Implementation Challenges') && text.length > 1000) {
        return parseMarkdownToHTML(text);
    }
    
    return text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`(.+?)`/g, '<code class="bg-white bg-opacity-20 px-2 py-1 rounded text-sm">$1</code>')
        .replace(/\n/g, '<br>')
        .replace(/- (.+?)(<br>|$)/g, '<li class="ml-4 list-disc">$1</li>')
        .replace(/(\d+)\. (.+?)(<br>|$)/g, '<li class="ml-4 list-decimal">$2</li>');
}

// Enhanced markdown to HTML parser for complex content
function parseMarkdownToHTML(markdown) {
    return markdown
        // Headers
        .replace(/^### (.+$)/gm, '<h3 class="text-xl font-bold text-blue-600 mt-6 mb-3 border-b-2 border-blue-200 pb-2">$1</h3>')
        .replace(/^## (.+$)/gm, '<h2 class="text-2xl font-bold text-purple-600 mt-8 mb-4">$1</h2>')
        .replace(/^# (.+$)/gm, '<h1 class="text-3xl font-bold text-gray-800 mt-4 mb-6">$1</h1>')
        // Bold
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
        // Code
        .replace(/`(.+?)`/g, '<code class="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">$1</code>')
        // Lists - handle unordered first
        .replace(/^- (.+$)/gm, '<li class="ml-6 list-disc mb-1">$1</li>')
        // Lists - handle ordered
        .replace(/^(\d+)\. (.+$)/gm, '<li class="ml-6 list-decimal mb-1">$2</li>')
        // Line breaks
        .replace(/\n/g, '<br>')
        // Clean up and wrap consecutive list items
        .replace(/(<li[^>]*>.*?<\/li>)(<br>)*(<li[^>]*>.*?<\/li>)/g, '$1$3')
        // Wrap list items in ul tags
        .replace(/(<li class="ml-6 list-disc[^>]*>.*?<\/li>)/g, '<ul class="mb-3">$1</ul>')
        .replace(/(<li class="ml-6 list-decimal[^>]*>.*?<\/li>)/g, '<ol class="mb-3">$1</ol>')
        // Clean up multiple consecutive breaks
        .replace(/(<br>\s*){3,}/g, '<br><br>')
        // Add spacing after headers
        .replace(/(<\/h[1-3]>)/g, '$1<div class="mb-2"></div>');
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateStats();
    } else {
        // Move to next section if available
        const currentSectionIndex = allSections.indexOf(currentSection);
        if (currentSectionIndex < allSections.length - 1) {
            const nextSection = allSections[currentSectionIndex + 1];
            loadSection(currentSubject, nextSection, currentSectionIndex + 1);
        }
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateStats();
    } else {
        // Move to previous section if available
        const currentSectionIndex = allSections.indexOf(currentSection);
        if (currentSectionIndex > 0) {
            const prevSection = allSections[currentSectionIndex - 1];
            const prevSectionQuestions = subjectData[currentSubject].sections[prevSection];
            currentQuestionIndex = prevSectionQuestions.length - 1;
            loadSection(currentSubject, prevSection, currentSectionIndex - 1);
        }
    }
}

// Update navigation button states
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    const currentSectionIndex = allSections.indexOf(currentSection);
    const isFirstQuestion = currentQuestionIndex === 0 && currentSectionIndex === 0;
    const isLastQuestion = currentQuestionIndex === questions.length - 1 && currentSectionIndex === allSections.length - 1;
    
    prevBtn.disabled = isFirstQuestion;
    nextBtn.disabled = isLastQuestion;
    
    if (isFirstQuestion) {
        prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
    
    if (isLastQuestion) {
        nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

// Update stats display
function updateStats() {
    const totalQuestionsInSubject = Object.values(subjectData[currentSubject].sections)
        .reduce((total, sectionQuestions) => total + sectionQuestions.length, 0);
    
    let questionsBeforeCurrentSection = 0;
    const currentSectionIndex = allSections.indexOf(currentSection);
    for (let i = 0; i < currentSectionIndex; i++) {
        questionsBeforeCurrentSection += subjectData[currentSubject].sections[allSections[i]].length;
    }
    
    const overallQuestionNumber = questionsBeforeCurrentSection + currentQuestionIndex + 1;
    
    document.getElementById('currentQuestion').textContent = overallQuestionNumber;
    document.getElementById('totalQuestions').textContent = totalQuestionsInSubject;
    document.getElementById('currentSection').textContent = currentSection;
}

// Update progress bar
function updateProgress() {
    if (questions.length === 0) return;
    
    const totalQuestionsInSubject = Object.values(subjectData[currentSubject].sections)
        .reduce((total, sectionQuestions) => total + sectionQuestions.length, 0);
    
    let questionsBeforeCurrentSection = 0;
    const currentSectionIndex = allSections.indexOf(currentSection);
    for (let i = 0; i < currentSectionIndex; i++) {
        questionsBeforeCurrentSection += subjectData[currentSubject].sections[allSections[i]].length;
    }
    
    const overallProgress = ((questionsBeforeCurrentSection + currentQuestionIndex + 1) / totalQuestionsInSubject) * 100;
    document.getElementById('progressBar').style.width = overallProgress + '%';
}

// Go back to home
function goHome() {
    document.getElementById('homeView').classList.remove('hidden');
    document.getElementById('studyView').classList.add('hidden');
    
    // Reset state
    currentSubject = '';
    currentSection = '';
    currentQuestionIndex = 0;
    questions = [];
    allSections = [];
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (!document.getElementById('studyView').classList.contains('hidden')) {
        switch(event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                previousQuestion();
                break;
            case 'ArrowRight':
                event.preventDefault();
                nextQuestion();
                break;
            case 'Escape':
                goHome();
                break;
        }
    }
});
