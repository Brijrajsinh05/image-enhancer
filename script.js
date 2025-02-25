// Multilingual AI Chatbot with Enhanced Knowledge
const languages = {
    english: 'en',
    hindi: 'hi',
    gujarati: 'gu',
    marathi: 'mr'
};

const translations = {
    en: {
        welcome: "Hello! I'm your AI assistant created by Brijrajsinh Jadav. How can I help you today?",
        processing: "Processing your request...",
        typing: "AI is thinking..."
    },
    hi: {
        welcome: "नमस्ते! मैं Brijrajsinh Jadav द्वारा बनाया गया AI सहायक हूं। मैं आपकी कैसे मदद कर सकता हूं?",
        processing: "आपके अनुरोध पर कार्य हो रहा है...",
        typing: "AI सोच रहा है..."
    },
    gu: {
        welcome: "નમસ્તે! હું Brijrajsinh Jadav દ્વારા બનાવેલ AI સહાયક છું. હું તમારી કેવી રીતે મદદ કરી શકું?",
        processing: "તમારી વિનંતી પર પ્રક્રિયા કરી રહ્યા છીએ...",
        typing: "AI વિચારી રહ્યું છે..."
    },
    mr: {
        welcome: "नमस्कार! मी Brijrajsinh Jadav यांनी तयार केलेला AI असिस्टंट आहे. मी तुमची कशी मदत करू शकतो?",
        processing: "तुमची विनंती प्रक्रिया करत आहे...",
        typing: "AI विचार करत आहे..."
    }
};

const chatbotKnowledge = {
    // Image Enhancement Knowledge
    image: {
        enhance: {
            en: "I can enhance your images using advanced AI techniques including: color correction, noise reduction, sharpening, and resolution improvement.",
            hi: "मैं उन्नत AI तकनीकों का उपयोग करके आपकी छवियों को बेहतर बना सकता हूं, जिसमें शामिल हैं: रंग सुधार, नॉइज़ कम करना, शार्पनिंग और रेज़ोल्यूशन में सुधार।",
            gu: "હું એડવાન્સ AI ટેકનિક્સનો ઉપયોગ કરીને તમારા ફોટાને એન્હાન્સ કરી શકું છું, જેમાં સમાવેશ થાય છે: કલર કરેક્શન, નોઈઝ રિડક્શન, શાર્પનિંગ અને રેઝોલ્યુશન સુધારણા.",
            mr: "मी प्रगत AI तंत्रज्ञानाचा वापर करून तुमच्या प्रतिमा सुधारू शकतो, ज्यामध्ये समाविष्ट आहे: रंग सुधारणा, आवाज कमी करणे, शार्पनिंग आणि रेझोल्यूशन सुधारणा."
        }
    },

    // AI Technology Knowledge
    ai: {
        capabilities: {
            en: "I'm equipped with advanced AI capabilities including: natural language processing, image analysis, machine learning, and real-time adaptation.",
            hi: "मैं उन्नत AI क्षमताओं से लैस हूं जिसमें शामिल हैं: प्राकृतिक भाषा प्रसंस्करण, छवि विश्लेषण, मशीन लर्निंग और रीयल-टाइम अनुकूलन।",
            gu: "હું એડવાન્સ AI ક્ષમતાઓથી સજ્જ છું જેમાં સમાવેશ થાય છે: નેચરલ લેંગ્વેજ પ્રોસેસિંગ, ઈમેજ એનાલિસિસ, મશીન લર્નિંગ અને રીયલ-ટાઈમ એડેપ્ટેશન.",
            mr: "मी प्रगत AI क्षमतांनी सुसज्ज आहे ज्यामध्ये समाविष्ट आहे: नैसर्गिक भाषा प्रक्रिया, प्रतिमा विश्लेषण, मशीन लर्निंग आणि रीअल-टाइम अनुकूलन."
        }
    },

    // General Knowledge Base
    general: {
        topics: [
            "Image Processing",
            "AI Technology",
            "Machine Learning",
            "Computer Vision",
            "Natural Language Processing",
            "Neural Networks",
            "Deep Learning",
            "Color Theory",
            "Digital Photography",
            "Image Formats",
            "File Compression",
            "Web Technologies",
            "Software Development",
            "User Experience",
            "Digital Art",
            "Graphic Design"
        ]
    }
};

const aiKnowledge = {
    imageProcessing: {
        enhance: {
            techniques: [
                "Advanced Super Resolution",
                "Neural Network Upscaling",
                "Deep Learning Color Correction",
                "AI-powered Noise Reduction",
                "Smart Sharpening",
                "Facial Enhancement",
                "Background Improvement",
                "Lighting Optimization"
            ],
            formats: ["JPG", "PNG", "WEBP", "HEIC", "RAW"],
            quality: ["Standard", "Professional", "Ultra HD", "Cinema Grade"]
        },
        features: [
            "Real-time Processing",
            "Batch Processing",
            "Custom Presets",
            "Professional Filters",
            "Smart Cropping",
            "Object Removal",
            "Background Replacement",
            "Style Transfer"
        ]
    },
    aiCapabilities: {
        core: [
            "Natural Language Processing",
            "Computer Vision",
            "Machine Learning",
            "Deep Neural Networks",
            "Pattern Recognition",
            "Semantic Analysis",
            "Contextual Understanding"
        ],
        advanced: [
            "Multi-modal Processing",
            "Real-time Adaptation",
            "Continuous Learning",
            "Cross-domain Intelligence",
            "Emotional Intelligence",
            "Creative Generation"
        ]
    },
    languages: {
        supported: ["English", "हिंदी", "ગુજરાતી", "मराठी"],
        features: ["Auto Detection", "Real-time Translation", "Context Preservation"]
    }
};

const contextPatterns = {
    image: {
        enhance: /enhance|improve|quality|resolution|better|upgrade|fix|clear|sharpen|color|noise|lighting/i,
        format: /format|convert|jpg|jpeg|png|webp|heic|raw/i,
        features: /feature|capability|can|do|what|how|help|guide/i
    },
    ai: {
        capabilities: /ai|artificial|intelligence|smart|learn|adapt|think/i,
        technical: /technical|process|work|technology|system|method/i,
        creative: /creative|generate|create|make|design|style/i
    },
    help: {
        general: /help|support|assist|guide|explain|tell|show/i,
        specific: /how to|steps|tutorial|example|demo/i
    }
};

// Security Configuration
const securityConfig = {
    maxLoginAttempts: 3,
    sessionTimeout: 30 * 60 * 1000, // 30 minutes
    passwordMinLength: 8,
    requireSpecialChar: true,
    requireNumber: true,
    requireUppercase: true,
    csrfTokenLength: 32,
    rateLimitRequests: 100,
    rateLimitWindowMs: 15 * 60 * 1000 // 15 minutes
};

// Security Utilities
class SecurityUtils {
    static generateCSRFToken() {
        const array = new Uint8Array(securityConfig.csrfTokenLength);
        crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    static sanitizeInput(input) {
        if (typeof input !== 'string') return input;
        return input
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/\//g, '&#x2F;');
    }

    static validatePassword(password) {
        if (password.length < securityConfig.passwordMinLength) return false;
        if (securityConfig.requireSpecialChar && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
        if (securityConfig.requireNumber && !/\d/.test(password)) return false;
        if (securityConfig.requireUppercase && !/[A-Z]/.test(password)) return false;
        return true;
    }

    static hashData(data) {
        return crypto.subtle.digest('SHA-256', new TextEncoder().encode(data))
            .then(hash => Array.from(new Uint8Array(hash))
                .map(b => b.toString(16).padStart(2, '0'))
                .join(''));
    }
}

// Security Headers
document.addEventListener('DOMContentLoaded', () => {
    // Set security headers
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'";
    document.head.appendChild(meta);
});

// Secure Session Management
class SecureSession {
    constructor() {
        this.sessionToken = localStorage.getItem('sessionToken');
        this.lastActivity = parseInt(localStorage.getItem('lastActivity')) || Date.now();
        this.setupActivityMonitoring();
    }

    setupActivityMonitoring() {
        ['click', 'keypress', 'mousemove', 'touchstart'].forEach(event => {
            document.addEventListener(event, () => this.updateLastActivity());
        });
        setInterval(() => this.checkSession(), 60000); // Check every minute
    }

    updateLastActivity() {
        this.lastActivity = Date.now();
        localStorage.setItem('lastActivity', this.lastActivity.toString());
    }

    checkSession() {
        if (Date.now() - this.lastActivity > securityConfig.sessionTimeout) {
            this.endSession();
        }
    }

    endSession() {
        localStorage.clear();
        window.location.reload();
    }
}

// Rate Limiting
class RateLimiter {
    constructor() {
        this.requests = new Map();
    }

    checkLimit(ip) {
        const now = Date.now();
        const userRequests = this.requests.get(ip) || [];
        const recentRequests = userRequests.filter(time => now - time < securityConfig.rateLimitWindowMs);
        
        if (recentRequests.length >= securityConfig.rateLimitRequests) {
            return false;
        }

        recentRequests.push(now);
        this.requests.set(ip, recentRequests);
        return true;
    }
}

// Secure Form Handling
class SecureForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (this.form) {
            this.setupFormSecurity();
        }
    }

    setupFormSecurity() {
        // Add CSRF token
        const csrfToken = SecurityUtils.generateCSRFToken();
        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'csrf_token';
        tokenInput.value = csrfToken;
        this.form.appendChild(tokenInput);

        // Prevent double submission
        this.form.addEventListener('submit', (e) => {
            if (this.form.dataset.submitted) {
                e.preventDefault();
                return;
            }
            this.form.dataset.submitted = 'true';
        });

        // Sanitize inputs
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(this.form);
            for (let [key, value] of formData.entries()) {
                formData.set(key, SecurityUtils.sanitizeInput(value));
            }
            // Process sanitized form data
            this.processSecureForm(formData);
        });
    }

    async processSecureForm(formData) {
        try {
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-Token': formData.get('csrf_token')
                }
            });
            if (!response.ok) throw new Error('Form submission failed');
            // Handle successful submission
        } catch (error) {
            console.error('Form submission error:', error);
            // Handle error appropriately
        }
    }
}

// Chatbot responses
const chatbotResponses = {
    greeting: [
        "Hello! I'm an AI assistant created by Brijrajsinh Jadav. How can I help you today?",
        "Hi there! I'm your AI guide, designed by Brijrajsinh Jadav. What would you like to know?",
        "Welcome! I'm an intelligent assistant by Brijrajsinh Jadav, ready to help you explore this website!"
    ],
    website: [
        "Let me guide you through our website:\n• Image Enhancement - Improve your photos\n• Image Generation - Create new images\n• AI Processing - Advanced features\n\nWhat would you like to know more about?",
        "Our website offers:\n• Professional Image Enhancement\n• AI-Powered Image Generation\n• Creative Effects\n• Quality Improvements\n\nI can help you navigate any section!",
        "I can help you discover:\n• How to enhance images\n• How to generate new images\n• Best practices for results\n• Tips & tricks\n\nJust ask me anything!"
    ],
    enhance: [
        "To enhance an image:\n1. Click 'Enhance Image' tab\n2. Upload your image\n3. Adjust enhancement settings\n4. Click 'Enhance' button\n5. Download the result",
        "Our enhancement features include:\n• Super Resolution (up to 4x)\n• Smart Retouching\n• Color Enhancement\n• Noise Reduction",
        "For best enhancement results:\n• Use high-quality input images\n• Adjust settings gradually\n• Preview before downloading\n• Try different enhancement levels"
    ],
    generate: [
        "To generate an image:\n1. Click 'Generate Image' tab\n2. Describe your image in detail\n3. Choose art style and size\n4. Click 'Generate' button\n5. Download when ready",
        "Image generation tips:\n• Be specific in your description\n• Choose appropriate style\n• Try different prompts\n• Experiment with settings",
        "Our AI can generate:\n• Artistic compositions\n• Realistic scenes\n• Custom designs\n• Creative concepts"
    ],
    help: [
        "I can help you with:\n• Using enhancement tools\n• Generating images\n• Understanding features\n• Troubleshooting issues\n\nWhat do you need help with?",
        "Need assistance? I can guide you through:\n• Image uploading\n• Enhancement settings\n• Generation process\n• Downloading results",
        "Let me help you with:\n• Feature explanations\n• Best practices\n• Tips and tricks\n• Common issues"
    ],
    about: [
        "This website was created by Brijrajsinh Jadav to provide:\n• Professional image enhancement\n• AI-powered image generation\n• User-friendly interface\n• Advanced AI features",
        "About our platform:\n• Created by: Brijrajsinh Jadav\n• Purpose: Image Enhancement & Generation\n• Features: AI-powered tools\n• Goal: Professional results",
        "We offer:\n• Advanced AI technology\n• Professional-grade results\n• User-friendly tools\n• Created by Brijrajsinh Jadav"
    ],
    default: [
        "I'm your AI guide created by Brijrajsinh Jadav. I can help you with image enhancement and generation. What would you like to know?",
        "As an AI assistant by Brijrajsinh Jadav, I'm here to help you make the most of our image tools. How can I assist?",
        "I'm a sophisticated AI created by Brijrajsinh Jadav, ready to help you with any questions about our image enhancement and generation features."
    ]
};

// Get chatbot response
function getChatbotResponse(message) {
    message = message.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)];
    }
    else if (message.includes('website') || message.includes('guide') || message.includes('navigation')) {
        return chatbotResponses.website[Math.floor(Math.random() * chatbotResponses.website.length)];
    }
    else if (message.includes('enhance') || message.includes('improve') || message.includes('quality')) {
        return chatbotResponses.enhance[Math.floor(Math.random() * chatbotResponses.enhance.length)];
    }
    else if (message.includes('generate') || message.includes('create') || message.includes('make')) {
        return chatbotResponses.generate[Math.floor(Math.random() * chatbotResponses.generate.length)];
    }
    else if (message.includes('help') || message.includes('how') || message.includes('what')) {
        return chatbotResponses.help[Math.floor(Math.random() * chatbotResponses.help.length)];
    }
    else if (message.includes('about') || message.includes('who') || message.includes('creator')) {
        return chatbotResponses.about[Math.floor(Math.random() * chatbotResponses.about.length)];
    }
    else {
        return chatbotResponses.default[Math.floor(Math.random() * chatbotResponses.default.length)];
    }
}

// Initialize chatbot
function initializeChatbot() {
    // Get DOM elements
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotBox = document.getElementById('chatbot-box');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendMessage = document.getElementById('send-message');

    // Check if elements exist
    if (!chatbotToggle || !chatbotBox || !closeChat || !chatMessages || !userInput || !sendMessage) {
        console.error('Chatbot elements not found:', {
            chatbotToggle: !!chatbotToggle,
            chatbotBox: !!chatbotBox,
            closeChat: !!closeChat,
            chatMessages: !!chatMessages,
            userInput: !!userInput,
            sendMessage: !!sendMessage
        });
        return;
    }

    // Add message to chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const icon = document.createElement('i');
        icon.className = isUser ? 'fas fa-user' : 'fas fa-robot';
        
        const text = document.createElement('p');
        text.innerHTML = message.replace(/\n/g, '<br>');
        
        messageDiv.appendChild(icon);
        messageDiv.appendChild(text);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Toggle chat visibility
    function toggleChat() {
        chatbotBox.classList.toggle('hidden');
        if (!chatbotBox.classList.contains('hidden')) {
            if (chatMessages.children.length === 0) {
                // Show random greeting
                const greeting = chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)];
                addMessage(greeting);
            }
            userInput.focus();
        }
    }

    // Handle user message
    function handleUserMessage() {
        const message = userInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, true);
            userInput.value = '';
            
            // Show typing indicator
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message bot-message typing';
            typingDiv.innerHTML = '<i class="fas fa-robot"></i><p>Thinking...</p>';
            chatMessages.appendChild(typingDiv);
            
            // Get and show response after delay
            setTimeout(() => {
                chatMessages.removeChild(typingDiv);
                const response = getChatbotResponse(message);
                addMessage(response);
            }, 1000);
        }
    }

    // Event Listeners
    chatbotToggle.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', toggleChat);
    
    sendMessage.addEventListener('click', handleUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });

    // Log successful initialization
    console.log('Chatbot initialized successfully');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeChatbot();
    } catch (error) {
        console.error('Error initializing chatbot:', error);
    }
});

// Initialize Security Features
const secureSession = new SecureSession();
const rateLimiter = new RateLimiter();

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        themeToggle.checked = savedTheme === 'light';
    }

    // Theme toggle handler
    themeToggle.addEventListener('change', () => {
        const theme = themeToggle.checked ? 'light' : 'dark';
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
});

// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab') + '-tab';
        document.getElementById(tabId).classList.add('active');
    });
});

// Image enhancement functionality
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const previewContainer = document.querySelector('.preview-container');
const controlsContainer = document.querySelector('.controls-container');
const originalImage = document.getElementById('originalImage');
const enhancedImage = document.getElementById('enhancedImage');
const enhanceButton = document.getElementById('enhanceButton');
const downloadButton = document.getElementById('downloadButton');
const resetButton = document.getElementById('resetButton');

// Drag and drop handlers
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
});

function highlight() {
    dropZone.classList.add('highlight');
}

function unhighlight() {
    dropZone.classList.remove('highlight');
}

// Handle file selection
dropZone.addEventListener('drop', handleDrop, false);
fileInput.addEventListener('change', handleFileSelect, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFileSelect(e) {
    const files = e.target.files;
    handleFiles(files);
}

function handleFiles(files) {
    if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                originalImage.src = e.target.result;
                enhancedImage.src = e.target.result;
                previewContainer.style.display = 'flex';
                controlsContainer.style.display = 'block';
                dropZone.style.display = 'none';
                downloadButton.disabled = true;
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload an image file.');
        }
    }
}

// Enhancement controls
const controls = {
    resolution: document.getElementById('resolution'),
    sharpness: document.getElementById('sharpness'),
    denoise: document.getElementById('denoise'),
    brightness: document.getElementById('brightness')
};

// Update value displays
Object.entries(controls).forEach(([key, control]) => {
    const display = control.nextElementSibling;
    control.addEventListener('input', () => {
        let value = control.value;
        if (key === 'resolution') {
            display.textContent = value + 'x';
        } else if (key === 'brightness') {
            display.textContent = value + '%';
        } else {
            display.textContent = value + '%';
        }
    });
});

// Button state management
function updateButtonState(button, state) {
    button.classList.remove('processing', 'success');
    
    switch(state) {
        case 'processing':
            button.classList.add('processing');
            break;
        case 'success':
            button.classList.add('success');
            setTimeout(() => {
                button.classList.remove('success');
            }, 2000);
            break;
        default:
            break;
    }
}

// Enhance button click handler
enhanceButton.addEventListener('click', async function() {
    const button = this;
    
    try {
        updateButtonState(button, 'processing');
        await enhanceImage(); // Your existing enhance function
        updateButtonState(button, 'success');
    } catch (error) {
        console.error('Enhancement failed:', error);
        updateButtonState(button, 'error');
    }
});

// Download button click handler
downloadButton.addEventListener('click', async function() {
    const button = this;
    
    try {
        updateButtonState(button, 'processing');
        await downloadImage(); // Your existing download function
        updateButtonState(button, 'success');
    } catch (error) {
        console.error('Download failed:', error);
        updateButtonState(button, 'error');
    }
});

// Enhance button handler
enhanceButton.addEventListener('click', () => {
    // Simulate processing
    enhanceButton.disabled = true;
    enhanceButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    setTimeout(() => {
        // Apply filters
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = function() {
            // Set canvas size based on resolution
            const scale = parseInt(controls.resolution.value);
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            
            // Draw and apply filters
            ctx.filter = `brightness(${100 + parseInt(controls.brightness.value)}%) 
                         contrast(${100 + parseInt(controls.sharpness.value)}%)
                         blur(${(100 - parseInt(controls.denoise.value)) / 20}px)`;
            
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            // Update enhanced image
            enhancedImage.src = canvas.toDataURL();
            enhanceButton.disabled = false;
            enhanceButton.innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> Enhance';
            downloadButton.disabled = false;
        };
        
        img.src = originalImage.src;
    }, 1000);
});

// Download button handler
downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'enhanced-image.png';
    link.href = enhancedImage.src;
    link.click();
});

// Reset button handler
resetButton.addEventListener('click', () => {
    Object.values(controls).forEach(control => {
        if (control.id === 'resolution') {
            control.value = 2;
            control.nextElementSibling.textContent = '2x';
        } else if (control.id === 'brightness') {
            control.value = 0;
            control.nextElementSibling.textContent = '0%';
        } else {
            control.value = 50;
            control.nextElementSibling.textContent = '50%';
        }
    });
    enhancedImage.src = originalImage.src;
    downloadButton.disabled = true;
});

// Image generation functionality
const promptInput = document.getElementById('promptInput');
const generateButton = document.getElementById('generateButton');
const generationResult = document.querySelector('.generation-result');
const generatedImage = document.getElementById('generatedImage');
const downloadGenerated = document.getElementById('downloadGenerated');

generateButton.addEventListener('click', () => {
    const prompt = promptInput.value.trim();
    if (prompt) {
        generateButton.disabled = true;
        generateButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        
        // Simulate AI image generation
        setTimeout(() => {
            // For demo, use a placeholder image
            generatedImage.src = 'https://picsum.photos/512/512';
            generationResult.style.display = 'block';
            generateButton.disabled = false;
            generateButton.innerHTML = '<i class="fas fa-paintbrush"></i> Generate';
        }, 2000);
    }
});

downloadGenerated.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'generated-image.png';
    link.href = generatedImage.src;
    link.click();
});

// Initialize AI Service
const aiService = new AIService();

// Auto-enhance button click handler
document.getElementById('autoEnhanceBtn').addEventListener('click', async function() {
    const button = this;
    const imageInput = document.getElementById('imageInput');
    
    if (!imageInput.files || !imageInput.files[0]) {
        alert('Please select an image first');
        return;
    }
    
    try {
        updateButtonState(button, 'processing');
        
        // Read the image file
        const file = imageInput.files[0];
        const reader = new FileReader();
        
        reader.onload = async function(e) {
            try {
                // Auto enhance the image
                const enhancedImage = await aiService.autoEnhanceImage(e.target.result);
                
                // Display the enhanced image
                const outputImage = document.getElementById('outputImage');
                outputImage.src = enhancedImage;
                outputImage.style.display = 'block';
                
                // Enable download button
                document.getElementById('downloadBtn').disabled = false;
                
                // Show success state
                updateButtonState(button, 'success');
                
                // Update preview
                const previewContainer = document.getElementById('previewContainer');
                previewContainer.style.display = 'block';
                
                // Show enhancement complete message
                showMessage('AI Enhancement Complete!', 'success');
            } catch (error) {
                console.error('Auto-enhancement failed:', error);
                showMessage('Auto-enhancement failed. Please try again.', 'error');
                updateButtonState(button, 'error');
            }
        };
        
        reader.readAsDataURL(file);
    } catch (error) {
        console.error('Auto-enhancement failed:', error);
        showMessage('Auto-enhancement failed. Please try again.', 'error');
        updateButtonState(button, 'error');
    }
});

// Helper function to show messages
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    const container = document.querySelector('.image-container');
    container.insertBefore(messageDiv, container.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}
