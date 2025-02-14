// app.js
import { questionBank, subjectStructure } from './data.js';

class QuestionBankApp {
    constructor() {
        // DOM Elements
        this.subjectSelect = document.getElementById('subjectSelect');
        this.semesterSelect = document.getElementById('semesterSelect');
        this.unitSelect = document.getElementById('unitSelect');
        this.lessonSelect = document.getElementById('lessonSelect');
        this.questionArea = document.getElementById('questionArea');
        this.questionContent = document.getElementById('questionContent');

        // State
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.startTime = null;
        this.isSubmitted = false;
        this.isLoading = false;

        // Initialize
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.subjectSelect.addEventListener('change', () => this.handleSubjectChange());
        this.semesterSelect.addEventListener('change', () => this.handleSemesterChange());
        this.unitSelect.addEventListener('change', () => this.handleUnitChange());
        this.lessonSelect.addEventListener('change', () => this.handleLessonChange());

        document.getElementById('submitBtn').addEventListener('click', () => this.submitAnswer());
        document.getElementById('nextBtn').addEventListener('click', () => this.showNextQuestion());
        document.getElementById('restartBtn').addEventListener('click', () => this.restartQuiz());

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterQuestions(e.target.dataset.type));
        });
    }

    handleSubjectChange() {
        const subject = this.subjectSelect.value;
        if (!subject) {
            this.resetSelects(['semester', 'unit', 'lesson']);
            return;
        }

        this.populateSemesterSelect(subject);
        this.semesterSelect.disabled = false;
        this.resetSelects(['unit', 'lesson']);
    }

    handleSemesterChange() {
        const subject = this.subjectSelect.value;
        const semester = this.semesterSelect.value;
        if (!semester) {
            this.resetSelects(['unit', 'lesson']);
            return;
        }

        this.populateUnitSelect(subject, semester);
        this.unitSelect.disabled = false;
        this.resetSelects(['lesson']);
    }

    handleUnitChange() {
        const subject = this.subjectSelect.value;
        const semester = this.semesterSelect.value;
        const unit = this.unitSelect.value;
        if (!unit) {
            this.resetSelects(['lesson']);
            return;
        }

        this.populateLessonSelect(subject, semester, unit);
        this.lessonSelect.disabled = false;
    }

    handleLessonChange() {
        const subject = this.subjectSelect.value;
        const semester = this.semesterSelect.value;
        const unit = this.unitSelect.value;
        const lesson = this.lessonSelect.value;

        if (!lesson) {
            this.hideQuestions();
            return;
        }

        this.loadQuestions(subject, semester, unit, lesson);
    }

    async loadQuestions(subject, semester, unit, lesson) {
        try {
            this.isLoading = true;
            this.showLoadingState();
            
            // Reset state
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.startTime = new Date();
            this.isSubmitted = false;
            
            this.currentQuestions = questionBank[subject][semester][unit][lesson].questions;
            
            if (!this.currentQuestions || this.currentQuestions.length === 0) {
